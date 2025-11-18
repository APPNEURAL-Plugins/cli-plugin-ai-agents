import { Command } from "commander";
import { registerCommands } from "./commands/index.js";

const plugin = {
  name: "plugin-ai-agents",
  version: "0.1.0",
  install(cli: Command) {
    let toolsCmd = cli.commands.find(cmd => cmd.name() === "tools");
    if (!toolsCmd) toolsCmd = cli.command("tools");

    let cmd = toolsCmd.commands.find(cmd => cmd.name() === "plugin-ai-agents");
    if (!cmd) cmd = toolsCmd.command("plugin-ai-agents");

    registerCommands(cmd, { prefix: "", plugin: "plugin-ai-agents" });
  },
};

export default plugin;
