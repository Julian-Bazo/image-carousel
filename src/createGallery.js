export default function createGallery(array, size, title) {

    let galleryNum = 0;
    galleryNum++;
    let imgNum = 0;
    let selector = 0;
    let scrollPosition;
    const content = document.querySelector(".content");
    const wholeGallery = document.createElement("div");
        wholeGallery.style.display = "flex";
        wholeGallery.style.flexDirection = "column";
        wholeGallery.style.justifySelf = "center";
        content.appendChild(wholeGallery);
    
    if (title) {
        const titleHeader = document.createElement("h1");
        titleHeader.textContent = `${title}`;
        wholeGallery.appendChild(titleHeader);
        wholeGallery.style.textAlign = "center";
    }

    const imgFrame = document.createElement("div");
        imgFrame.classList.add("img-frame");
        imgFrame.style.width = `${size}`
        imgFrame.style.overflow = "hidden";
        imgFrame.style.justifySelf = "center";
        imgFrame.style.border = "2px black solid";
        imgFrame.style.position = "relative";
        wholeGallery.appendChild(imgFrame);
    
    const imgWide = document.createElement("div");
        imgWide.classList.add("img-wide");
        imgWide.style.overflow = "hidden";
        imgWide.style.boxSizing = "content-box"
        imgFrame.appendChild(imgWide);
        imgWide.style.display = "flex";
        imgWide.style.gap = "1rem";
    
    array.map((img) => {
        const imgDiv = document.createElement("img");
        imgDiv.src = `${img}`
        imgDiv.id = `G${galleryNum}I${imgNum}`;
        console.log(imgDiv.id);
        imgDiv.style.width = `${size}`;
        imgWide.appendChild(imgDiv);
        imgNum++;
    })

     const navigationDiv = document.createElement("div");
        navigationDiv.style.display = "flex";
        navigationDiv.style.justifyContent = "center";
        navigationDiv.style.backgroundColor = "#eee";
        navigationDiv.style.border = "2px solid gray"
        navigationDiv.style.borderTop = "none";
        navigationDiv.style.gap = ".3rem"
        wholeGallery.appendChild(navigationDiv);
        for (let i = 1; i <= imgNum; i++) {
            const navigationDot = document.createElement("div");
            navigationDot.textContent = `${i}`;    
            navigationDot.style.border = "2px solid black";
            navigationDot.style.borderRadius = "5rem";
                navigationDiv.appendChild(navigationDot);
            navigationDot.addEventListener("click", () => {
                console.log(`Dot ${i} was clicked`);
                document.getElementById(`G${galleryNum}I${i - 1}`).scrollIntoView({
                    behavior: "smooth",
                });
            })
        }

    

    const buttonDiv = document.createElement("div");
        wholeGallery.appendChild(buttonDiv);
        buttonDiv.style.display = "flex";
        buttonDiv.style.gap = "6rem";
        buttonDiv.style.justifyContent = "center"
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