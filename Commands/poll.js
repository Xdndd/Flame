const Discord = require("discord.js");

module.exports = {
    name: "poll",
    description: "creates a poll",
    guildOnly: true,
    cooldown: 20,
    execute(message, args) {
        let mes = args.slice(0).join(' ');
        if (mes.length < 1) return message.channel.send({ embed: { color: 0xFF0000, title: "» Error!", description: "You must specify what the poll is for!" } }).catch(console.error);
        message.delete();
        const embed = new Discord.MessageEmbed()
            .setColor(0xFFFFFF)
            .setFooter(`Started by: ${message.author.tag}`)
            .setTitle("Poll")
            .setDescription(mes)
        message.channel.send(embed).then(sentEmbed => {
            sentEmbed.react("👍")
            sentEmbed.react("👎")
        })
    
    }
}