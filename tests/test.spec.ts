import { Config } from "../src/index";

describe("Config", () => {
    const config = new Config({
        config_str: `
        dir = example/ hi this is me
        [global]
        # this is a comment
        test=true`,
    });

    it("Config init", () => {
        expect(config).toBeInstanceOf(Config);
    });

    it("Default config", () => {
        const default_config = new Config({
            file_name: "test.conf",
            default: "[main]\ntest=true",
        });

        expect(default_config.get("main.test")).toBe("true");
    });
});
