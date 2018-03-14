
function Zombie(speed,life,tychka,img) {
  this.speed = speed;
  this.life = life;
  this.tychka = tychka;
  this.img = img;
}

function Hunter(speed,life,tychka,img) {
  this.speed = speed;
  this.life = life;
  this.tychka = tychka;
  this.img = img;
}

function Pers (speed,life,tychka,img) {
  this.speed = speed;
  this.life = life;
  this.tychka = tychka;
  this.img = img;
}


Zombie.prototype.draw = function () {
  let container = document.querySelector('.container');
  container.innerHTML += `<img src = ${this.img}>`;
};

Hunter.prototype.draw = function () {
  let container = document.querySelector('.container');
  container.innerHTML += `<img src = ${this.img}>`;
};


let zombieFrank = new Zombie(10,100,100,'https://pro2-bar-s3-cdn-cf2.myportfolio.com/0798634ceae02ffed9601c05bcd050b9/32107381-ddd3-46f3-8883-c2e5c2ca511c_rw_1920.gif?h=3b350ae31fa53c70982cc3a00a6776bc');
let zombieJeck = new Zombie(10,100,100,'https://slack-imgs.com/?c=1&url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FBe0YVQAdVdm4E%2Fgiphy.gif');
let hunter = new Zombie(0,722,20,'http://forum.hellroom.ru/img/hero_idlerun02.gif');

zombieFrank.draw();
zombieJeck.draw();
hunter.draw();
