let acer1 = document.getElementById('acer1')
let acer2 = document.getElementById('acer2')
let acer3 = document.getElementById('acer3')
let leno1 = document.getElementById('leno1')
let leno2 = document.getElementById('leno2')
let leno3 = document.getElementById('leno3')
let sam1 = document.getElementById('sam1')
let sam2 = document.getElementById('sam2')
let sam3 = document.getElementById('sam3')
let img1 = document.createElement('img')
let img2 = document.createElement('img')
let img3 = document.createElement('img')

function acer() {
   img1.src = 'img/NITRO.jpg'
   img2.src = 'img/acer2.jpg'
   img3.src = 'img/acer3.jpg'
   acer1.appendChild(img1)
   acer2.appendChild(img2)
   acer3.appendChild(img3)
}

function leno() {
   img1.src = 'img/legion.jpg'
   img2.src = 'img/leno2.jpg'
   img3.src = 'img/leno3.jpg'
   leno1.appendChild(img1)
   leno2.appendChild(img2)
   leno3.appendChild(img3)
}

function sam() {
   img1.src = 'img/samsung.jpg'
   img2.src = 'img/sam2.jpg'
   img3.src = 'img/sam3.jpg'
   sam1.appendChild(img1)
   sam2.appendChild(img2)
   sam3.appendChild(img3)
}