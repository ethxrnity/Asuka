const { RichEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");

module.exports = {
  name: "help",
  aliases: ["?", "commands"],
  category: "info",
  description: "Zobrazí sezna příkazů",
  run: async (client, message, args) => {
           const msg = await message.channel.send({embed: {
  color: 5729279,
  description: "<a:AsukaLoading:828186024214659102> Pracuje se na požadavku...",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Požadavek od: " + message.author.username
       }
}}).then(m => m.delete(1999));

let AsukaPM = new RichEmbed()
    .setColor("#576bff")
    .setThumbnail(client.user.avatarURL)
    .setTitle("<a:AsukaHelp:835268037589598278> Seznam všem příakzů!")
    .setDescription("Asuka má nastavený prefix na: ``!`` \n Support server: **[INVITE](https://discord.gg/TYuK7F36h8)** \n<:AsukaInfo:828189065080864789> Dohromady příkazů: **7** \n\n <:AsukaBug:835265602850652170> Pokud najdete jakýkoliv bug, tak nám napište do podpory, kontaktujte: <@574849327650963469> anebo se připojte na Asuka Support **[Support Server](https://discord.gg/TYuK7F36h8)**.\n")

    .addField(`**<a:AsukaModeration:835266151269138522> Moderační příkazy**`, stripIndents`**Ban**: Zabanuje nežádoucího uživatele.
    **Verify**: Ověří nově příchozího uživatele.
    **Kick**: Vyhodí nežádoucího uživatele.
    **Poll**: Vytvoří Anketu s ANO/NE.
    **Purge**: Smaže nechtěné zprávy.
    **Say**: Napíše uživatelovu zprávu jako Asuka.`, true)

    .addField(`**<:AsukaInfo2:835269287869415424> Informační příkazy**`, stripIndents`**User**: Vypíše veškeré důležité informace o daném uživateli.
    **Ping**: Zobrazí botův ping.
    **Avatar**: Zobrazí uživatelův avatar.
    **Server**: Zobrazí informace ohledně serveru.`, true)

let AsukaHelp = new RichEmbed()
    .setTitle("Seznam s příkazy byl úspěšně poslán!")
    .setColor("#576bff")
    .setDescription("<:AsukaPM:835261266661867612> | Poslala jsem ti seznam příkazů do PM.")

message.channel.send(AsukaHelp);
message.author.send(AsukaPM);

}
}