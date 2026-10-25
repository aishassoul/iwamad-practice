type FooterProps = {
    name: string
    year: number
}

function Footer({ name, year }: FooterProps) {
    return (
        <footer className="site-header">
            <p>© {year} {name}</p>
        </footer>
    )
}

export default Footer