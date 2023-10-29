var elHeaderBtn = document.querySelector(".site-header__follow-btn");
var elModal = document.querySelector(".modal");
var elModalOverlay = document.querySelector(".modal-overlay");
var elModalCloseBtn = document.querySelector(".modal-close");

elHeaderBtn.addEventListener("click", function () {
    elModal.classList.add("show");
    elModalOverlay.classList.add("show");
});

elModalOverlay.addEventListener("click", function () {
    elModal.classList.remove("show");
    elModalOverlay.classList.remove("show");
});

elModalCloseBtn.addEventListener("click", function () {
    elModal.classList.remove("show");
    elModalOverlay.classList.remove("show");
});
