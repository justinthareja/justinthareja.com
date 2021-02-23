var state = {
    theme: "earth"
};

var $video = document.querySelector(".js-bg");
var $mp4 = $video.querySelector(".js-mp4");
var $webm = $video.querySelector(".js-webm");

var $wardrobePrimary = document.querySelector(".js-wardrobe-primary");
var $wardrobeSecondary = document.querySelector(".js-wardrobe-secondary");

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
    document.body.classList.add(newTheme);
    
    const { video } = config[newTheme];
    const { webm, mp4, poster } = video;
    
    $webm.setAttribute("src", webm);
    $mp4.setAttribute("src", mp4);
    $video.setAttribute("poster", poster);
    $video.load();
    $video.play();
    
    const { wardrobe } = config[newTheme];
    const { primary, secondary } = wardrobe;

    $wardrobePrimary.setAttribute("data", primary);
    $wardrobeSecondary.setAttribute("data", secondary);

    setState({ theme: newTheme });
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