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
    opts: Opts;

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
            config_str = this.opts.config_str;
        }
        console.log(config_str);
    }
}

// TODO move parsing logic to this class
class Parser {}
