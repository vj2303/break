"use client"

import React, { useEffect, useState } from 'react'

const SuggestedResponses = ({  handleSelectPrompt, isLoading }) => {
    const prompts = [
        {
            prompt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            prompt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            prompt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            prompt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
    ]
    const [responses, setResponses] = useState(prompts);

    return (
        <div className='max-w-[1300px] mx-auto py-[42px] px-[10px]'>
            <h1 className="font-bold text-[28px] text-left">Suggested for you</h1>
            <div className="flex flex-wrap justify-between gap-[30px]">
                {prompts.map((ele, i) => (
                    <div className="max-w-[48%] text-left border rounded-lg p-[30px] shadow-sm" key={i}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-2 bolt">
                            <path
                                fillRule="evenodd"
                                d="M9.58 1.077a.75.75 0 0 1 .405.82L9.165 6h4.085a.75.75 0 0 1 .567 1.241l-6.5 7.5a.75.75 0 0 1-1.302-.638L6.835 10H2.75a.75.75 0 0 1-.567-1.241l6.5-7.5a.75.75 0 0 1 .897-.182Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <p>{isLoading ? "Loading..." : ele.prompt}</p>
                        <p className="border-b-2 border-black ml-auto max-w-fit cursor-pointer" onClick={() => handleSelectPrompt(ele.prompt)}>
                            Ask this
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SuggestedResponses;
