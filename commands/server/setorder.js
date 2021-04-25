const { RichEmbed, Client } = require('discord.js');
const { getMember, formatDate } = require("../../functions.js");
const { stripIndents } = require("common-tags");

module.exports = {
  name: "setorder",
  category: "server",
  description: "Vytvoří tvou objednávku",
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
      
 if(message.channel.name !== `objednavka-${message.author.id}`) return message.channel.send({embed: {
      color: 5729279,
      description: "<a:AsukaError:828188028551299072> Promiň, ale tento příkaz lze použít pouze v kanále s objednávky!",
      timestamp: new Date(),
        footer: {
        icon_url: message.author.avatarURL,
        text: "Požadavek od: " + message.author.username
               }

  }});

if(message.content.includes("|")) {
  var sluzba = message.content.split("|")[0]
  sluzba = sluzba.replace("!setorder","");
  var platba = message.content.split("|")[1]
  var parametry = message.content.split("|")[2]
  var dobatrvani = message.content.split("|")[3]

         const AsukaOrder3 = new RichEmbed()
         .addBlankField()
         .setTitle("<:AsukaOrder:835620702559797299> Vaše objednávka byla úspěšně upřesněna!")
         .addField("\n\n**<:AsukaInfo2:835269287869415424> Vaše požadavky**", stripIndents`**Služba**: ${sluzba}
         **Platba**: ${platba}
         **Parametry**: ${parametry}
         **Doba trvání**: ${dobatrvani}`, true)
         .addBlankField()
         .setDescription("Admini by se měli tvé zprávy co v nejbližší době všimnout a pomoct ti s tvou objednávkou!")
         .setFooter('Požadavek od: ' + message.author.username, message.author.avatarURL)
         .setColor('#576bff')
         .setTimestamp();

        const esayMessage = args.slice(1).join(" ");
        message.delete().catch(O_o=>{});
    
         message.channel.send(AsukaOrder3);
    
     if(!sluzba) return message.channel.send({embed: {
      color: 5729279,
      description: "<a:AsukaError:828188028551299072> Nebyla uvedena sluzba, uveď ji prosím!",
      timestamp: new Date(),
        footer: {
          icon_url: message.author.avatarURL,
          text: "Požadavek od: " + message.author.username
           }
    }});

    if(!platba) return message.channel.send({embed: {
      color: 5729279,
      description: "<a:AsukaError:828188028551299072> Nebyla uvedena platba, uveď ji prosím!",
      timestamp: new Date(),
        footer: {
          icon_url: message.author.avatarURL,
          text: "Požadavek od: " + message.author.username
           }
    }});
    if(!parametry) return message.channel.send({embed: {
      color: 5729279,
      description: "<a:AsukaError:828188028551299072> Nebyly uvedeny parametry, uveď je prosím!",
      timestamp: new Date(),
        footer: {
          icon_url: message.author.avatarURL,
          text: "Požadavek od: " + message.author.username
           }
    }});
    if(!dobatrvani) return message.channel.send({embed: {
      color: 5729279,
      description: "<a:AsukaError:828188028551299072> Nebyla uvedena doba trvání, uveď ji prosím!",
      timestamp: new Date(),
        footer: {
          icon_url: message.author.avatarURL,
          text: "Požadavek od: " + message.author.username
           }
    }});
}
  }}