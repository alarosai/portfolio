import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout.'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import projectPeru from "../../public/images/projects/peru-festivities.png"
import projectNlToSql from "../../public/images/projects/nl-to-sql.png"
import projectStock from "../../public/images/projects/stock-portfolio-dashboard.png"
import { motion } from "framer-motion";
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);


const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'
        >
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
            rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
            '/>
            <Link
                href={link}
                target="_blank"
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link
                    href={link}
                    target="_blank"
                    className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'> <GithubIcon /> </Link>
                    <Link href={link} target="_blank"
                        className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                        dark:bg-light dark:text-dark
                        sm:px-4 sm:text-base
                        '
                    > Visit Project </Link>
                </div>
            </div>

        </article>
    )
}

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl 
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
        ">
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
            rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
            '/>
            <Link href={link}
                target="_blank"
                className='w-full cursor-pointer overflow-hidden rounded-lg '
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link
                    href={link}
                    target="_blank"
                    className='hover:underline underline-offset-2'
                >
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>


                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link
                        href={link}
                        target="_blank"
                        className='text-lg font-semibold underline md:text-base'
                    >
                        Visit
                    </Link>
                    <Link href={github} target="_blank" className='w-8 md:w-6'>
                        <GithubIcon /> {" "}
                    </Link>

                </div>
            </div>
        </article>
    )

}

const projects = () => {
    return (
        <>
            <Head>
                <title>AlbertoLaRosa | Projects Page</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <div className="w-full flex flex-col items-center justify-center mb-16 sm:mb-8 -space-y-6 lg:-space-y-4 sm:-space-y-2">
                        <AnimatedText text="Product Portfolio" className='lg:!text-6xl sm:!text-4xl xs:!text-4xl !text-brand-neutral-900 dark:!text-brand-neutral-50' />
                        <AnimatedText text="Innovation Lab" className='lg:!text-6xl sm:!text-4xl xs:!text-4xl !text-transparent !bg-clip-text !bg-gradient-to-r !from-brand-primary !to-brand-secondary' />
                    </div>

                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="NL-to-SQL Brokerage Query Agent"
                                img={projectNlToSql}
                                summary="An AI-powered natural language interface for querying brokerage data. Ask questions in plain English and the agent generates SQL through LLM, runs it against a SQLite database, and returns results with a natural-language summary."
                                link="https://nl-to-sql-brokerage-query-agent.vercel.app/"
                                github="https://github.com/alarosai/NL-to-SQL-Brokerage-Query-Agent"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Peru Festivities Explorer"
                                img={projectPeru}
                                summary="An interactive, beautifully designed map-based web application to discover the cultural celebrations of Peru."
                                link="https://peru-festivity-expplorer.vercel.app/"
                                github="https://github.com/alarosai/peru-festivity-expplorer"
                                type="Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Stock Portfolio Analyzer"
                                img={projectStock}
                                summary="A data pipeline and Tableau dashboard to analyze stock portfolio performance, calculating XIRR to compare returns against the S&P 500."
                                link="https://github.com/alarosai/Stock-Portfolio-Analyzer"
                                github="https://github.com/alarosai/Stock-Portfolio-Analyzer"
                                type="Project"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects