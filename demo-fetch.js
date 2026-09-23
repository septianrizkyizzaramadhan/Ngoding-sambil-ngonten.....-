async function tanyaAI(promptUser) {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    console.error("❌ Error: GROQ_API_KEY belum diisi di file .env!");
    return;
  }

  console.log("⏳ Sedang mengirim pertanyaan ke AI...");

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        temperature: 0.2,
        model: "openai/gpt-oss-20b",
        max_tokens: 1000,
        messages: [
          {
            role: "system",
            content: "kamu adalah seorang asissten yang cerdas, dan menjawab dengan jawaban paling singkat, jelas dan informatif."
          },
          {
            role: "user",
            content: promptUser
          }
        ]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ Error dari API:", data);
      return;
    }

    // Ambil teks balasan AI
    const jawabanAI = data.choices[0].message.content;

    console.log("\n🤖 Balasan AI:");
    console.log("==========================================");
    console.log(jawabanAI);
    console.log("==========================================");

  } catch (error) {
    console.error("❌ Terjadi kesalahan jaringan/kode:", error.message);
  }
}

// Panggil fungsinya
tanyaAI("jelaskan apa itu AI dengan bahasa yang mudah dimengerti oleh anak SD");