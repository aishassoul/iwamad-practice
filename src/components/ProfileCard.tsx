import LikeButton from './LikeButton'

type ProfileLink = {
    id: number
    label: string
    href: string
}

type ProfileLinkItemProps = {
    link: ProfileLink
}

type ProfileCardProps = {
    name: string
    bio: string
    photo: string
    links: ProfileLink[]
}

function ProfileLinkItem({ link }: ProfileLinkItemProps) {
    return (
        <a
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
            {link.label}
        </a>
    )
}

function ProfileCard({ name, bio, photo, links }: ProfileCardProps) {

    return (
        <section
            className="profile-card p-8 rounded-2xl"
            aria-labelledby="profile-name"
        >
            <div className="profile-content">

                <img
                    className="profile-photo w-44 h-44 rounded-full object-cover"
                    src={photo}
                    alt={`Photo of ${name}`}
                />

                <div className="profile-info">
                    <h2 id="profile-name">{name}</h2>

                    <p className="leading-relaxed mb-5">
                        {bio}
                    </p>

                    <div className="profile-links">
                        {links.length > 0 ? (
                            links.map((link) => (
                                <ProfileLinkItem
                                    key={link.id}
                                    link={link}
                                />
                            ))
                        ) : (
                            <p>No links available.</p>
                        )}
                    </div>

                    <LikeButton />
                </div>

            </div>
        </section>
    )
}

export default ProfileCard