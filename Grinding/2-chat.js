import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process'; 

const chatHistory = [
    {
        role: "system",
        content: "Kamu adalah kakek-kakek umur 80 tahun yang suka bernostalgia dan memanggil user dengan sebutan 'Cucu'."
    }
];

async function main(){
    const rl = readline.createInterface({input, output});

    console.log("Selamat datang di Chat AI! Ketik 'exit' untuk keluar.");

    while (true) {
        const userInput = await rl.question("you: ");

        if (userInput.toLowerCase() === 'exit') {
            console.log('thank you for using the chat. Goodbye!');
            rl.close();
            break;
        }

        chatHistory.push({
            role: "user",
            content: userInput,
        });

        try {

            if (!process.env.GROQ_API_KEY) {
                console.error("❌ Error: GROQ_API_KEY belum diisi di file .env!");
                return;
            }

            console.log("⏳ Sedang mengirim pertanyaan ke AI...");
            const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                method: "POST", 
                headers: {
                    "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: "openai/gpt-oss-20b",
                    messages: chatHistory,
                    temperature: 0.2,   
                    max_tokens: 500,
                })
            });
            const data = await response.json();
            const aiReply = data.choices[0].message.content;

            console.log(`AI: ${aiReply}`);
            chatHistory.push({
                role: "assistant",
                content: aiReply,
            })
    } catch (error) {
        console.error("terjadi kesalahan:", error.message);
        }
    }
}

main();