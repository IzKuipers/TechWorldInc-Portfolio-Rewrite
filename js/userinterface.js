let currentPage = "";
let urlArgument = new URLSearchParams(window.location.search);

async function switchPage(pageFile,buttonNode) {
    if (pageFile != currentPage) {
        let outp = document.getElementById("mainPage");
        let navb = document.querySelectorAll("div.header-bar > button");
        let data = await fetch(pageFile).then(response => response.text()).then(text => {
            return text;
        });
    
        outp.innerHTML = data;
    
        currentPage = pageFile;

        for (let i=0;i<navb.length;i++) {
            navb[i].classList.remove("selected");
        }
    
        buttonNode.classList.add("selected");
    
    }
}

switchPage(urlArgument.get('url') || "/page/home.html");