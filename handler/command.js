const { readdirSync } = require("fs");

const ascci = require("ascii-table");

const table = new ascci().setHeading("Command", "Load status");

module.exports = (client) => {
    readdirSync("./commands/").forEach(dir => {
        const commands = readdirSync(`./commands/${dir}/`).filter(f => f.endsWith(".js"));

        for (let file of commands) {
            let pull = require(`../commands/${dir}/${file}`);

            if (pull.name) {
                client.commands.set(pull.name, pull);
                table.addRow(file, "✅");
            } else {
                table.addRow(file, "❌ -> missing something??");
                continue;
            }

            if (pull.aliases && Array.isArray(pull.aliases))
                pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
            }
    });
}
