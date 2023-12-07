import React, { useRef } from 'react'
import Card from './Card'


function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            desc: "Create documentation for best practices in software development",
            filesize: "N/A",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Documentation",
                tagColor: "orange",
            },
        },
        {
            desc: "Document and follow best practices for securing Node.js applications in the MERN stack",
            filesize: "N/A",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Security",
                tagColor: "cyan",
            },
        },
        {
            desc: "Document and follow best practices for securing Node.js applications in the MERN stack",
            filesize: "N/A",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Security",
                tagColor: "red",
            },
        },
        {
            desc: "Research and document the advantages of using the MERN stack for web development",
            filesize: "N/A",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Knowledge",
                tagColor: "green",
            },
        },
        {
            desc: "Complete daily workout routine",
            filesize: ".7mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Important",
                tagColor: "orange",
            },
        },
        {
            desc: "Conduct research on the latest advancements in artificial intelligence",
            filesize: "N/A",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "AI",
                tagColor: "purple",
            },
        },
        {
            desc: "Review and implement cybersecurity measures for the company",
            filesize: "N/A",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Security",
                tagColor: "blue",
            },
        },
    ]
    return (

        <div ref={ref} className='fixed top-0 left-0 z-[2] w-full h-full flex gap-5 flex-wrap p-5'>
            {data.map((item, index) => (
                <Card key={index} data={item} reference={ref} />
            ))}
        </div>

    )
}

export default Foreground