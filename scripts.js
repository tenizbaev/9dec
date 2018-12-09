let hello = document.querySelector("h1");
let input = document.querySelector("input");
let color = document.querySelector("#color");
let number = document.querySelector("#number");
let underline = document.querySelector('#underline');
let align = document.querySelector("#align");
let fonts = document.querySelector("#font");
let italic = document.querySelector("#italic");
let lighter = document.querySelector("#bold");
let border = document.querySelector("#border");
let borderRadius = document.querySelector("#borderRadius");
let background = document.querySelector("#background");




input.addEventListener('keyup', function() {
	hello.innerText = "Hello " + this.value + "!";
});

color.addEventListener('change', function() {
    hello.style.color = color.value;
});

number.addEventListener('input', function() {
    hello.style.fontSize = this.value + 'px';
});

underline.addEventListener('change', function(){
	if (this.checked===true) {
    hello.style.textDecoration = 'underline';  
}
    else {
    hello.style.textDecoration ="";
    };     
});

align.addEventListener('change', function(){
    hello.style.textAlign = this.value;      
});

font.addEventListener('change', function(){
    hello.style.fontFamily = this.value;      
});

italic.addEventListener('change', function(){
	if (this.checked===true) {
    hello.style.fontStyle = 'italic';  
}
    else {
    hello.style.fontStyle ="";
    };     
});

lighter.addEventListener('change', function(){
	if (this.checked===true) {
    hello.style.fontWeight = 'lighter';  
}
    else {
    hello.style.fontWeight ="";
    };     
});

border.addEventListener('input', function() {
    hello.style.border = this.value + 'px' + ' solid'  + hello.style.color;

});


background.addEventListener('change', function(){
   hello.style.backgroundColor = background.value;
});

borderRadius.addEventListener('input', function(){
   hello.style.borderRadius = this.value + 'px';
});