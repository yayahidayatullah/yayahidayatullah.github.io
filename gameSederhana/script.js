

var pilihanComputer = Math.floor(Math.random() * 11);
console.log(pilihanComputer)
var pilihanPlayer = 7;
var kesempatan = 3;
function hasilPilihan(pilihanComputer,pilihanPlayer,kesempatan){ 
    if(pilihanComputer > pilihanPlayer && kesempatan > 0){
    kesempatan -=1;
    return 'Angka Yang Anda Pilih "Lebih Kecil" Dari "Angka Pilihan Computer"\nKesempatan anda sisa:'+kesempatan
  }
  if(pilihanComputer < pilihanPlayer && kesempatan > 0){
    kesempatan -=1;
    return 'Angka Yang Anda Pilih "Lebih Besar" Dari "Angka Pilihan Computer"\nKesempatan anda sisa:'+kesempatan
  }
  if(pilihanComputer === pilihanPlayer){
    return 'Anda "Menang"'
  }

}
console.log(hasilPilihan(pilihanComputer,pilihanPlayer,kesempatan))



/*
var level_array = [10, 15, 20],
  kesempatan = [8, 6, 4],
  game = true;

while (game) {
  var main = confirm(
    "Selamat datang di game tebak angka\nKlik 'OK' untuk mulai bermain 'CANCEL' untuk batal bermain"
  );
  if (main) {
    for (var a = 0; a < level_array.length; a++) {
      var nomor_acak = Math.floor(Math.random() * level_array[a]) + 1;
      console.log(nomor_acak);
      alert(
        "Level " +
          (a + 1) +
          " Anda mempunyai total " +
          kesempatan[a] +
          " kesempatan"
      );
      for (var b = 0; b < kesempatan[a]; b++) {
        var nomor_user = parseInt(
          prompt(
            "Level " +
              (a + 1) +
              ", sisa kesempatan (" +
              (kesempatan[a] - b) +
              "), Tebak angka acak     antara 1 - " +
              level_array[a]
          )
        );
        console.log(nomor_user);

        if (nomor_acak == nomor_user) {
          alert(
            "Jawaban anda: " +
              nomor_user +
              " benar!!, nomor acaknya adalah: " +
              nomor_acak
          );
          b = kesempatan[a];
          continue;
        } else {
          var hasil = (nomor_user < nomor_acak) ? "LEBIH KECIL" : "LEBIH BESAR";
          alert(
            "Jawaban anda salah, nomor yang dimasukan " +
              hasil +
              " dari nomor acak"
          );
          if (b == [kesempatan[a] - 1]) {
            alert(
              "Level ke: " +
                (a + 1) +
                " GAME OVER | Kesempatan anda habis, angka acaknya adalah '" +
                nomor_acak +
                "'"
            );
            a = 3;
          }
        }
      }
    }

    var main_lagi = confirm("Mau main lagi?");
    if (!main_lagi) {
      game = false;
      alert("Terima kasih sudah bermain :)");
    }
  } else {
    game = false;
  }
}
*/