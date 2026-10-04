import { Link } from 'react-router'

function NotFoundPage() {
    return (
        <main>
            <section className="profile-card">
                <h2>404 - Page Not Found</h2>

                <p>
                    Sorry, the page you are looking for does not exist.
                </p>

                <Link to="/">Back to Home</Link>
            </section>
        </main>
    )
}

export default NotFoundPage