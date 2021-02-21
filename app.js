var config = {
    frost: {
        id: 1,
        name: "frost",
        video: {
            mp4: "./assets/frost/knockout.mp4",
            webm: "./assets/frost/knockout.webm",
            poster: "./assets/frost/knockout-poster.png"
        }
    },

    earth: {
        id: 2,
        name: "earth",
        video: {
            mp4: "./assets/earth/knockout.mp4",
            webm: "./assets/earth/knockout.webm",
            poster: "./assets/earth/knockout-poster.png",
        }
    },

    wind: {
        id: 3,
        name: "wind",
        video: {
            mp4: "./assets/wind/knockout.mp4",
            webm: "./assets/wind/knockout.webm",
            poster: "./assets/wind/knockout-poster.png"
        }
    }
};

var state = {
    theme: "frost"
};

var $video = document.querySelector(".js-bg");
var $mp4 = $video.querySelector(".js-mp4");
var $webm = $video.querySelector(".js-webm");

function setState(newState) {
    state = {
        ...state,
        ...newState
    };
}

function getThemes() {
    return Object.keys(config);
}

function checkTheme(theme) {
    if (!getThemes().includes(theme)) {
        throw new Error("Invalid theme");
    }

    return true;
}

function changeTheme(newTheme) {
    checkTheme(newTheme);

    document.body.classList.remove(state.theme);
    setState({ theme: newTheme });
    document.body.classList.add(newTheme);

    const { video } = config[newTheme];
    const { webm, mp4, poster } = video;

    $webm.setAttribute("src", webm);
    $mp4.setAttribute("src", mp4);
    $video.setAttribute("poster", poster);
    $video.load();
    $video.play();
}

function greetDev() {
    const currentThemes = Object.keys(config).map(
        function pluckThemeName(key) {
            const { name } = config[key];
            return `"${name}"`;
        }
    ).join(", ");

    console.log(
    `PSST: If you're already lookin', try out my theme changer by calling:
    
    changeTheme("theme")
    
    current available themes are:`, currentThemes);
}

greetDev();