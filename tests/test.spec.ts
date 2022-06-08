import { Config } from "../src/index";

describe("Config", () => {
    const config = new Config({
        // file_name: "test.conf",
        config_str: "[main]\ntest=true",
        // default: "[main]\ntest=true",
    });

    it("Config init", () => {
        expect(config).toBeInstanceOf(Config);
    });

    it("Default config", () => {
        const default_config = new Config({
            file_name: "test.conf",
            default: "[main]\ntest=true",
        });

        // expect(default_config).toBeInstanceOf(default_config);
    });
});
