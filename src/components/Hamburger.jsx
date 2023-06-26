import { useState } from "react";
import HamburgerItem from "./HamburgerNavItem";

const Hamburger = () => {
    const [open, setOpen] = useState(false);
    return (
<div className="min-w-max flex flex-col">
    {!open ? 
    <div className="cursor-pointer md:hidden justify-end self-end" onClick={() => {setOpen(true)}}>
        <span className="block w-10 h-1 mb-2 bg-black"></span>
        <span className="block w-10 h-1 mb-2 bg-black"></span>
        <span className="block w-10 h-1 bg-black"></span>
    </div> :
    <div className="cursor-pointer md:hidden mt-1 justify-end self-end" onClick={() => {setOpen(false)}}>
        <span className="block w-10 h-1 bg-black rotate-45 translate-y-1"></span>
        <span className="block w-10 h-1 bg-black -rotate-45 -translate-x-0.5"></span>
    </div>
    }
    {open && 
    <div className="absolute top-16 right-0 flex flex-col gap-6 p-6 z-10 bg-white border-l-2 border-b-2 border-solid border-secondary-accent w-3/5">
        <HamburgerItem href="/" title="Home" />
        <HamburgerItem href="/about" title="About" />
        <HamburgerItem href="/services" title="Services" />
        <HamburgerItem href="/#testimonials" title="Testimonials" />
        <HamburgerItem href="/blog" title="Blog" />
        <a href="/getInTouch" className="bg-black text-white p-2 rounded-lg text-center text-xl">Get In Touch</a>
    </div>
    }
</div>
    )
}

export default Hamburger;


