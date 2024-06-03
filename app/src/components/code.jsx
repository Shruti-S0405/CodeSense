import React, { useState } from "react";
import axios from "axios";
import Markdown from "react-markdown";
import toast from "react-hot-toast";

const sendCodeToAPI = async code => {
    try {
        console.log(code);
        if (!code) {
            toast.error("No Code Found!");
            setTimeout(() => {
                window.location.reload();
                return;
            }, 1000);
        }
        const response = await axios.post(
            import.meta.env.VITE_API_URL + "/smz",
            {
                code,
            },
            {},
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

function CodeSnipet() {
    const [code, setCode] = useState("");
    const [summary, setSummary] = useState("");
    const [isSummaryLoaded, setIsSummaryLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    if (isLoading) {
        return (
            <div>
                <h2>Your Summary is getting ready!</h2>
            </div>
        );
    } else if (isSummaryLoaded) {
        return (
            <div>
                <h2 className="heading2">
                    Here is your Summary. Thanks for using CodeSense. Happy Coding!!!
                </h2>
                <div className="on-dark">
                    <Markdown>{summary}</Markdown>
                </div>
            </div>
        );
    }

    return (
        <div className="box">
            <div>
                <h2>Use this application for Summarizing your Code</h2>
            </div>
            <div className="on-dark">
                <textarea
                    required
                    className="border-gradient border-gradient-purple"
                    id="code"
                    rows="10"
                    cols="50"
                    placeholder="Insert your code here"
                    onChange={event => {
                        setCode(event.target.value);
                    }}
                ></textarea>
            </div>
            <div className="btn">
                <span
                    onClick={event => {
                        event.preventDefault();
                        setIsLoading(true);
                        sendCodeToAPI(code).then(response => {
                            setSummary(response.summary);
                            setIsSummaryLoaded(true);
                            setIsLoading(false);
                        });
                    }}
                >
                    Sense!
                </span>
            </div>
        </div>
    );
}

export default CodeSnipet;
