import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

function Layout() {
    return (
        <>
            <Header
                title="My Profile"
                subtitle="Welcome to my personal profile"
            />

            <Outlet />

            <Footer
                name="Aisha Kuantay"
                year={2026}
            />
        </>
    )
}

export default Layout