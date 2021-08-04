function pComp() {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "semut";
  return "orang";
}

function getHasil(comp, p) {
  if (comp == p) return "SERI!";
  if (p == "gajah") return comp == "semut" ? "KALAH!" : "MENANG!";
  if (p == "semut") return comp == "gajah" ? "MENANG!" : "KALAH!";
  if (p == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
}

function randomComp() {
  const comp = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    comp.setAttribute("src", "./img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

// const gjh = document.querySelector('.gajah');
// gjh.addEventListener('click', function() {
//     const comp = pComp();
//     const player = gjh.className;
//     const hasil = getHasil(comp, player);

//     const imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src', '../img/'+comp+'.png');

//     const display = document.querySelector('.info');
//     display.innerHTML = hasil;
// });

// const org = document.querySelector('.orang');
// org.addEventListener('click', function() {
//     const comp = pComp();
//     const player = org.className;
//     const hasil = getHasil(comp, player);

//     const imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src', '../img/'+comp+'.png');

//     const display = document.querySelector('.info');
//     display.innerHTML = hasil;
// });

// const smt = document.querySelector('.semut');
// smt.addEventListener('click', function() {
//     const comp = pComp();
//     const player = smt.className;
//     let hasil = getHasil(comp, player);

//     const imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src', '../img/'+comp+'.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;

// });

// Versi Singkat dari yang atas
var i = 1;
var j = 1;

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const comp = pComp();
    const player = pil.className;
    const hasil = getHasil(comp, player);

    randomComp();

    setTimeout(function () {
      const imgComp = document.querySelector(".img-komputer");
      imgComp.setAttribute("src", "./img/" + comp + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
    setTimeout(function () {
      if (hasil == "KALAH!") {
        const boxComp = document.querySelector(".compScore");
        const compScore = document.createTextNode(i);
        boxComp.classList.add("txt");
        boxComp.appendChild(compScore);
        boxComp.innerHTML = j;
        j++;
      } else {
        if (hasil == "MENANG!") {
          const boxPlayer = document.querySelector(".playerScore");
          const playerScore = document.createTextNode(i);
          boxPlayer.classList.add("txt");
          boxPlayer.appendChild(playerScore);
          boxPlayer.innerHTML = i;
          i++;
        }
      }
    }, 1200);
  });
});
