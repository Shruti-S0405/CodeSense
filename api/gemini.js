export const summarize = async (code, api_key) => {
    let reqdata = JSON.stringify({
        contents: [
            {
                parts: [
                    {
                        text:
                            "Can you help by explaining me about how the following code functions in short and gist manner  \n\n" +
                            code,
                    },
                ],
            },
        ],
    });

    let reqconfig = {
        method: "post",
        maxBodyLength: Infinity,
        url:
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" +
            api_key,
        headers: {
            "Content-Type": "application/json",
        },
        data: reqdata,
    };

    const resp = await fetch(reqconfig.url, {
        body: reqdata,
        headers: reqconfig.headers,
        method: "post",
    });

    const data = await resp.json();
    console.log("Data", data);
    return data.candidates[0].content.parts[0].text;
};
