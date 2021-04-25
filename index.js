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
    
    let statuses = [`Potřebuješ pomoc? Vytvoři si ticket!`, `host.frantata.cz`, `Napiš !help pro pomoc`, `Doporučte nás vašim přátelům!`];
    
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
   


client.login("token");
