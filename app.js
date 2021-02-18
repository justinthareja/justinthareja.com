var config = {
    frost: {
        id: 1,
        name: "frost",
        src: "./assets/frost.mp4",
        poster: "./assets/frost-poster.jpg"
    },

    earth: {
        id: 2,
        name: "earth",
        src: "./assets/earth.mp4",
        poster: "./asses/earth-poster.jpg",
    }
};

var state = {
    theme: "frost"
};

var $video = document.querySelector(".js-bg");
var $source = $video.querySelector(".js-src");

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

    const src = config[newTheme].src;

    $source.setAttribute("src", src);
    $video.load();
    $video.play();
}

function greetDev() {
    console.log(
    `PSST: If you're already lookin', try out my theme changer by calling:
    
    changeTheme()
    
    current available themes are:`, Object.keys(config).join(", "))
}

greetDev();