var mulaiPermainan = document.querySelector('.mulai');
mulaiPermainan.addEventListener('click',function(){
  
  var angkaPilihan = document.querySelector('.angka-pilihan');
  angkaPilihan.innerHTML = 'Masukkan Angka    1 - 9!';
  
  var pilihanComputer = Math.floor(Math.random() * 10);
  if(kesempatan > 0 || pilihanComputer !== pilihanPlayer){
    var kesempatan = 3;
    
    if(pilihanComputer !== pilihanPlayer){
      kesempatan-=1;
    }
    function hasilAngka(comp,player,sisa){ 
      if(comp > player && sisa > 0){
      return '"Lebih Kecil"'+sisa
      }
      if(comp < player && sisa > 0){
        return '"Lebih Besar"'+sisa
      }
      if(comp === player){
        return 'Anda "Menang"'+sisa
      }
      if(sisa === 0){
        return 'Kesempatan Habis'+sisa
      }
    
    }
  }
  
  var hasil = hasilAngka(pilihanComputer,pilihanPlayer,kesempatan);
  var info = document.querySelector('.info');  
  info.innerHTML = hasil;
})

var list = document.getElementById('kata');

var bukanSaya = document.createElement('li');
var imageBukan = document.createElement('img');
imageBukan.setAttribute('src','benar.png');
imageBukan.setAttribute('height','50px');
bukanSaya.appendChild(imageBukan)


list.append(bukanSaya);

bukanSaya.addEventListener('mouseover',function(){
    //console.log('masuk')
    var daftarLi = list.getElementsByTagName('li');
    var i = daftarLi.length;
    var acak = Math.floor(Math.random()* i+1);
    list.insertBefore(bukanSaya,daftarLi[acak])
 });

bukanSaya.addEventListener('click',function(){
    alert('Anda Berhasil!')
})