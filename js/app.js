var state = {
    theme: "frost"
};

var $video = document.querySelector(".js-bg");
var $mp4 = $video.querySelector(".js-mp4");
var $webm = $video.querySelector(".js-webm");
var $poster = $video.querySelector(".js-poster");

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
    $poster.setAttribute("src", poster);

    $video.load();
    $video.play();
    
    const { wardrobe } = config[newTheme];
    const { primary, secondary } = wardrobe;

    $wardrobePrimary.setAttribute("src", primary);
    $wardrobeSecondary.setAttribute("src", secondary);

    $wardrobePrimary.setAttribute("data-x", null);
    $wardrobePrimary.setAttribute("data-y", null);
    $wardrobePrimary.style.transform = "";

    $wardrobeSecondary.setAttribute("data-x", null);
    $wardrobeSecondary.setAttribute("data-y", null);
    $wardrobeSecondary.style.transform = "";

    setState({ theme: newTheme });
}

function greetDev() {
    const currentThemes = Object.keys(config).map(
        function pluckThemeName(key) {
            const { name } = config[key];
            return `"${name}"`;
        }
    ).join(", ");
    
    console.log("PSST: since you're already inspecting, try changing themes by calling");
    console.log("\n")
    console.log(`changeTheme("theme")`)
    console.log("\n")
    console.log(`current available themes are:`, currentThemes);
    
}

greetDev();