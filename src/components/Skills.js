import React from "react";
import { motion } from "framer-motion";


const Skill = ({ name, x, y }) => {
    return (
        <motion.div
            className='flex items-center justify-center rounded-full font-semibold bg-brand-neutral-900 text-brand-neutral-50
        py-3 px-6 shadow-dark cursor-pointer absolute dark:text-brand-neutral-900 dark:bg-brand-neutral-50
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
        xs:text-brand-neutral-900 xs:dark:text-brand-neutral-50 xs:font-bold
        '
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
            lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
            lg:bg-circularLightLg lg:dark:bg-circularDarkLg
            md:bg-circularLightMd md:dark:bg-circularDarkMd
            sm:bg-circularLightSm sm:dark:bg-circularDarkSm
            '>
                <motion.div
                    className='flex items-center justify-center rounded-full font-semibold bg-brand-neutral-900 text-brand-neutral-50
                    p-8 shadow-dark cursor-pointer  dark:text-brand-neutral-900 dark:bg-brand-neutral-50 lg:p-6 md:p-4 xs:text-xs xs:p-2
                '
                    whileHover={{ scale: 1.05 }}
                >
                    ETL
                </motion.div>

                <Skill name="Python" x="-22vw" y="-2vw" />
                <Skill name="SQL" x="-5vw" y="-10vw" />
                <Skill name="Data Modelling" x="20vw" y="6vw" />
                <Skill name="Data Governance" x="0vw" y="12vw" />
                <Skill name="BigQuery" x="-20vw" y="-15vw" />
                <Skill name="Spark" x="15vw" y="-12vw" />

            </div>
        </>
    )
}

export default Skills