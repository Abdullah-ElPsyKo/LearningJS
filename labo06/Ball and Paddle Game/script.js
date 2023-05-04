document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("canv");
  const ctx = canvas.getContext("2d");

  const paddle = new Paddle(10, 150, 10, 100);

  const ball = new Ball(250, 150, 8, 2);

  canvas.addEventListener("mousemove", function (event) {
    const mouseY = event.clientY - canvas.offsetTop;
    paddle.y = mouseY - paddle.height / 2;
  });

  function animate() {
    //clear
    ctx.clearRect(0, 0, 500, 300);
    //update the paddle
    paddle.draw(ctx);
    //update the ball
    //check if the ball hits the paddle or the wall
    ball.Move();
    ball.CheckEdges();
    ball.draw(ctx);
    if (ball.collidesWithPaddle(paddle)) {
      ball.moveX *= -1;
    }

    setTimeout(animate, 10);
  }

  animate();
});

class Paddle {
  constructor(x, y, width, heigth) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = heigth;
  }
  draw(ctx) {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
class Ball {
  constructor(x, y, radius, v) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.moveX = v;
    this.moveY = v;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
  }

  straal() {
    return this.width / 2;
  }

  Move() {
    this.x += this.moveX;
    this.y += this.moveY;
  }

  CheckEdges() {
    if (this.x >= 500 || this.x <= 0) this.moveX *= -1;
    if (this.y >= 300 || this.y <= 0) this.moveY *= -1;
  }
  collidesWithPaddle(paddle) {
    const ballLeft = this.x - this.radius;
    const paddleRight = paddle.x + paddle.width;

    if (ballLeft <= paddleRight) {
      return true;
    } else {
      return false;
    }
  }
}
