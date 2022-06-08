import { Config } from "../src/index";

describe("Config", () => {
    const config = new Config({
        config_str: "[main]\ntest=true",
    });

    it("Config init", () => {
        expect(config).toBeInstanceOf(Config);
    });
});
