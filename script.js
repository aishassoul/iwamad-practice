const likeButton = document.querySelector("#likeButton");

likeButton.addEventListener("click", function () {
    if (likeButton.textContent === "♡ Like") {
        likeButton.textContent = "♥ Liked";
        likeButton.classList.add("liked");
    } else {
        likeButton.textContent = "♡ Like";
        likeButton.classList.remove("liked");
    }
});