var chance = 3;
alert(
  "tebak angka 1-10" +
    "\n Kalian mempunyai " +
    chance +
    " kesempatan untuk menebak nomor"
);
chance--;
while (chance >= 0) {
  var user = prompt("Player 1 Tebak Angka");
  var user2 = prompt("Player 2 Tebak Angka");
  var compt = Math.floor(Math.random() * 10);

  if (user === compt) {
    alert("Tebakan Player 1 Benar" + "\n Angka yang dicari " + compt);
    break;
  } else if (user2 === compt) {
    alert("Tebakan Player 2 Benar" + "\n Angka yang dicari " + compt);
    break;
  } else if (chance === 0) {
    alert("Tidak ada yang menang. Angka yang dicari " + compt);
    break;
  } else if (user > compt) {
    alert(
      "TEBAKAN ANDA TERLALU TINGGI" + "\n kamu punya " + chance + " kesempatan"
    );
  } else if (user < compt) {
    alert(
      "TEBAKAN ANDA TERLALU RENDAH" + "\n kamu punya " + chance + " kesempatan"
    );
    chance--;
  }
}
