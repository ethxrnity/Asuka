const { Client, RichEmbed, Collection } = require("discord.js");

const client = new Client({
  disableEveryone: true, partials: ['MESSAGE', 'REACTION']
});

client.commands = new Collection();
client.aliases = new Collection();

["command"].forEach(handler => {
    require(`./handler/${handler}`)(client);

});

client.on("ready", () => {
  console.log("Jsem online, nazdar Franto. :)");
  setInterval(function() {

    let statuses = [`${client.users.size} uživatelů!`, `host.frantata.cz`, `Napiš !help pro pomoc`, `Doporučte nás vašim přátelům!`];

    let status = statuses[Math.floor(Math.random()*statuses.length)];
    client.user.setPresence({ game: {name: status}, status: "online" });

  }, 5000)
});

client.on("message", async message => {
    const prefix = "!";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    console.log(command)

    if (command)
        command.run(client, message, args);

});

client.on("guildMemberAdd", member => {
    let newuserRole = member.guild.roles.find(role => role.id === "826757065426337822");

    member.addRole(newuserRole);
});


client.login("ODI2OTE4NTYyNTE3MjIxNDI2.YGTd7A.GheOjxD2ERXarQ9VDvtVs3AWOfs");
