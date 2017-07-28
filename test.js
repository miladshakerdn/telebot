var TelegramBot=require('node-telegram-bot-api');
var token='416522274:AAFqTsF0YDQaGUIH2tL66RUWTjQOkqaxTwI';
var bot=new TelegramBot(token,{polling: true});

bot.getMe().then(function (me){
    console.log("Hi I am %s!",me.username);
});


bot.onText(/\/start/,function(msg,match){
    bot.sendMessage(msg.chat.id,"ŒÊ‘ ¬„œÌœ",{
        "reply_markup":{
            "keyboard":[["”·«„","Œœ«Õ«›Ÿ"],["„Œ ’« "]]
        }
    });
});
bot.onText(/\/sendpic/,(msg)=>{
    bot.sendPhoto(msg.chat.id,"http://4xmen.ir/wp-content/uploads/2015/12/Programming-while-true-Wallpaper.png");
});

bot.onText(/\/glass/, function(msg, match) {
  var text = '”«‰œÊÌç „Ê—œ ⁄·«ﬁÂ ‘„« çÌ”  ø';

  var keyboardStr = JSON.stringify({
      inline_keyboard: [
        [
          {text:'»‰œ—Ì',callback_data:'bandari'},
          {text:'Â‰œÌ',callback_data:'hendi'}
        ]
      ]
  });

  var keyboard = {reply_markup: JSON.parse(keyboardStr)};
  bot.sendMessage(msg.chat.id, text, keyboard);
});


bot.on('callback_query', function (msg) {
  bot.answerCallbackQuery(msg.id, '‘„« «‰ Œ«» ò—œÌœ', false);
});



bot.on('message',(msg)=>{
    var Hi="”·«„";
    if(msg.text.toLowerCase().indexOf(Hi)===0){
        bot.sendMessage(msg.from.id,msg.from.first_name+"”·«„");
    }
 var Bye="Œœ«Õ«›Ÿ";
    if(msg.text.toLowerCase().indexOf(Bye)===0){
        bot.sendMessage(msg.chat.id,"«„ÌœÊ«—Ì„ »«“Â„ ‘„« —« »»Ì‰Ì„");
    }

var location="„Œ ’« ";
if(msg.text.toLowerCase().indexOf(location)===0){
    bot.sendLocation(msg.chat.id,32.347207853426326,51.49647653393549);
    bot.sendMessage(msg.chat.id,"„‰ «Ì‰Ã« Â” „");
}
});