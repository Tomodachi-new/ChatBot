const discord = require("discord.js");
const client = new discord.Client();
const alexa = require("alexa-bot-api");
var chatbot = new alexa(); // Setting up the client 
client.once("ready", () => {
client.user.setActivity('Chat Bot', { Type: 'PLAYING' }) 
  console.log("Ready for chatting!");
});
client.on("message", async message => {
  // when client detects a message
  if (message.author.bot) return; // if the author of the message is a bot ignore the case
  let content = message.content; // let content ( a variable used to fetch response ) be equal to the message's content
  chatbot.getReply(content, "Indonesian").then(response =>
    message.channel.send(response, {
             
    })
  ); //get chatbot's reply
});

client.login(process.env.TOKEN); //login using the token
