////// fullscreen video - based on w3schools tutorial
///// https://www.w3schools.com/howto/howto_js_fullscreen.asp
function openFullscreen() {
    const jspWindow = document.getElementById('jsp-window');
    if (jspWindow.requestFullscreen) {
        jspWindow.requestFullscreen(); // standard fullscreen
    } else if (jspWindow.requestFullscreen) {
        jspWindow.webkitRequestFullscreen(); // Safari
    } else if (jspWindow.requestFullscreen) {
        jspWindow.msRequestFullscreen(); // Internet Explorer
    }
}