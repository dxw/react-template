# ------------------------------------------------------------------------------
# base
# ------------------------------------------------------------------------------

FROM node:12.10.0-alpine AS base

RUN apk add --no-cache bash

WORKDIR /app

ENV NODE_ENV production
ENV PORT 3000

COPY LICENCE /app/LICENCE
COPY README.md /app/README.md

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

# ------------------------------------------------------------------------------
# dependencies
# ------------------------------------------------------------------------------

FROM base AS dependencies

RUN apk add --no-cache git openssh

RUN npm ci

# ------------------------------------------------------------------------------
# build
# ------------------------------------------------------------------------------

FROM base AS build

COPY . /app

RUN NODE_ENV=development npm ci

RUN npm run build

# ------------------------------------------------------------------------------
# app
# ------------------------------------------------------------------------------

FROM base AS app

COPY --from=dependencies /app/node_modules /app/node_modules
COPY --from=build /app/.next /app/.next

EXPOSE 3000

CMD [ "npm", "start" ]
