export default function createGallery(array, size, title) {

    let galleryNum = 0;
    galleryNum++;
    let imgNum = 0;
    let selector = 0;
    let scrollPosition;
    let dotArray = [];

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
        imgFrame.addEventListener("mouseenter", () => {
            clearInterval(timer);
            console.log("timer stopped");
        })
        imgFrame.addEventListener("mouseleave", () => {
            timer = setInterval(moveSlide, 5000);
            console.log("timer reset");
        })
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
                navigationDot.style.border = "2px solid black";
                navigationDot.style.width = ".7rem";
                navigationDot.style.height = ".7rem"
                navigationDot.style.borderRadius = "5rem";
                fillDot();
                dotArray.push(navigationDot);
                console.log(dotArray);
                navigationDiv.appendChild(navigationDot);
            navigationDot.addEventListener("click", () => {
                console.log(`Dot ${i} was clicked`);
                navigationDot.style.backgroundColor = "black";
                resetTimer();
                document.getElementById(`G${galleryNum}I${i - 1}`).scrollIntoView({
                    behavior: "smooth",
                });
                selector = dotArray.indexOf(navigationDot);
                console.log(`selector: ${selector}`);
                fillDot();
                // dotArray.map((dot) => {
                //     if ((dotArray.indexOf(dot)) === selector) {
                //         dot.style.backgroundColor = "black";
                //     }
                //     else {
                //         dot.style.backgroundColor = "#eee";
                //     }
                // })
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

        fillDot();
        resetTimer();
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
        fillDot();
        resetTimer();
    })

    function fillDot() {
        dotArray.map((dot) => {

        if ((dotArray.indexOf(dot)) === selector) {
            dot.style.backgroundColor = "black";
        }
        else {
            dot.style.backgroundColor = "#eee";
        }
        })
    }

    let timer = setInterval(moveSlide, 5000);



    function moveSlide() {
        forwardButton.click();
    }
    
    function resetTimer() {
        clearInterval(timer);
        timer = setInterval(moveSlide, 5000);
    }
}

// Make arrows positioning and look less jarring
// Add 5 second timeout to move forward