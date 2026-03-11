import React from 'react'
import { motion, useScroll } from 'framer-motion'

const LiIcon = ({ reference }) => {

    const { scrollYProgress } = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    )
    return (
        <figure className='absolute left-0 stroke-brand-neutral-900 dark:stroke-brand-neutral-50'>
            <svg className='-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]' width="75" height="75" viewBox='0 0 100 100'>
                <circle cx="75" cy="50" r="20" className='stroke-brand-primary dark:stroke-brand-primaryDark stroke-1 fill-none' />
                <motion.circle cx="75" cy="50" r="20" className=' stroke-[5px] fill-brand-neutral-50 dark:fill-brand-neutral-900'
                    style={{
                        pathLength: scrollYProgress
                    }}
                />
                <circle cx="75" cy="50" r="10" className='animate-pulse stroke-1 fill-brand-primary dark:fill-brand-primaryDark' />

            </svg>
        </figure>
    )
}

export default LiIcon