import React from "react";

const FAQQuickLinks = ({faqs, handleSelectQuestion, showIndex}) => {
    return (
        <>
            <div className="w-full hidden md:flex md:flex-col md:w-[25%] text-center  md:mr-6 mt-5">
                {faqs.map((item, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => handleSelectQuestion(index)}
                            className={`w-full border-b-[1px] py-3 text-start cursor-pointer hover:bg-slate-100/75 px-2 hover:font-bold ${
                                index === showIndex && "font-bold"
                            }`}
                        >
                            <p>{item.title}</p>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default FAQQuickLinks;
