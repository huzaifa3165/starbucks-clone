
function first() {
    let image = document.getElementById('image')
    image.innerHTML = `<img src="images/img1.png">`
    let root = document.querySelector(':root');
    root.style.setProperty('--my-circle-color', '#017143');
}

function second() {
    let image = document.getElementById('image')
    image.innerHTML = `<img src="images/img2.png">`
    let root = document.querySelector(':root');
    root.style.setProperty('--my-circle-color', '#ebb9bb');
}

function third() {
    let image = document.getElementById('image')
    image.innerHTML = `<img src="images/img3.png">`
    let root = document.querySelector(':root');
    root.style.setProperty('--my-circle-color', '#dc54b3');
}