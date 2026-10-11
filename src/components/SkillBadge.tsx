
import Tag from './ui/Tag'

type SkillBadgeProps = {
  name: string
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return <Tag label={name} />
}
