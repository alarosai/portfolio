import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info, link }) => {
    const ref = useRef(null);
    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
        >
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <a
                    href={link || "#"}
                    target={link && link !== "#" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="group"
                >
                    <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg text-brand-neutral-900 dark:text-brand-neutral-50 group-hover:underline group-hover:text-brand-primary dark:group-hover:text-brand-primary transition-colors">
                        {type}
                    </h3>
                    <span className="capitalize font-medium text-brand-neutral-600 dark:text-brand-neutral-400 xs:text-sm">
                        {time} | {place}
                    </span>
                    <p className="font-medium w-full md:text-sm">{info}</p>
                </a>
            </motion.div>
        </li>
    );
};

const Certifications = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });
    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
                Certifications
            </h2>

            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full origin-top bg-gradient-to-b from-brand-primary to-brand-secondary md:w-[2px] md:left-[30px] xs:left-[20px]"
                />

                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details
                        type="AI Agents Fundamentals"
                        time="Issued Oct 2025"
                        place="Hugging Face"
                        info="Skills: Python · LLM architecture · GenAI · Memory & State Management"
                        link="https://cas-bridge.xethub.hf.co/xet-bridge-us/67a47037749ea2c4b9fafd4b/c8650a17cae455432c86410334764beeca7fd27a97703e6914524441c3e93c9b?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cas%2F20260325%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260325T051924Z&X-Amz-Expires=3600&X-Amz-Signature=645a300305cf001b99487081140bfea464c222bca38579dc3dd230768964cd35&X-Amz-SignedHeaders=host&X-Xet-Cas-Uid=public&response-content-disposition=inline%3B+filename*%3DUTF-8%27%272025-10-06.png%3B+filename%3D%222025-10-06.png%22%3B&response-content-type=image%2Fpng&x-amz-checksum-mode=ENABLED&x-id=GetObject&Expires=1774419564&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc3NDQxOTU2NH19LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2FzLWJyaWRnZS54ZXRodWIuaGYuY28veGV0LWJyaWRnZS11cy82N2E0NzAzNzc0OWVhMmM0YjlmYWZkNGIvYzg2NTBhMTdjYWU0NTU0MzJjODY0MTAzMzQ3NjRiZWVjYTdmZDI3YTk3NzAzZTY5MTQ1MjQ0NDFjM2U5M2M5YioifV19&Signature=Lu56Y7S3wSGnrI%7EMYVoXDr0%7EZZcx8aI6mgWJxmNKdj%7EVyzARtwV8MDcofgbkm9oRWBN9RNcHNoAA2OfL124YPp8vH3fJY4E6s4SSenZd-pdjSXF7q6%7E4kpq1CDyHBNAvjWtyNkDgMjxtQVqV4QQ3pbOLEGFw0Dc8DUjolpCnSPNDYLTt-SWPSteZ4mxNWYqEj%7E7Sj8DvxV2%7ENPWmVROfBtpVzIDPQf6WXYOVIpIZlBQgeUWaCELYGMIrCk52OnK7uXkeI6451Umu%7EHfjm3y0ValW-ElHxwHBE8HpGfyP7%7E84K3Zw1Coqv3iv6t6BqmiJeVW5QB6Ygsirp4z8BdCzBg__&Key-Pair-Id=K2L8F4GPSG1IFC"
                    />
                    <Details
                        type="Claude 101"
                        time="Issued Mar 2026"
                        place="Anthropic"
                        info="Skills: Claude AI · Prompt Engineering · Skills Markdown · Tool Use"
                        link="https://verify.skilljar.com/c/a9r3qn7gtdud"
                    />
                    <Details
                        type="Microsoft Certified: Azure Fundamentals"
                        time="Issued Apr 2025"
                        place="Microsoft"
                        info="Skills: Cloud Concepts • Azure Architecture • Core Compute Services • Azure Storage • Governance"
                        link="https://learn.microsoft.com/en-us/users/albertolarosa-6738/credentials/ae90083fe1196547?ref=https%3A%2F%2Fwww.linkedin.com%2F"
                    />
                    <Details
                        type="Accelerating End-to-End Data Science Workflows"
                        time="Issued Apr 2024"
                        place="NVIDIA"
                        info="Skills: PySpark · GPU-accelerated toolkit (RAPIDS, cuDF)"
                        link="https://learn.nvidia.com/certificates?id=dZMLWYKYQiud83MDdrWkcQ"
                    />
                    <Details
                        type="Professional Data Engineer"
                        time="Issued Feb 2023"
                        place="Google Cloud Official"
                        info="Skills: ETL/ELT Design • Real-time Streaming • ML Model Deployment • Data Quality & Monitoring"
                        link="https://www.credly.com/badges/da7d4d07-4081-4cc6-8ba3-46d5ae4ad792/public_url"
                    />
                    <Details
                        type="Associate Cloud Engineer"
                        time="Issued Sep 2022"
                        place="Google Cloud Official"
                        info="Skills: Cloud Architecture • Compute Engine • Cloud Storage • Networking • Security & Compliance"
                        link="https://www.credly.com/badges/800f827c-4c8d-49f5-9df3-85cda7c2e0a6/public_url"
                    />
                </ul>
            </div>
        </div>
    );
};

export default Certifications;
