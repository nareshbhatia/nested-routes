# Nested Routes Next.js

## Development Build

```sh
yarn dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Production Build

First, build your app for production:

```sh
yarn build
```

Then run the app in production mode:

```sh
yarn start
```

## API Server

This app makes API calls to an external server deployed at
`https://nested-routes-server.herokuapp.com`. If for some reason you'd like to
deploy the API server locally, follow the instructions at
[Nested Routes Server](../nested-routes-server/README.md). and change the
API_URL constant in `/utils/Constants.ts` to `http://localhost:8080`.
