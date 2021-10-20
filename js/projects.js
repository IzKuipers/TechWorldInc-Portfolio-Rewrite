

function startProjectsInterval() {
    //setInterval(() => {
    if (currentPage.endsWith("projects.html")) {
        populateProjectsPage();
    }
    //}, 100);
}

async function populateProjectsPage() {
    let projectsOutput = document.getElementById("projectsOutput");
    let data = await fetch("example_json.json").then(response => response.json()).then(json => {
        return json;
    });

    console.log(data);

    data.forEach(i => {
        projectsOutput.innerHTML += JSON.stringify(i) + "<br>";
    });
}

startProjectsInterval();