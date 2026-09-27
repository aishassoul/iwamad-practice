type HeaderProps = {
    title: string
    subtitle: string
}

function Header({ title, subtitle }: HeaderProps) {
    return (
        <header className="site-header">
            <h1 className="text-3xl font-bold mt-0 mb-2">{title}</h1>
            <p>{subtitle}</p>
        </header>
    )
}

export default Header