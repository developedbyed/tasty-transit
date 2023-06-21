import { useState } from "react";
import HamburgerItem from "./HamburgerNavItem";

const Hamburger = () => {
    const [open, setOpen] = useState(false);
    return (
<div className="min-w-max flex flex-col">
    <div className="cursor-pointer md:hidden justify-end self-end" onClick={() => {setOpen(!open)}}>
        <span className="block w-10 h-1 mb-2 bg-black"></span>
        <span className="block w-10 h-1 mb-2 bg-black"></span>
        <span className="block w-10 h-1 bg-black"></span>
    </div>
    {open && 
    <div className="flex flex-col gap-4 mt-4 z-10">
        <HamburgerItem href="/" title="Home" />
        <HamburgerItem href="/about" title="About" />
        <HamburgerItem href="/services" title="Services" />
        <HamburgerItem href="/testimonials" title="Testimonials" />
        <HamburgerItem href="/blog" title="Blog" />
        <a href="/contact">Get In Touch</a>
    </div>
    }
</div>
    )
}

export default Hamburger;


