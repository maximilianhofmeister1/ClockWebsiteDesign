var header = document.querySelector('header');

var i = 225;
var animate = false;


function main(){
    if(animate){
        header.style.background = `conic-gradient(from ${i}deg, #eee, var(--color))`;
        i--;
        if(i==0){
            i=360;
        }
    }
}

function buttonClick(){
    animate = !animate;
}


setInterval(()=>{
    main();
}, 20);