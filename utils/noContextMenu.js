////// solution to prevent long press menu on touch devices
///// by user bbsimonbb on stackoverflow:
//// https://stackoverflow.com/questions/3413683/disabling-the-context-menu-on-long-taps-on-android
window.oncontextmenu = function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
}