const play = document.querySelector(".game");
play.addEventListener("click", function () {
  do {
    alert("Main Tebak Angka 1-10");
    var comp = Math.random();
    if (comp <= 0.1) {
      comp = 1;
    } else {
      if (comp > 0.1 && comp < 0.2) comp = 2;
      else {
        if (comp >= 0.2 && comp < 0.3) comp = 3;
        else {
          if (comp >= 0.3 && comp < 0.4) comp = 4;
          else {
            if (comp >= 0.4 && comp < 0.5) comp = 5;
            else {
              if (comp >= 0.5 && comp < 0.6) comp = 6;
              else {
                if (comp >= 0.6 && comp < 0.7) comp = 7;
                else {
                  if (comp >= 0.7 && comp < 0.8) comp = 8;
                  else {
                    if (comp >= 0.8 && comp < 0.9) comp = 9;
                    else {
                      if (comp >= 0.9 && comp <= 1) comp = 10;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    var total = 3;
    do {
      if (total >= 1) {
        var p = prompt("Masukan Angka Tebakan");
        if (p == comp) alert("Kok Jago Sih...");
        else {
          if (p > comp) {
            total--;
            alert("Kegedean Boss\nSisa nyawa anda:" + total);
          } else {
            if (p < comp) {
              total--;
              alert("Kekecilan Boss\nSisa nyawa anda:" + total);
            } else {
              if (p === false) break;
            }
          }
        }
      } else {
        alert("Kesempatan Anda Sudah Habis\nJawaban=" + comp);
        break;
      }
    } while (p != comp);

    var main = confirm("Try Again?");
  } while (main == 1);

  alert("Thank You for Playing!!!\n:)");
});

console.log("Hit Me Up on DM");
