import { existsSync, writeFileSync, readFileSync } from "fs";

interface Opts {
    file_name?: string;
    /** Config string
     *
     * Example:
     *
     *      config: "[main] \n test = true"
     *
     * The parser will parse config and ignore file_name
     */
    config_str?: string;

    /** Default config
     * used with default (class-method)
     * to overwrite the config file with this defaults
     */
    default?: string;
}

export class Config {
    private opts: Opts;

    constructor(opts: Opts) {
        this.opts = opts;

        this.parser();
    }

    public set() {}
    public get() {}
    public remove() {}

    public empty() {}

    /** Set config file back to default values */
    public default() {
        if (!this.opts.default) {
            // TODO create an empty file
            return;
        }

        // TODO create file with this.opts.default as content
    }

    /** write config_str to config file
     * `only if file_name is set` */
    public save() {
        if (!this.opts.file_name) {
            return;
        }
    }

    /**
     * Parser config (note: run inside constructor)
     */
    private parser() {
        let config_str = "";

        if (this.opts.config_str && !this.opts.file_name) {
            config_str = this.opts.config_str.trim();
        } else {
            if (this.opts.file_name) {
                if (existsSync(this.opts.file_name)) {
                    config_str = readFileSync(
                        this.opts.file_name,
                        "utf8"
                    ).trim();
                } else {
                    if (this.opts.default) {
                        writeFileSync(
                            this.opts.file_name,
                            this.opts.default.trim()
                        );
                        config_str = this.opts.default.trim();
                    } else {
                        writeFileSync(this.opts.file_name, "");
                        config_str = "";
                    }
                }
            }
        }

        // TODO parse config_str
        // trim every line before parsing!
        // Grammar:
        // if line starts with ('//', '#', '"') ignore line (note: add suppert for multiline comments)
        // if line starts '[' and ends with ']' it's a group
        //      if any setting don't belong to any group add to 'main' group

        const comment_signs = ["//", "#", '"'];

        /// change `current_group` when you encounter a new group.
        let current_group = "main";

        console.log(config_str);
    }
}
