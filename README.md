# GemBootJS

GemBoot is a NodeJS Boilerplate for boosting development time.

## Installation

-   [Yarn](#yarn)
-   [NPM](#npm)

### Yarn

```bash
yarn
```

### NPM

```bash
npm install
```

## Environment file

Dont forget to copy .env.dev to .env and fill the environment variables as you need.

## Migration

We're using knex to migrate our migration:

##### First install knex globally:

```bash
npm install -g knex
```

##### Second run knex migrate:

```bash
knex migrate:latest
```

##### NB:

Make sure your database are set in your .env file

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
