let grop = document.querySelectorAll(`div.grop`);

// p to block _________________________________________________

let pOne = document.querySelector(`p.answer.one`);
let pTwoo = document.querySelector(`p.answer.twoo`);
let pThree = document.querySelector(`p.answer.three`);
let pFour = document.querySelector(`p.answer.four`);

// img to anather img _________________________________________________

let imgOne = document.querySelector(`img.imgOne`);
let imgTwoo = document.querySelector(`img.imgTwoo`);
let imgThree = document.querySelector(`img.imgThree`);
let imgFour = document.querySelector(`img.imgFour`);

// _________________________________________________

grop[0].addEventListener(`click`, function () {
  if (pOne.classList.contains(`block`)) {
    pOne.classList.remove(`block`);
    imgOne.setAttribute(`src`, `/assets/images/icon-plus.svg`);
  } else {
    pOne.classList.add(`block`);
    imgOne.setAttribute(`src`, `/assets/images/icon-minus.svg`);
  }
});

grop[1].addEventListener(`click`, function () {
  if (pTwoo.classList.contains(`block`)) {
    pTwoo.classList.remove(`block`);
    imgTwoo.setAttribute(`src`, `/assets/images/icon-plus.svg`);
  } else {
    pTwoo.classList.add(`block`);
    imgTwoo.setAttribute(`src`, `/assets/images/icon-minus.svg`);
  }
});

grop[2].addEventListener(`click`, function () {
  if (pThree.classList.contains(`block`)) {
    pThree.classList.remove(`block`);
    imgThree.setAttribute(`src`, `/assets/images/icon-plus.svg`);
  } else {
    pThree.classList.add(`block`);
    imgThree.setAttribute(`src`, `/assets/images/icon-minus.svg`);
  }
});

grop[3].addEventListener(`click`, function () {
  if (pFour.classList.contains(`block`)) {
    pFour.classList.remove(`block`);
    imgFour.setAttribute(`src`, `/assets/images/icon-plus.svg`);
  } else {
    pFour.classList.add(`block`);
    imgFour.setAttribute(`src`, `/assets/images/icon-minus.svg`);
  }
});
