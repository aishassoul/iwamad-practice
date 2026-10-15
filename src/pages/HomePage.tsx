import ProfileCard from '../components/ProfileCard'
import photo from '../assets/photo.jpg'

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

function HomePage() {
    return (
        <main>
            <ProfileCard
                name="Aisha Kuantay"
                bio="I am a third-year IT Management student who enjoys learning about technology, business, and creative digital projects."
                photo={photo}
                links={profileLinks}
            />
        </main>
    )
}

export default HomePage