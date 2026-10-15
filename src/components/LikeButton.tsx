
import { useLikes } from '../context/LikesContext'
import Button from './ui/Button'

function LikeButton() {
  const { likes, addLike } = useLikes()

  return (
    <Button
      id="likeButton"
      variant="primary"
      onClick={addLike}
      aria-label={`Like (${likes} likes)`}
    >
      {likes > 0 ? `♥ Liked ${likes}` : '♡ Like'}
    </Button>
  )
}

export default LikeButton
