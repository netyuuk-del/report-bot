// report.js
// /report コマンドの処理

module.exports = {
    data: {
        name: 'report',
        description: 'レポートを送信します'
    },
    execute(interaction) {
        interaction.reply('レポートコマンドが実行されました');
    }
};
