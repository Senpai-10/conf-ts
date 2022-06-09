import { Config } from "./src";

const config = new Config({
    config_str: `
    dir = example/ hi this is me
    [global]
    # this is a comment
    test=true`,
});

console.log(config.get("global.test"));
