type Skill = {
    id: number
    name: string
}

const skills: Skill[] = [
    { id: 1, name: 'React' },
    { id: 2, name: 'TypeScript' },
    { id: 3, name: 'Python' },
    { id: 4, name: 'Data Analysis' },
    { id: 5, name: 'Git & GitHub' },
]

function SkillsPage() {
    return (
        <main>
            <section className="profile-card">
                <h2>My Skills</h2>

                <div className="profile-links">
                    {skills.map((skill) => (
                        <span key={skill.id}>
                            {skill.name}
                        </span>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default SkillsPage