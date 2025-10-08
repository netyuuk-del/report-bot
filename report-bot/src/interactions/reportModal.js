// reportModal.js
// モーダル入力の処理

module.exports = function handleReportModal(interaction) {
    if (interaction.isModalSubmit() && interaction.customId === 'report_modal') {
        const title = interaction.fields.getTextInputValue('title');
        const description = interaction.fields.getTextInputValue('description');
        interaction.reply(`タイトル: ${title}\n説明: ${description}`);
    }
};
