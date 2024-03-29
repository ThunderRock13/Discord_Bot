module.exports = {
    run: async(client, message, args) => {
        if(!message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {
            message.channel.send("You don't have permissions to use that command.");
        }
        else {
            let memberId = message.content.substring(message.content.indexOf(' ')+1);
            let member = message.guild.member(message.mentions.users.first())
            if(member) {
                if(member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']) && !message.member.hasPermission('ADMINISTRATOR')) {
                    message.channel.send("You cannot unmute that person!");
                }
                else {
                    let mutedRole = message.guild.roles.cache.get('700386838195601499');
                    if(mutedRole) {
                        member.roles.remove(mutedRole);
                        message.channel.send("User was unmuted.");
                    }
                    else {
                        message.channel.send("Muted role not found.");
                    }
                }
            }
            else {
                message.channel.send("Member not found.");
            }
        }
    },
    aliases: [],
    description: 'Unmutes a user'
}