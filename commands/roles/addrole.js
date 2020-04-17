const checkPermissionRole = (role) => role.permissions.has('ADMINISTRATOR') || role.permissions.has('KICK_MEMBERS') || role.permissions.has('BAN_MEMBERS') || role.permissions.has('MANAGE_GUILD') || role.permissions.has('MANAGE_CHANNELS');

module.exports = {
    run: async(client, message, args) => {
        let roleNames = args.split(", ");
        let roleSet = new Set(roleNames);
        let { cache } = message.guild.roles;
        roleSet.forEach(roleName => {
            let { cache } = message.guild.roles.cache;
            roleSet.forEach(Member => {
                let role = message.guild.roles.cache.find(role => role.name.toLowerCase() === Member.toLowerCase())})
            if(role) {
                if(message.member.roles.cache.has(role.id)) {
                    message.channel.send("You already have this role!");
                    return;
                }
                if(checkPermissionRole(role)) {
                    message.channel.send("You cannot add yourself to this role.");
                }
                else {
                let member = message.guild.member(message.mentions.users.first()) 
                    member.role.add(member)
                        
                }
            }
            else {
                message.channel.send("Role not found!");
            }
        });
    },
    aliases: ['roleadd'],
    description: 'Adds a role to a Guild Member'
}