import React, { useEffect, useState } from "react";
import { backendClient } from "@/lib/backend";
import MarkdownView from "react-showdown";
import Link from "next/link";

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
            <br/>

            <Link
                href={"/outage/"+outage.uuid}
                params={{uuid: "outage.uuid"}}
                // params={{uuid: "outage.uuid"}}
                className="w-full cursor-pointer mt-3 md:w-auto text-primary font-medium text-base border-[1px] border-solid border-primary px-4 py-2 rounded-md"
            >Outage Map
            </Link>
        </div>
                  )}
        </>
}
