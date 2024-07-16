import React, { useEffect, useState } from "react";
import { backendClient } from "@/lib/backend";
import MarkdownView from "react-showdown";

export default () => {
    const [outages, setOutages] = useState([]);

    const getOutages = async () => {
        const outageUrl = '/api/outages'
        const response = await backendClient.post(outageUrl);
        setOutages(response.data);
    }

    useEffect(() => {
        getOutages();
    }, []);

    return <>
        <style jsx global>{`
            .outage {
                font-size: 1em;
                line-height: 1em;
                h1, h2, h3, h4, h5 {
                    font-size: 115%;
                    font-weight: bold;
                    line-height: 0.5em;
                    margin-bottom: 0.25em;
                }
                a {
                    color: rgb(48, 127, 228);
                    text-decoration: underline;
                }
            }
        `}</style>
        {outages.map((outage) =>
        <div key={outage.uuid}
             className={`outage md:w-[50%] mx-auto rounded p-3`}
             style={{background: '#ffbe0b', whiteSpace: 'pre-wrap'}}>
            <MarkdownView markdown={outage.message}/>
        </div>)}
        </>
}
