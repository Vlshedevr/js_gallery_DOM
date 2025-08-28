"use strict";
const pictureContainer = document.querySelector("#thumbs");
const largeImg = document.querySelector("#largeImg");
pictureContainer.addEventListener("click", (ev)=>{
    const imgLink = ev.target.closest(".list-item__link");
    if (imgLink) {
        ev.preventDefault();
        const newLargeImg = imgLink.getAttribute("href");
        largeImg.setAttribute("src", newLargeImg);
    }
});

//# sourceMappingURL=index.f75de5e1.js.map
