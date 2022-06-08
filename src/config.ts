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
    default: string;
}

export class Config {
    opts: Opts;

    constructor(opts: Opts) {
        this.opts = opts;
    }

    public set() {}
    public get() {}
    public remove() {}

    public empty() {}
    /** Set config file back to default values */
    public default() {}

    /**
     * Parser config (note: run inside constructor)
     */
    private parser() {}
}
