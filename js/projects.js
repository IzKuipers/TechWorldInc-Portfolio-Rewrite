async function populateProjectsPage() {
    let projectsOutput = document.getElementById("projectsOutput");
    let data = await fetch("example_json.json").then(response => response.json()).then(json => {
        return json;
    });

    console.log(data);

    data.forEach(i => {
        let outerDiv = document.createElement("div");
        let header = document.createElement("h2");
        let headerText = document.createTextNode(i.name);
        let subHeader = document.createElement("h4");
        let subHeaderText = document.createTextNode(i.full_name);
        let bottomSeperator = document.createElement("hr");
        let description = document.createElement("p");
        let descriptionText = document.createTextNode(i.description || "No description");

        header.append(headerText);
        subHeader.append(subHeaderText);

        outerDiv.className = "projectDiv";

        subHeader.style.fontWeight = "100";
        subHeader.style.opacity = "0.5";
        subHeader.style.fontSize = "14px"

        description.append(descriptionText);

        bottomSeperator.style.opacity = "0.1";
        bottomSeperator.style.border = "var(--fg) 1px solid";
        bottomSeperator.style.marginBottom = "20px";

        outerDiv.append(header);
        outerDiv.append(subHeader);
        outerDiv.append(description);
        outerDiv.append(bottomSeperator);

        projectsOutput.append(outerDiv);
    });
}
