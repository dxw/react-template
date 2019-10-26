# TODO: Update this to refer to your service.
# This Dockerfile is part of dxw's React template:
#   https://github.com/dxw/react-template/
#

# ------------------------------------------------------------------------------
# base
# ------------------------------------------------------------------------------

FROM node:12.10.0-alpine AS base

RUN apk add --no-cache bash

WORKDIR /app

ENV NODE_ENV production
ENV PORT 3000

# ------------------------------------------------------------------------------
# dependencies
# ------------------------------------------------------------------------------

FROM base AS dependencies

RUN apk add --no-cache git openssh

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

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

COPY Dockerfile /app/Dockerfile
COPY LICENCE /app/LICENCE
COPY README.md /app/README.md

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

COPY --from=dependencies /app/node_modules /app/node_modules
COPY --from=build /app/.next /app/.next
COPY --from=build /app/public /app/public
COPY --from=build /app/server.js /app/server.js

EXPOSE 3000

CMD [ "npm", "start" ]
