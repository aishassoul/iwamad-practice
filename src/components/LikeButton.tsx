import { useLikes } from '../context/LikesContext'

function LikeButton() {
    const { likes, addLike } = useLikes()

    return (
        <button
            id="likeButton"
            type="button"
            onClick={addLike}
        >
            {likes > 0 ? `♥ Liked ${likes}` : '♡ Like'}
        </button>
    )
}

export default LikeButton