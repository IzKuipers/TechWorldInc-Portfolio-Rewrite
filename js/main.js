onload = function() {
    outputToTerminal
    ("\nroot@techworldinc:~$ /usr/bin/desktop-env\n\n"+
    "starting Desktop Environment . . .\n"+
    "  ______          __  _       __           __    ______          \n"+
    " /_  __/__  _____/ /_| |     / /___  _____/ /___/ /  _/___  _____\n"+
    "  / / / _ \\/ ___/ __ \\ | /| / / __ \\/ ___/ / __  // // __ \\/ ___/\n"+
    " / / /  __/ /__/ / / / |/ |/ / /_/ / /  / / /_/ // // / / / /__  \n"+
    "/_/  \\___/\\___/_/ /_/|__/|__/\\____/_/  /_/\\__,_/___/_/ /_/\\___/  \n",1000
    )
}

function outputToTerminal(string = "\n", delay = 0) {
    let elmnt = document.createTextNode(string);

    setTimeout(() => {
        document.getElementsByClassName("terminalOutput")[0].append(elmnt);
    }, delay);
}