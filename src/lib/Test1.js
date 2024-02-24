const API_KEY = "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";
const API_URL = "https://api.openai.com/v1/chat/completions";

const promptInput = document.getElementById("promptInput");
const generateBtn = document.getElementById("generateBtn");
const StopBtn = document.getElementById("StopBtn");
const reultText = document.getElementById("reultText");

generateBtn.addEventListener("click", generate);
promptInput?.addEventListener("keyup",(event) => {
    if(event.key === "Enter"){
        generate();
    }
});

const generate = async () => {
    try{
        const response = await fetch(API_URL, {
            method:"post",
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ${API_KEY}'
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{role: "user", content: promptInput.value}],
            }),
        });

        const data = await response.json()
        console.log(data.choices[0.message.content]);
    } catch(error) {
        console.error("Error: ", error);
    }
}

