module.exports = {
    run: async(client, message, args) => {
        if(!message.member.hasPermission('KICK_MEMBERS'))
                message.channel.send("You don't have permission to use that command.");
        else {
            let member =message.guild.member(message.mentions.users.first());
            if(member) {
                try {
                    await member.kick();
                    console.log('A member was kicked.');
                }
                catch(err) {
                    console.log(err);
                }
            }
        }
    },
    aliases: [],
    description: 'Kicks a user'
}