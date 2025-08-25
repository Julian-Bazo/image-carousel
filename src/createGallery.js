export default function createGallery(array) {

    let galleryNum = 0;
    galleryNum++;
    let imgNum = 0;
    let selector = 0;
    let scrollPosition;
    const content = document.querySelector(".content");

    const imgFrame = document.createElement("div");
        imgFrame.classList.add("img-frame");
        imgFrame.style.width = "20rem"
        imgFrame.style.overflow = "hidden";
        imgFrame.style.justifySelf = "center";
        imgFrame.style.border = "2px black solid";
        imgFrame.style.position = "relative";
        content.appendChild(imgFrame);
    
    const imgWide = document.createElement("div");
        imgWide.classList.add("img-wide");
        imgWide.style.overflow = "hidden";
        imgWide.style.boxSizing = "content-box"
        imgFrame.appendChild(imgWide);
        imgWide.style.display = "flex";
        imgWide.style.gap = "1rem"
    
    array.map((img) => {
        const imgDiv = document.createElement("img");
        imgDiv.src = `${img}`
        imgDiv.id = `G${galleryNum}I${imgNum}`;
        console.log(imgDiv.id);
        imgDiv.style.width = "20rem"
        imgWide.appendChild(imgDiv);
        imgNum++;
    })

    console.log(imgNum);

    const buttonDiv = document.createElement("div");
        content.appendChild(buttonDiv);
        buttonDiv.style.display = "flex";
        buttonDiv.style.gap = "6rem";
        buttonDiv.style.justifySelf = "center"
        buttonDiv.style.marginTop = "2rem";

    const backButton = document.createElement("button");
        backButton.textContent = "<==";
        backButton.style.width = "5rem";
        buttonDiv.appendChild(backButton);

    const forwardButton = document.createElement("button");
        forwardButton.textContent = "==>";
        forwardButton.style.width = "5rem";
        buttonDiv.appendChild(forwardButton);
    
    forwardButton.addEventListener("click", () => {
        console.log("==>");
        scrollPosition = document.getElementById(`G${galleryNum}I${selector}`);
        console.log(scrollPosition);
        selector++
        if (selector >= imgNum) {
            selector = 0;
        }
        document.getElementById(`G${galleryNum}I${selector}`).scrollIntoView({
            behavior: "smooth",
        });
        console.log(`Selector: ${selector}`);

    })

    backButton.addEventListener("click", () => {
        console.log("<==");
        scrollPosition = document.getElementById(`G${galleryNum}I${selector}`);
        console.log(scrollPosition);
        selector--;
        if (selector < 0) {
            selector = imgNum - 1;
        }
        console.log(`Selector: ${selector}`);
        document.getElementById(`G${galleryNum}I${selector}`).scrollIntoView({
            behavior: "smooth",
        });
    })

}

// Allows an array for parameters, will loop through array to create
// as many divs as imgs in array.
// These divs will be added to the wide whole gallery div
// Wide gallery div will have a smaller div above it

// 