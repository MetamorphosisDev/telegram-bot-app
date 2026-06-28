async function pingBot(telegramClient, callback) {
    const start = Date.now();

    const message = await telegramClient.sendMessage(
        callback.chat.id,
        "🏓 Checking..."
    );
    const latency = Date.now() - start;
    const uptime = Math.floor(process.uptime());

    await telegramClient.editMessageText(
        `
        🏓 *Ping Result*
────────────────────────

 🤖 Status         ㅤㅤㅤ: Online

 ⚡ Latency      ㅤㅤㅤ: ${latency} ms

 📡 Network     ㅤㅤㅤ: Stable

 ⏱ Uptime       ㅤㅤㅤ: ${uptime}s

────────────────────────
`,
        {
            chat_id: callback.chat.id,
            message_id: message.message_id,
            parse_mode: "Markdown"
        });
}

module.exports = pingBot;