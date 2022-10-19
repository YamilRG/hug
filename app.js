setTimeout(changeload, 2100);
var audio = new Audio('dito.mp3');
    
function changeload(){
    generardito();
    generar();
    

}

function generar(){
    var i  = 0;
    var e  = 30;
    setInterval(() => {
        if(i && e > 360){
            i = 0;
            e = 30;
        } else{
            i = i  + 1;
            e = e  + 1;
            
        }
        const backgroundcolor = 'hsl(' + i + ' , 50%, 80%)';
        const border = 'hsl(' + e + ' , 100%, 70%)';
        document.documentElement.style.setProperty('--background', backgroundcolor);
        document.documentElement.style.setProperty('--border', border);
    }, 10);
}

function generardito(){
    var nombre = document.querySelector('button');
    nombre.addEventListener('click', function(){
        nombre.remove('capa');
        setTimeout(() => {
            document.body.innerHTML += "<div class=\"container\"><h1>Sending Virtual Hug</h1><img src=\"ditto.gif\" alt=\"DittoDance\"><p id=\"loading\">Loading...</p><div class=\"box\"><div class=\"box__loading\"></div></div></div>"; 
            setTimeout(() => {
                document.getElementById('loading').innerText = ' " Sent " ';
            }, 2100);
            audio.play();
        }, 1000);
        
    });
}