import React, { useEffect, useState } from "react";
import { backendClient } from "@/lib/backend";
import styles from "@/app/styles/styles";
import Link from "next/link";

export default () => {
    const [outages, setOutages] = useState(null);

    const getOutages = async () => {
        const qualificationSubmitUrl = '/api/outages'
        const response = await backendClient.get(qualificationSubmitUrl);
        setOutages(response.data);
    }

    useEffect(() => {
        getOutages();
    }, []);

    return (outages && outages?.length) ? outages.map((outage) =>
        <div key={outage.uuid}
             className={`md:w-[50%] mx-auto rounded p-3`} style={{background: '#ffcc00'}}>
            {outage.message}
        </div>
    ) : <></>
}
