const { RichEmbed } = require('discord.js');
const { getMember, formatDate } = require("../../functions.js");

const VERIFIED = "826757065426337822";

module.exports = {
  name: "verify",
  category: "moderation",
  description: "Dostaneš uživatelskou roli na našem serveru a ověříš tak, že jsi přečetl a souhlasil s našemi pravidly.",
  run: async (client, message, args) => {
    const member = getMember(message, args.join(" "));
    const msg = await message.channel.send({embed: {
      color: 5729279,
      description: "<a:AsukaLoading:828186024214659102> Pracuje se na požadavku...",
      timestamp: new Date(),
        footer: {
          icon_url: message.author.avatarURL,
          text: "Požadavek od: " + message.author.username
           }
    }}).then(m => m.delete(1999));

if(message.channel.id !== "829831939271557151") return message.channel.send({embed: {
  color: 161240,
  description: `<a:AsukaError:828188028551299072> Promiň, ale tento příkaz lze použít pouze v kanále ${message.guild.channels.get('829831939271557151')}`,
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Požadavek od: " + message.author.username
       }

}});


message.member.addRole(VERIFIED);


             const sayMessage = args.join(" ");

             let AsukaVerify = new RichEmbed()
             .setColor("#576bff")
             .setDescription ("<:Welcome:829839753704243213> Byl jsi úspěšně ověřen! Vítej u nás na serveru.")
             .setFooter("Požadavek od: " + message.author.username, message.author.avatarURL)
             .setTimestamp();

             const esayMessage = args.join(" ");
             message.delete().catch(O_o=>{});

             message.channel.send(AsukaVerify)
    .then(m => m.delete(3000));
}
}
