import { existsSync, writeFileSync, readFileSync } from "fs";

import { Key } from "./types";
import { Opts } from "./interfaces";

export class Config {
    private opts: Opts;
    private parsed: Map<Key, string>;

    constructor(opts: Opts) {
        this.opts = opts;
        this.parsed = new Map();

        this.parser();
    }

    public set(key: Key, value: string) {
        this.parsed.set(key, value);
    }

    public get(key: Key): string | undefined {
        return this.parsed.get(key);
    }

    public remove(key: Key): boolean {
        return this.parsed.delete(key);
    }

    public clear() {
        this.parsed.clear();
    }

    public has(key: Key): boolean {
        return this.parsed.has(key);
    }

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

        const comment_signs = ["/", "#", '"'];

        /// change `current_group` when you encounter a new group.
        let current_group = "main";

        let config_str_lines = config_str.split("\n");

        for (let i = 0; i < config_str_lines.length; i++) {
            let line = config_str_lines[i].trim();

            // skip commented lines
            // TODO Add suppert for multiline comments (/* */)
            if (comment_signs.includes(line[0])) {
                continue;
            }

            if (line.startsWith("[") && line.endsWith("]")) {
                // Remove first and last chars
                current_group = line.slice(1, -1);
                continue;
            }

            console.log("current_group: " + current_group);
            console.log("line: " + line);

            let split_line = line.split("=");
            let key = split_line[0].trim();
            let value = split_line[1].trim();

            this.parsed.set(`${current_group}.${key}`, value);
        }
    }
}
