var config = {
    "frost": "./assets/frost.mp4",
    "earth": "./assets/earth.mp4"
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

function changeTheme(newTheme) {
    document.body.classList.remove(state.theme);
    setState({ theme: newTheme });
    document.body.classList.add(newTheme);

    const src = config[newTheme];

    $source.setAttribute("src", src);
    $video.load();
    $video.play();
}

