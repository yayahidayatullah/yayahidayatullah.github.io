putar()
function putar(){
    var putarGambar = document.querySelector('.hero');
    var ganti = ['url(img/a.png)','url(img/b.png)','url(img/c.png)','url(img/d.png)'];
    var waktuPindah = 5000;
    let i = 0;
    setInterval(function(){
        putarGambar.style.backgroundImage = ganti[i++]; 
        if( i == ganti.length-1){
            i = 0;
        }
    },waktuPindah)
}