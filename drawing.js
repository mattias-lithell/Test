var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var isDrawing;


canvas.onmousedown = function(e) {
  isDrawing = true;
    

  ctx.beginPath();
  ctx.moveTo(e.clientX, e.clientY);

};
canvas.onmousemove = function(e) {
  if (isDrawing) {
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    
  }
};
canvas.onmouseup = function() {
    
    ctx.closePath();
  isDrawing = false;

};


