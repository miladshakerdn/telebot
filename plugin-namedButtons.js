const TeleBot = require('../');

const BUTTONS = {
    idm: {
        label: '👋آیدی من',
        command: '/idm'
    },
    test: {
        label: '🌍تست',
        command: '/test'
    },
    hide: {
        label: '⌨️عدم نمایش کیبورد',
        command: '/hide'
    }
};

const bot = new TeleBot({
    token: '416522274:AAFqTsF0YDQaGUIH2tL66RUWTjQOkqaxTwI',
    usePlugins: ['namedButtons'],
    pluginConfig: {
        namedButtons: {
            buttons: BUTTONS
        }
    }
});



bot.on('/idm', (msg) => {
  return bot.sendMessage(msg.from.id, `آیدی عددی شما :    ${ msg.from.id }`);
});


bot.on('/test', (msg) => msg.reply.text('هنوز چیزی نمیدونم'));
bot.on('/hide', (msg) => msg.reply.text('برای نمایش کیبورد از /start استفاده کنید', {replyMarkup: 'hide'}));

bot.on(['/start', '/back'], (msg) => {

    let replyMarkup = bot.keyboard([
        [BUTTONS.idm.label], [BUTTONS.test.label],
        [BUTTONS.hide.label]
    ], {resize: true});

    return bot.sendMessage(msg.from.id, 'کیبورد نمایان شد', {replyMarkup});

});
   bot.on('/test', msg => {

    let replyMarkup = bot.keyboard([
        [bot.button('contact', 'Your contact'), bot.button('location', 'Your location')],
        ['/back', '/hiden'],['/inlineKeyboard']
    ], {resize: true});

    return bot.sendMessage(msg.from.id, 'Button example.', {replyMarkup});

});

// Hide keyboard
bot.on('/hiden', msg => {
    return bot.sendMessage(
        msg.from.id, 'کیبود مخف شد! برای نمایش کیبورد قبلی از /test وبرای کیبورد اصلی از /start استفاده کنید', {replyMarkup: 'hide'}
    );
});

// On location on contact message
bot.on(['location', 'contact'], (msg, self) => {
    return bot.sendMessage(msg.from.id, `Thank you for ${ self.type }.`);
});

bot.on('/inlineKeyboard', msg => {

    let replyMarkup = bot.inlineKeyboard([
        [
            bot.inlineButton('callback', {callback: 'this_is_data'}),
            bot.inlineButton('inline', {inline: 'some query'})
        ], [
            bot.inlineButton('url', {url: 'https://telegram.org'})
        ]
    ]);

    return bot.sendMessage(msg.from.id, 'Inline keyboard example.', {replyMarkup});

});

// Inline button callback
bot.on('callbackQuery', msg => {
    // User message alert
    return bot.answerCallbackQuery(msg.id, `Inline button callback: ${ msg.data }`, true);
});

// Inline query
bot.on('inlineQuery', msg => {

    const query = msg.query;
    const answers = bot.answerList(msg.id);

    answers.addArticle({
        id: 'query',
        title: 'Inline Query',
        description: `Your query: ${ query }`,
        message_text: 'Click!'
    });

    return bot.answerQuery(answers);

});


bot.start();
