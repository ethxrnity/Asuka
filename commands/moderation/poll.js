const { RichEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
  name: "poll",
  aliases: ["question"],
  category: "moderation",
  description: "Vytvoří otázku v určitém kanále!",
  run: async (client, message, args) => {

const member = getMember(message, args.join(" "));

     if(message.channel.id !== "826902620953378916") return message.channel.send({embed: {
  color: 5729279,
  description: `<a:AsukaError:828188028551299072> Promiň, ale tento příkaz lze použít pouze v kanále ${message.guild.channels.get('826902620953378916')}`,
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Request from: " + message.author.username
       }
  
}});

if(!member.roles.has('826756963983294485')) return message.channel.send({embed: {
  color: 5729279,
  description: "<a:AsukaError:828188028551299072> Na tuto akci nemáš dostatečná oprávnění!",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Požadavek od: " + message.author.username
       }}})

let logs = message.guild.channels.find("name", "ankety");
if(!logs) return message.channel.send({embed: {
  color: 5729279,
  description: "<a:AsukaError:828188028551299072> Nebyl nalezen kanál z názvem ``ankety``!",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Požadavek od: " + message.author.username
       }}});

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send({embed: {
  color: 5729279,
  description: "<a:AsukaError:828188028551299072> Na tuto akci nemáš dostatečná oprávnění!",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Požadavek od: " + message.author.username
       }}})


if (!args[0]) return message.channel.send({embed: {
  color: 5729279,
  description: "<a:AsukaError:828188028551299072> Nebyla uvedena otázka nebo předmět, uveď je prosím!",
  timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: "Požadavek od: " + message.author.username
       }}})



if(message.content.includes("|")) {
    var predmet = message.content.split("|")[0]
    predmet = predmet.replace("!poll", "");
    var otazka = message.content.split("|")[1]

const pollembed = new RichEmbed()
    .setColor("#576bff")
    .setThumbnail("")
    .addField(`**Předmět**`, stripIndents`${predmet}`)
    .addField(`**Otázka**`, stripIndents`${otazka}`)

let msg = await logs.send(pollembed)
    .then(function (msg) {
        msg.react("828595193556107274");
        msg.react("828595193347178528");
        message.delete({timeout: 1000});
        }).catch(function(error) {
        console.log(error);
    });

const pollembed2 = new RichEmbed()
    .setColor("#576bff")
    .setDescription(`<a:AsukaSuccess:828593124669521930> Anketa byla úspěšně vytvořena...`)
    .setFooter("Požadavek od: " + message.author.username, message.author.avatarURL)
    .setTimestamp();

    message.channel.send(pollembed2)


}}
}