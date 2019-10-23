# 14. Use service workers to deliver a progressive web app

Date: 2019-10-23

## Status

Accepted

## Context

We want our users to have a smooth user experience. Single page apps require
framework code to download to the user's device before they can be interactive.
Server-side rendering helps by pre-rendering the page the user requested, so the
browser can render it while it fetches the app code.

[Progressive web apps](https://developers.google.com/web/progressive-web-apps/)
use service workers to act as a proxy, enables serving the app from the
browser's cache when possible, speeding up the user's experience on repeated
visits. Service workers cache the app so that even when the user doesn't have
network connectivity, the app can still render.

## Decision

We will use a service worker to proxy the app.

## Consequences

Using a service worker means additional complication when serving the app. There
is an extra layer caching the app.
