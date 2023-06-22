const HamburgerItem = ({title, href}) => {
    return (
        <a href={href}>
            <p>{title}</p>
        </a>
    )
}

export default HamburgerItem;