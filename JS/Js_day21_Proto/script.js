function Car(carx, cary,speed,img) {
  this.carx = carx;
  this.cary = cary;
  this.speed = speed;
  this.img = img;
}

let BMW= new Car(0, 20, 5,'img/BMW.png');
let Chevrolet= new Car(0, 120, 2,'img/Chevrolet.png');
let Audi= new Car(0, 240, 3 ,'img/Audi.png');

Car.prototype.drawCar = function(car) {
  let treck = document.querySelector('.road');
  treck.innerHTML += `<img style="top:${this.cary}px;, left:${this.carx}px;" src="${this.img}">`;
};



Car.prototype.mooveCarRight = function() {
  this.carx += this.speed;
  let imgSrc = document.querySelector(`[src="${this.img}"]`);
  imgSrc.style.left = this.carx + 'px';

};


Car.prototype.mooveCarRight = function () {

  this.carX += Math.random()*100;
  let c = document.querySelector(`img[src="${this.img}"]`);

  c.style.left = `${this.carX}px`;
  c.style.transform = `rotate(0deg)`;
  let img = document.querySelectorAll("img");



};

Car.prototype.driveCarLeft = function () {
  this.carX -= this.speed;
  let c = document.querySelector(`img[src="${this.img}"]`);

  c.style.left = `${this.carX}px`;
  c.style.transform = `rotate(180deg)`;
  let img = document.querySelectorAll("img");


};

Car.prototype.driveCarTop = function () {
  this.carY -= this.speed;
  let c = document.querySelector(`img[src="${this.img}"]`);

  c.style.top = `${this.carY}px`;
  c.style.transform = `rotate(-90deg)`;
  let img = document.querySelectorAll("img");

};

Car.prototype.driveCarDown = function () {
  this.carY += this.speed;
  let c = document.querySelector(`img[src="${this.img}"]`);

  c.style.top = `${this.carY}px`;
  c.style.transform = `rotate(90deg)`;
  let img = document.querySelectorAll("img");

};





BMW.drawCar();
Chevrolet.drawCar();
Audi.drawCar();

let btn = document.querySelector('.start');
btn.addEventListener("click", function(){
  BMW.mooveCarRight();
  Audi.mooveCarRight();
  Chevrolet.mooveCarRight();
});

window.addEventListener("keypress", function () {

  if (event.keyCode === 100){
    BMW.mooveCarRight();
    Audi.mooveCarRight();
    Chevrolet.mooveCarRight();
  }
  if (event.keyCode === 97){
    BMW.driveCarLeft();
    Audi.driveCarLeft();
    Chevrolet.driveCarLeft();
  }

  if (event.keyCode === 119){
    BMW.driveCarTop();
    Audi.driveCarTop();
    Chevrolet.driveCarTop();
  }
  if (event.keyCode === 115){
    BMW.driveCarDown();
    Audi.driveCarDown();
    Chevrolet.driveCarDown();
  }

});
