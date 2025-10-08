// reportSelects.js
// プルダウン選択の処理

module.exports = function handleReportSelects(interaction) {
    if (interaction.isSelectMenu() && interaction.customId === 'report_select') {
        interaction.reply(`選択: ${interaction.values.join(', ')}`);
    }
};
