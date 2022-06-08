export interface Opts {
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
