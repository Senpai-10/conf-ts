## Syntax

```
# Comment!

# Group of settings
[main]

host = localhost
port = 4000

```

## Api

```ts
import { Config } from "conf-ts";

const config = new Config({
    // Path to config file
    file_name: "path/to/config",

    // Default config to rewrite config file
    default: `
    # Comment1!
    / Comment2!
    " Comment3!

    # Group of settings
    [main]
    host = localhost
    port = 4000`,
});

console.log(config.get("main.host"));
console.log(config.get("main.port"));
```
