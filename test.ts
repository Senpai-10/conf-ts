import { Config } from "./src";

const config = new Config({
    config_str: `
    # Comment1!
    / Comment2!
    " Comment3!

    # Group of settings
    [main]
    host = localhost
    port = 4000`,

    default: `
    # Comment1!
    / Comment2!
    " Comment3!

    # Group of settings
    [main]
    host = localhost
    port = 4000`,

    // file_name: "config.conf",
});

console.log(config.get("main.host"));
console.log(config.get("main.port"));
