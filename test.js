var TelegramBot=require('node-telegram-bot-api');
var token='416522274:AAFqTsF0YDQaGUIH2tL66RUWTjQOkqaxTwI';
var bot=new TelegramBot(token,{polling: true});
var port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number);
bot.getMe().then(function (me){
    console.log("Hi I am %s!",me.username);
});


bot.onText(/\/start/,function(msg,match){
    bot.sendMessage(msg.chat.id,"ÎæÔ ÂãÏíÏ",{
        "reply_markup":{
            "keyboard":[["ÓáÇã","ÎÏÇÍÇÝÙ"],["ãÎÊÕÇÊ"]]
        }
    });
});
bot.onText(/\/sendpic/,(msg)=>{
    bot.sendPhoto(msg.chat.id,"http://4xmen.ir/wp-content/uploads/2015/12/Programming-while-true-Wallpaper.png");
});

bot.onText(/\/glass/, function(msg, match) {
  var text = 'ÓÇäÏæí ãæÑÏ ÚáÇÞå ÔãÇ íÓÊ ¿';

  var keyboardStr = JSON.stringify({
      inline_keyboard: [
        [
          {text:'ÈäÏÑí',callback_data:'bandari'},
          {text:'åäÏí',callback_data:'hendi'}
        ]
      ]
  });

  var keyboard = {reply_markup: JSON.parse(keyboardStr)};
  bot.sendMessage(msg.chat.id, text, keyboard);
});


bot.on('callback_query', function (msg) {
  bot.answerCallbackQuery(msg.id, 'ÔãÇ ÇäÊÎÇÈ ˜ÑÏíÏ', false);
});



bot.on('message',(msg)=>{
    var Hi="ÓáÇã";
    if(msg.text.toLowerCase().indexOf(Hi)===0){
        bot.sendMessage(msg.from.id,msg.from.first_name+"ÓáÇã");
    }
 var Bye="ÎÏÇÍÇÝÙ";
    if(msg.text.toLowerCase().indexOf(Bye)===0){
        bot.sendMessage(msg.chat.id,"ÇãíÏæÇÑíã ÈÇÒåã ÔãÇ ÑÇ ÈÈíäíã");
    }

var location="ãÎÊÕÇÊ";
if(msg.text.toLowerCase().indexOf(location)===0){
    bot.sendLocation(msg.chat.id,32.347207853426326,51.49647653393549);
    bot.sendMessage(msg.chat.id,"ãä ÇíäÌÇ åÓÊã");
}
});
