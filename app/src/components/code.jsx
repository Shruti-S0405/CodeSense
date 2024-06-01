import React, {useState, useEffect} from 'react'
import axios from 'axios'

const sendCodeToAPI = async (code) => {
    try {
        const response = await axios.post("", {
            code
        }, {})

        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}

function CodeSnipet() {
    const [code, setCode] = useState('');
    const [summary, setSummary] = useState(''); 
    const [isSummaryLoaded, setIsSummaryLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {})

    if(isLoading) {
        return (
            <p>
                Loading
            </p>
        )
    }

    else if (isSummaryLoaded) {
        return (
            <p>
                {summary}
            </p>
        )
    }

    return (
        <div className="box">
            {/* <div>
                <i>
                    Insert your code below:
                </i>
            </div> */}
            <div class="on-dark">
                <textarea class="border-gradient border-gradient-purple"
                    id="code"
                    rows="10"
                    cols="50"
                    placeholder="Insert your code here"
                    onChange={
                        (event) => {
                            setCode(event.target.value)
                        }
                    }
                >
                </textarea>
            </div>
            <div className='btn'>
                <span 
                    onClick={
                        (event) => {
                            event.preventDefault()
                            setIsLoading(true)
                            sendCodeToAPI(code).then((response) => {
                                setSummary(response.summary)
                                setIsSummaryLoaded(true)
                                setIsLoading(false)
                            })
                        }
                    }
                >
                    Sense!
                </span>
            </div>
        </div>
    )
}

export default CodeSnipet