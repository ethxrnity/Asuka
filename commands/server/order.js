const { RichEmbed, Client } = require('discord.js');
const { getMember, formatDate } = require("../../functions.js");
const { stripIndents } = require("common-tags");

module.exports = {
  name: "order",
  category: "server",
  description: "Vytvoří kanál, kde se tě zeptá co za druh objednavky chceš..",
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

message.guild.createChannel(`objednavka-${message.author.id}`, "text").then(c => {
          let everyone = message.guild.roles.find("name", "@everyone");
          c.overwritePermissions(everyone, {
              SEND_MESSAGES: false,
              READ_MESSAGES: false
          });
          c.overwritePermissions(message.author, {
              SEND_MESSAGES: true,
              READ_MESSAGES: true
          });

             const AsukaOrder = new RichEmbed()

             .setDescription(`Objednávka uživatele ${message.author.username}, byla úspěšně vytvořena!`)
             .setFooter('Požadavek od: ' + message.author.username, message.author.avatarURL)
             .setColor('#576bff')

             .setTimestamp();
             message.channel.send(AsukaOrder);
    const channel = client.channels.find(channel => channel.name === `objednavka-${message.author.id}`)

          const AsukaOrder2 = new RichEmbed()

          .setDescription("Předtím než ale začneme, tak budeme potřebovat abyste nám sdělil své požadavky. V první řadě, co za server chcete, čím budete platit, jaké chcete parametry a na jak dlouho u nás chcete hostovat. \n\n Pro upřesnění vašich parametrů stačí napsat: ``!setorder (Služba) | (Platební metoda) | (Paramtery) | (Doba trvání)`` \n\n Příklad takovéto objednávky: ``!setorder Minecraft | Platební karta | 10GB RAM, 30GB Disk | 30d`` \n\n Vaši objednávku zaregistrujeme nejpozději do pár hodin a pokusíme se ji s vámi dokončit a poskytnout vám naše služby! \n\n V případě nějaké chyby v vytváření objednávky kontaktujte: <@574849327650963469>!")
          .setTitle(`<:AsukaOrder:835620702559797299> Vaše objednávka byla úspěšně vytvořena!`)
          .setFooter('Požadavek od: ' + message.author.username, message.author.avatarURL)
          .setColor('#576bff')

          .setTimestamp();
          channel.send(AsukaOrder2);

  })
  }
  }
