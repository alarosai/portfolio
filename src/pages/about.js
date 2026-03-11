import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout.';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/Gray_Chair_Profile_Pic.jpeg";
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })

    }, [springValue, value])
    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
            <Head>
                <title>Alberto La Rosa</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-8'>
                    <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-4xl sm:!text-6xl xs:!text-4xl sm:mb-8 !text-transparent !bg-clip-text !bg-gradient-to-r !from-brand-primary !to-brand-secondary display-inline-block' />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-brand-neutral-600 dark:text-brand-neutral-400'>A little bit about me ...</h2>
                            <p className='font-small text-brand-neutral-700 dark:text-brand-neutral-300'>
                                Hi, I&apos;m Alberto and I&apos;m originally from Peru and currently an MBA candidate at the
                                University of Rochester specializing in Product Management.
                                I&apos;m someone who naturally looks for patterns in markets and
                                customer behavior and then turns them into actionable decisions.
                            </p>
                            <p className='my-4 font-small text-brand-neutral-700 dark:text-brand-neutral-300'>
                                I specialize in the end to end delivery of AI driven tools and scalable solutions, such as
                                chatbots streamlining $50M+ in payments and data pipelines processing $5B. My
                                experience focuses on bridging the gap between engineering and business stakeholders
                                to automate complex operational challenges.
                            </p>
                            <p className='font-small text-brand-neutral-700 dark:text-brand-neutral-300'>
                                I am focused on projects where I can lead product lifecycles from discovery to scale. My goal is
                                to build customer centric solutions that solve complex business problems, using market research
                                and strategic prioritization to deliver measurable ROI.
                            </p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-brand-neutral-900
                        bg-brand-neutral-50 p-8 dark:bg-brand-neutral-900 dark:border-brand-neutral-50 xl:col-span-4  md:order-1 md:col-span-8
                        '>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-brand-neutral-900 dark:bg-brand-neutral-50' />
                            <Image src={profilePic} alt="AlbertoLaRosa" className='w-full h-auto rounded-2xl'
                                priority
                                sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw"
                            />
                        </div>

                        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl text-brand-neutral-900 dark:text-brand-neutral-50'>
                                    <AnimatedNumbers value={20} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-brand-neutral-600 dark:text-brand-neutral-400 xl:text-center md:text-lg sm:text-base
                                xs:text-sm'>
                                    projects completed</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl text-brand-neutral-900 dark:text-brand-neutral-50'>
                                    <AnimatedNumbers value={5} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-brand-neutral-600 dark:text-brand-neutral-400 xl:text-center md:text-lg sm:text-base
                                xs:text-sm'>
                                    years of experience</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl text-brand-neutral-900 dark:text-brand-neutral-50'>
                                    <AnimatedNumbers value={13} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-brand-neutral-600 dark:text-brand-neutral-400 xl:text-center md:text-lg sm:text-base
                                xs:text-sm'>
                                    Mentored and Led</h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    )
}
export default about
