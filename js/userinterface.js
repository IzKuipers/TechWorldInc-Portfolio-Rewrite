async function switchPage(pageFile) {
    let data = await fetch(pageFile).then(response => response.text()).then(text => {
        return text;
    }).catch(() => {
        return "<div class='centered-absolute'><h1>Page Not Found</h1><p>The requested page file cannot be opened.</p></div>";
    });

    console.log(data);
}

switchPage("index.html");