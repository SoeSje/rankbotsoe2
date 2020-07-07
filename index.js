var Discord = require('discord.js')
var Roblox = require('noblox.js')

const Client = new Discord.Client();



Client.login(process.env.BOT_TOKEN)

var Cookie = process.env.COOKIE

var GroupId = 5649997;

var Awesome = 10;
var Sick = 20;
var Epic = 30;
var Legend = 40;
var God = 50;
var How = 60;

var Aw = "awesome";
var Si = "sick";
var Ep = "epic";
var Le = "legend";
var Go = "god";
var Ho = "how";

async function run() {
  await Roblox.setCookie(Cookie);
}

run();

Client.on('message', (message) => {
  
  if (message == "banaanlol") {
    Roblox.shout(GroupId, "Hello sisters")
  }
  
  
  if (message.channel.name == Aw) {
    var Username = message.content

    Roblox.getIdFromUsername(Username)
    .then(function(Id){
      Roblox.setRank(GroupId, Id, Awesome)
      message.react("✅")
      console.log(`${Username} is ranked.`)
    })
  }


  if (message.channel.name == Si) {
    var Username = message.content

    Roblox.getIdFromUsername(Username)
    .then(function(Id){
      Roblox.setRank(GroupId, Id, Sick)
      message.react("✅")
      console.log(`${Username} is ranked.`)
    })
  }


  if (message.channel.name == Ep) {
    var Username = message.content

    Roblox.getIdFromUsername(Username)
    .then(function(Id){
      Roblox.setRank(GroupId, Id, Epic)
      message.react("✅")
      console.log(`${Username} is ranked.`)
    })
  }


  if (message.channel.name == Le) {
    var Username = message.content

    Roblox.getIdFromUsername(Username)
    .then(function(Id){
      Roblox.setRank(GroupId, Id, Legend)
      message.react("✅")
      console.log(`${Username} is ranked.`)
    })
  }


  if (message.channel.name == Go) {
    var Username = message.content

    Roblox.getIdFromUsername(Username)
    .then(function(Id){
      Roblox.setRank(GroupId, Id, God)
      message.react("✅")
      console.log(`${Username} is ranked.`)
    })
  }


  if (message.channel.name == Ho) {
    var Username = message.content

    Roblox.getIdFromUsername(Username)
    .then(function(Id){
      Roblox.setRank(GroupId, Id, How)
      message.react("✅")
      console.log(`${Username} is ranked.`)
    })
  }


})
