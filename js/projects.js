async function populateProjectsPage() {
    let projectsOutput = document.getElementById("projectsOutput");
    let data = await fetch("https://api.github.com/users/TechWorldInc/repos").then(response => response.json()).then(json => {
        return json;
    });

    console.log(data);

    let maxTimeout = 200;

    data.forEach(i => {
        if (i.name != i.owner.login) {
            maxTimeout += 200;

            let outerDiv = document.createElement("div");
            let header = document.createElement("h2");
            let headerText = document.createTextNode(i.name);
            let headerLink = document.createElement("a");
            let subHeader = document.createElement("h4");
            let subHeaderText = document.createTextNode(i.full_name);
            let description = document.createElement("p");
            let descriptionText = document.createTextNode(i.description || "No description");
            let attrDisplay = document.createElement("p");
            let starDisplayIcon = document.createElement("span");
            let starDisplayText = document.createElement("span");
            let forkDisplayIcon = document.createElement("span");
            let forkDisplayText = document.createElement("span");

            outerDiv.className = "projectDiv";  
            outerDiv.style.opacity = "0";
            outerDiv.style.transition = "opacity 1s";

            header.append(headerText);
            subHeader.append(subHeaderText);
    
            headerLink.append(header);
            headerLink.target = "_blank";
            headerLink.href = i.html_url;
    
            subHeader.style.fontWeight = "100";
            subHeader.style.opacity = "0.5";
            subHeader.style.fontSize = "14px"
    
            description.append(descriptionText);

            starDisplayIcon.className = "material-icons";
            starDisplayIcon.innerText = "star_outline";
            starDisplayIcon.style.verticalAlign = "middle";
            starDisplayIcon.title = "Stars";

            starDisplayText.innerText = i.stargazers_count;
            starDisplayText.style.verticalAlign = "middle";

            forkDisplayIcon.className = "material-icons";
            forkDisplayIcon.innerText = "swap_vert";
            forkDisplayIcon.style.verticalAlign = "middle";
            forkDisplayIcon.style.marginLeft = "15px";
            forkDisplayIcon.title = "Forks";

            forkDisplayText.innerText = i.forks_count;
            forkDisplayText.style.verticalAlign = "middle";
        
            attrDisplay.style.marginBottom = "10px";
            attrDisplay.style.marginTop = "10px";
            attrDisplay.style.opacity = "0.5";

            attrDisplay.append(starDisplayIcon);
            attrDisplay.append(starDisplayText);
            attrDisplay.append(forkDisplayIcon);
            attrDisplay.append(forkDisplayText);

            outerDiv.append(headerLink);
            outerDiv.append(subHeader);
            outerDiv.append(description);
            outerDiv.append(attrDisplay);
    
            projectsOutput.append(outerDiv);

            setTimeout(() => {
                outerDiv.style.opacity = "1";
            }, maxTimeout);
        }
    });
}
