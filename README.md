# GemBootJS

GemBoot is a NodeJS Boilerplate for boosting development time.

[![Version](https://img.shields.io/npm/v/gemboot-framework.svg)](https://npmjs.org/package/gemboot-framework)
[![Downloads/week](https://img.shields.io/npm/dw/gemboot-framework.svg)](https://npmjs.org/package/gemboot-framework)
[![License](https://img.shields.io/npm/l/gemboot-framework.svg)](https://github.com/gem-partij/gem-boot-js/blob/master/package.json)

-   [Installation](#installation)
-   [Environment](#environment)
-   [Migration](#migration)

# Installation

-   [GemBoot CLI](#gemboot-cli)

## `GemBoot CLI`

```bash
  /\/|____  _____  __  __  ____    ___    ___  _____        ____  _      ___  /\/|
 |/\// ___|| ____||  \/  || __ )  / _ \  / _ \|_   _|      / ___|| |    |_ _||/\/
    | |  _ |  _|  | |\/| ||  _ \ | | | || | | | | | _____ | |    | |     | |
    | |_| || |___ | |  | || |_) || |_| || |_| | | ||_____|| |___ | |___  | |
     \____||_____||_|  |_||____/  \___/  \___/  |_|        \____||_____||___|

```

```sh-session
$ npm install -g gemboot-cli

$ gemboot create [PROJECT NAME]
```

_More at: [github:gemboot-cli](https://github.com/gem-partij/gemboot-cli/)_

# Environment

Dont forget to copy .env.dev to .env and fill the environment variables as you need.

# Migration

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

## Code Generator

Use this helper tool for generating controller/model/repository or all of them

```bash
node partij add
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
