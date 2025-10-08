// reportButtons.js
// ボタンインタラクションの処理

module.exports = function handleReportButtons(interaction) {
    if (interaction.isButton() && interaction.customId === 'report_button') {
        interaction.reply('レポートボタンが押されました');
    }
};
