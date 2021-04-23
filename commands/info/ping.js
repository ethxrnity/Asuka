const { RichEmbed } = require('discord.js');

module.exports = {
    name: "ping",
    category: "info",
    description: "Odešle botův ping",
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

   let AsukaPing = new RichEmbed()
       .setColor("#576bff")
       .setDescription(`:ping_pong: Pong! **\`${client.pings[0]}ms\`**`)
       .setFooter("Požadavek od: " + message.author.username, message.author.avatarURL)
       .setTimestamp()

       message.channel.send(AsukaPing)


}
    }
