const grandParent = document.querySelector('#grandparent');
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');


grandParent.addEventListener('click', function () {
    console.log('grandparent');
}, false); //bubbling

parent.addEventListener('click', function (event) {
    event.stopPropagation();
    console.log('parent');
}, true); // capturing

child.addEventListener('click', function () {
    console.log('child');
}, false); //bubbling

