document.body.style.background= 'fcf79f'

var parrafos= document.body.getElementsByTagName("p");
var ptotal= parrafos.length

for( var i=0;i<ptotal;i++)
{ parrafos[i].style.color = "#0ca001" }


document.getElementById("destacado").style.fontsize='24px';


var hdos = document.body.getElementsByTagName("h2");
var total_hdos = hdos.length

for(var i=0; i<total_hdos; i++) {
	hdos[i].style.fontFamily = "Arial"
}


var vinculo="<a href='http://www.lipsum.com' target =_blank > Lipsum </a>"
document.write(vinculo)