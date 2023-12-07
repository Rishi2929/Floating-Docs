import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"




function Card({ data, reference }) {
    return (
        <div>
            <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.1 }} dragElastic={0.2} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
                <FaRegFileAlt />
                <p className='text-xs mt-5 font-semibold leading-tight'>{data.desc}</p>
                <div className="footer absolute bottom-0 w-full left-0 " >
                    <div className='flex items-center justify-between px-8 py-3 mb-3'>
                        <h5>{data.filesize}</h5>
                        <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
                            {data.close ? <IoIosClose /> : <LuDownload size=".8em" color='#fff' />
                            }
                        </span>
                    </div>
                    {/* {data.tag.isOpen ? (<div className='tag w-full py-4 bg-green-600 flex justify-center items-center'>
                        <h3 className='text-sm font-semibold'>
                            Download Now
                        </h3>
                    </div>) : null} */}
                    {data.tag.isOpen && (<div className="tag w-full py-4 bg-blue-600 flex justify-center items-center" style={{ backgroundColor: data.tag.tagColor }}>
                        <h3 className='text-sm font-semibold'>
                            {data.tag.tagTitle}
                        </h3>
                    </div>)}
                </div>

            </motion.div >
        </div >
    )
}

export default Card