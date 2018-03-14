
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

function arc(x,y,radius,color) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}

function rectangle(x,y,width,height,color) {
  ctx.fillStyle = color;
  ctx.fillRect(x,y,width,height);
}
arc(160,90,20,'red');



rectangle(200,60,40,40,'yellow');
rectangle(160,90,40,40,'green');
