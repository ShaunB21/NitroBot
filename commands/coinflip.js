module.exports = {
    name: 'coinflip',
    description: "Flips a coin",
    execute(message, args) {
        x = (Math.floor(Math.random() * 1));
        if (x == 1) {
            message.channel.send('Heads');
        } else {
            message.channel.send('Tails');
        }
    }
}