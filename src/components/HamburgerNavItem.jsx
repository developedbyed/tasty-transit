const HamburgerItem = ({title, href}) => {
    return (
        <a href={href} className="text-xl">
            <p>{title}</p>
        </a>
    )
}

export default HamburgerItem;