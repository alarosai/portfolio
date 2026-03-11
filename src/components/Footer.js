import Link from "next/link";

const Footer = () => {
    return (
        <footer className='w-full border-t border-brand-neutral-200 bg-white font-medium text-lg text-brand-neutral-900 sm:text-base'>
            <div className='py-8 flex items-center justify-between lg:flex-col lg:py-6 px-12 xl:px-8'>
                <div className="w-1/3 text-left lg:w-full lg:text-center lg:mb-2">
                    <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                </div>
                <div className='w-1/3 text-right lg:w-full lg:py-2'>
                    Built With <span className='text-brand-primary text-2xl px-1'>&#9825;</span>
                    by&nbsp;
                    <Link href="/" className="underline underline-offset-2 hover:text-brand-primary transition-colors">Alberto La Rosa</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer