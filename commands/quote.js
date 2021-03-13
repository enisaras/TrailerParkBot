const fs = require('fs');
let rawdata = fs.readFileSync('./quotes/quotes.json');
let data = JSON.parse(rawdata);

function random_item(items){
        return items[Math.floor(Math.random()*items.length)];
    }

module.exports = {

	name: 'quote',
	description: 'Returns a random quote',
	execute(message, args) {
        
        if(args[0] == "Ricky"){
        //TODO: Write a function to refactor this.
            let random_ricky = random_item(data["quotes"]["Ricky"]);
            message.channel.send(`${random_ricky["text"]}`);
        }
        else if(args[0] == "Bubbles"){
            let random_bubbles = random_item(data["quotes"]["Bubbles"]);
            message.channel.send(`${random_bubbles["text"]}`);
        }
        else if(args[0] == "Julian"){
            let krandom_julian = random_item(data["quotes"]["Julian"]);
            message.channel.send(`${random_julian["text"]}`);
        }
	},
};