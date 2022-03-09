let projects_row = document.getElementById('projects-row');

let projects = [
    {
        "name": "Kami Sniper", 
        "description": "My Service to snipe your desired Minecraft Username onto a fresh Account.", 
        "link": "https://kamisniper.com/"
    },
    {
        "name": "Password Generator",
        "description": "An easy to use Password Generator with decent features.",
        "link": "https://enes.vip/password-generator"
    },
    {
        "name": "IP Info",
        "description": "An easy to use User Interface to get more information about an IP address.",
        "link": "https://enes.vip/ip-info"
    },
    {
        "name": "Museno",
        "description": "Listen to Music anywhere, online or offline, for free, using my unfinished Application.",
        "link": "museno.xyz"
    },
    {
        "name": "Socials",
        "description": "My second website which I use for linking my social media acocunts.",
        "link": "dead.wtf"
    },
    {
        "name": "Another Project",
        "description": "lorem ipsum.",
        "link": "https://enes.vip/"
    }
]

projects.forEach(project => {
    let name = project["name"];
    let description = project["description"];
    let link = project["link"];

    let card = `
        <div class="col-lg-4 col-sm-12 mb-3">
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="lowercase">${name}</h5>
                    <p class="lowercase">${description}</p>
                </div>
                <div class="card-footer py-3">
                    <a href="${link}" target="_blank" class="project-btn lowercase">more info</a>
                </div>
            </div>
        </div>
    `;

    projects_row.innerHTML += card;
});
