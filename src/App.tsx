import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import Footer from './components/Footer'
import photo from './assets/photo.jpg'

const profileLinks = [
    {
        id: 1,
        label: 'GitHub',
        href: 'https://github.com/aishassoul',
    },
    {
        id: 2,
        label: 'Email',
        href: 'mailto:aishakuantaikyzy@gmail.com',
    },
]

function App() {
    return (
        <>
            <Header
                title="My Profile"
                subtitle="Welcome to my personal profile"
            />

            <main>
                <ProfileCard
                    name="Aisha Kuantay"
                    bio="I am a third-year IT Management student who enjoys learning about technology, business, and creative digital projects."
                    photo={photo}
                    links={profileLinks}
                />
            </main>

            <Footer
                name="Aisha Kuantay"
                year={2026}
            />
        </>
    )
}

export default App