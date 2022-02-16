let main = document.querySelector('.main');
let checkClass = (elem, attr) => elem.classList.contains(attr);
let indexCount = 0;

main.addEventListener('dblclick', (event) => {
    let element = event.target;
    if(element.classList.contains("elem")) element.classList.toggle("isActive");
});

main.onmousedown = ((event) => {
    let element = event.target;
    if(checkClass(element, 'isActive')){
        let moveTo = (pageX, pageY) => {
            element.style.left = pageX - element.offsetWidth / 2 + "px";
            element.style.top = pageY - element.offsetHeight / 2 + "px";
        };
        let moveDiv = (event) => moveTo(event.pageX, event.pageY);
        element.style.position = "absolute";
        element.style.zIndex = indexCount;
        indexCount += 1;
        moveTo(event.pageX, event.pageY);
        document.addEventListener("mousemove", moveDiv);
        element.onmouseup = () => {
            element.style.opacity = "1";
            document.removeEventListener("mousemove", moveDiv);
            element.onmouseup = null;
        };
}})

document.ondragstart = () => false;


