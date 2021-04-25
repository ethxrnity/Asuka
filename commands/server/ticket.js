const { RichEmbed, Client } = require('discord.js');
const { getMember, formatDate } = require("../../functions.js");
const { stripIndents } = require("common-tags");

module.exports = {
  name: "ticket",
  category: "server",
  description: "Vytvoří kanál, kde si můžeš vytvořit ticket!",
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

message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
          let everyone = message.guild.roles.find("name", "@everyone");
          c.overwritePermissions(everyone, {
              SEND_MESSAGES: false,
              READ_MESSAGES: false
          });
          c.overwritePermissions(message.author, {
              SEND_MESSAGES: true,
              READ_MESSAGES: true
          });

             const AsukaTicket = new RichEmbed()

             .setDescription(`Ticket uživatele ${message.author.username}, byl úspěšně vytvořen!`)
             .setFooter('Požadavek od: ' + message.author.username, message.author.avatarURL)
             .setColor('#576bff')

             .setTimestamp();
             message.channel.send(AsukaTicket);
    const channel = client.channels.find(channel => channel.name === `ticket-${message.author.id}`)

          const AsukaTicket2 = new RichEmbed()

          .setDescription("Předtím než ale začneme, tak budeme potřebovat abyste nám sdělil své požadavky. V první řadě, co za problém či dotaz máte, na koho váš ticket směřuje a jakou platformu se jedná. \n\n Pro upřesnění vašich požadavků stačí napsat: ``!setticket (Dotaz/Problém) | (Mířená Role) | (Platforma)`` \n\n Příklad takovéto objednávky: ``!setticket Mám dotaz ohledně hostingu | Podpora | Webové stránky`` \n\n Váš problém zaregistrujeme nejpozději do pár hodin a pokusíme se jej s vámi vyřešit a poskytnout vám naše služby! \n\n V případě nějaké chyby v vytváření ticketu kontaktujte: <@574849327650963469>!")
          .setTitle(`<:AsukaOrder:835620702559797299> Váš ticket byl úspěšně vytvořen!`)
          .setFooter('Požadavek od: ' + message.author.username, message.author.avatarURL)
          .setColor('#576bff')

          .setTimestamp();
          channel.send(AsukaTicket2);

  })
  }
  }
