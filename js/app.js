var state = {
    theme: "frost"
};

var $video = document.querySelector(".js-bg");
var $mp4 = $video.querySelector(".js-mp4");
var $webm = $video.querySelector(".js-webm");

var $draggables = document.querySelectorAll(".js-drag");
$draggables.forEach($draggable => $draggable.addEventListener("dragstart", handleDragStart));
$draggables.forEach($draggable => $draggable.addEventListener("dragend", handleDragEnd));

var $droppables = document.querySelectorAll(".js-drop");
$droppables.forEach($droppable => $droppable.addEventListener("dragenter", handleDragEnter));
$droppables.forEach($droppable => $droppable.addEventListener("dragover", handleDragOver));


var $wardrobePrimary = document.querySelector(".js-wardrobe-primary");
var $wardrobeSecondary = document.querySelector(".js-wardrobe-secondary");

function handleDragEnter(e) {
    e.preventDefault();
    console.log("drag enter");
}

function handleDragOver(e) {
    e.preventDefault();
    console.log("drag over");
}

function handleDragStart(e) {
    console.log('drag start');
}

function handleDragEnd(e) {
    console.log("drag end");
    const {
        x, y,
        screenX, screnY, 
        clienX, clientY 
    } = e;

    e.target.style.top = x;
    e.target.style.left = y;
}

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