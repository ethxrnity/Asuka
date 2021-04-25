const { RichEmbed, Client } = require('discord.js');
const { getMember, formatDate } = require("../../functions.js");
const { stripIndents } = require("common-tags");

module.exports = {
  name: "setticket",
  category: "server",
  description: "Vytvoří tvůj ticket",
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

 if(message.channel.name !== `ticket-${message.author.id}`) return message.channel.send({embed: {
      color: 5729279,
      description: "<a:AsukaError:828188028551299072> Promiň, ale tento příkaz lze použít pouze v kanále s tickety!",
      timestamp: new Date(),
        footer: {
        icon_url: message.author.avatarURL,
        text: "Požadavek od: " + message.author.username
               }

  }});

if(message.content.includes("|")) {
  var dotaz = message.content.split("|")[0]
  dotaz = dotaz.replace("!setticket","");
  var role = message.content.split("|")[1]
  var platforma = message.content.split("|")[2]

         const AsukaOrder3 = new RichEmbed()
         .addBlankField()
         .setTitle("<:AsukaOrder:835620702559797299> Váš ticket byl úspěšně upřesněn!")
         .addField("\n\n**<:AsukaInfo2:835269287869415424> Vaše požadavky**", stripIndents`**Dotaz**: ${dotaz}
         **Mířená role**: ${role}
         **Platforma**: ${platforma}`, true)
         .addBlankField()
         .setDescription("Admini by se měli tvé zprávy co v nejbližší době všimnout a pomoct ti s tvým dotazem!")
         .setFooter('Požadavek od: ' + message.author.username, message.author.avatarURL)
         .setColor('#576bff')
         .setTimestamp();

        const esayMessage = args.slice(1).join(" ");
        message.delete().catch(O_o=>{});

         message.channel.send(AsukaOrder3);

     if(!dotaz) return message.channel.send({embed: {
      color: 5729279,
      description: "<a:AsukaError:828188028551299072> Nebyl uveden dotaz, uveď jej prosím!",
      timestamp: new Date(),
        footer: {
          icon_url: message.author.avatarURL,
          text: "Požadavek od: " + message.author.username
           }
    }});

    if(!role) return message.channel.send({embed: {
      color: 5729279,
      description: "<a:AsukaError:828188028551299072> Nebyla uvedena role, uveď ji prosím!",
      timestamp: new Date(),
        footer: {
          icon_url: message.author.avatarURL,
          text: "Požadavek od: " + message.author.username
           }
    }});
    if(!platforma) return message.channel.send({embed: {
      color: 5729279,
      description: "<a:AsukaError:828188028551299072> Nebyla uvedena platforma, uveď ji prosím!",
      timestamp: new Date(),
        footer: {
          icon_url: message.author.avatarURL,
          text: "Požadavek od: " + message.author.username
           }
    }});

}
  }}
