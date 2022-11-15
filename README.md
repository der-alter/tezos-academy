# Tezos Academy

## Local

Install dependencies:

```sh
yarn
```

Start everything:

```sh
docker compose -f ./stack.yml up
yarn start
```

if you get an error `error:25066067:DSO support routines:dlfcn_load:could not load the shared library`

```sh
export OPENSSL_CONF=/dev/null
```

TODO: see RSA key error https://www.youtube.com/watch?v=f5yQNk4mvgk
