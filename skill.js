var progressbar=document.querySelectorAll('.skill_box > div');
var skillscontainer=document.getElementById("skill_section");
window.addEventListener('scroll',checkScroll);
var animation=false;


function initial(){
    for(let bar of progressbar){
        bar.style.width= 0+'%';
    }
}
initial();
function fillbars(){
    for (let bar of progressbar){
        let targetwidth=bar.getAttribute('data-bar-width');
        let currentwidth=0;
        let interval=setInterval(function(){
            if(currentwidth > targetwidth){
                clearInterval(interval);
                return
            }
            currentwidth++;
            bar.style.width=currentwidth+ '%';
        },5);
    }
}
function checkScroll(){
    console.log(skillscontainer);
    var coordinates=skillscontainer.getBoundingClientRect();
    if(!animation && coordinates.top <window.innerHeight){
        animation=true;
        
        fillbars();
    }
    else if(coordinates.top >window.innerHeight){
        animation=false;
        initial();

    }
}