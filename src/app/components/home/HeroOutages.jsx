import React, { useEffect, useState } from "react";
import { backendClient } from "@/lib/backend";
import MarkdownView from "react-showdown";

export default () => {
    const [outages, setOutages] = useState(null);

    const getOutages = async () => {
        const outageUrl = '/api/outages'
        const response = await backendClient.post(outageUrl);
        setOutages(response.data);
    }

    useEffect(() => {
        getOutages();
    }, []);

    return (outages && outages?.length) ? outages.map((outage) =>
        <div key={outage.uuid}
             className={`md:w-[50%] mx-auto rounded p-3 font-bold`}
             style={{background: '#ffcc00', whiteSpace: 'pre-wrap'}}>
            <MarkdownView markdown={outage.message}/>              
        </div>
    ) : <></>
}
