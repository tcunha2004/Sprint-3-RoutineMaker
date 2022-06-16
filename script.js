
function alertapomodoro(){
    alert('Voce escolheu o metodo pomodoro');
}

function alertafeyman(){
    alert('Voce escolheu o metodo feyman');
}

function alertagtd(){
    alert('Voce escolheu o metodo gtd');
}


let botaopomodoro = document.querySelector('#bt_pomodoro');
let botaofeyman = document.querySelector('#bt_feyman');
let botaogtd = document.querySelector('#bt_gtd');


botaopomodoro.addEventListener('click', alertapomodoro);
botaofeyman.addEventListener('click', alertafeyman);
botaogtd.addEventListener('click', alertagtd);


function redireciona(){
    window.location.replace("https://tcunha2004.github.io/Routine-Maker/");
}