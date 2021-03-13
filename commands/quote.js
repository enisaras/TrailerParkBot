const fs = require('fs');
let rawdata = fs.readFileSync('./quotes/quotes.json');
let data = JSON.parse(rawdata);


const ricky_quotes = ["Fuck off dickweed!", "Where there is smoke there is wires!", "Two Turnips In Heat.", "Worst Case Ontario.", 
               "Get two birds stoned at once", "It's Clear To See Who Makes The Pants Here."]
const bubbles_quotes = ["That depends, can you go fuck yourself?", "I'm not running over a kitty to save your dope Ricky!", 
                        "I Ain't Never Been So Frisky Before In My Whole Life!"];
const julian_quotes = ["Did they just call me Patrick Swayze?"];
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
        else if(args[0] == "Bubbles")
            message.channel.send(`${random_item(bubbles_quotes)}`);
        else if(args[0] == "Julian")
            message.channel.send(`${random_item(julian_quotes)}`);
	},
};