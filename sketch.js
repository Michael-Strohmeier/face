var centerX;
var centerY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  centerX = windowWidth / 2;
  centerY = windowHeight / 2;
  
  eye = new Eye(centerX - 60, centerY);
  eye2 = new Eye(centerX + 60, centerY);
}

function draw() {
  background(220);
  
  strokeWeight(0);
  fill(80, 150, 255);
  ellipse(centerX, centerY, 300, 300);
  
  eye.draw();
  eye2.draw();
  
  rectMode(CENTER);
  stroke(0);
  strokeWeight(2);
  fill(255);
  rect(centerX, centerY + 85, 20, 10, 10);
}

class Eye {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.innerRadius = 50;
    this.outerRadius = 100;
    
    this.dirX = 0;
    this.dirY = 0;
  }
  
  update() {
    this.dirX = mouseX - this.x;
    this.dirY = mouseY - this.y;
    
    let dx = pow(this.dirX, 2);
    let dy = pow(this.dirY, 2);
    
    let dist = sqrt(dx + dy);

    if (dx + dy < pow(this.innerRadius / 3, 2)) {
    
    } else if (dist == 0) {
      this.dirX = 0;
      this.dirY = 0;
    } else {
      this.dirX = this.dirX / dist * (this.innerRadius / 2.8);
      this.dirY = this.dirY / dist * (this.innerRadius / 2.8);
    }
    
  }
  
  draw() {
    this.update();
    //print(this.dirY)
    
    strokeWeight(0);
    fill(255, 255, 255)
    ellipse(this.x, this.y, this.outerRadius, this.outerRadius);
    
    strokeWeight(0);
    fill(0, 0, 0)
    ellipse(this.x + this.dirX, this.y + this.dirY, this.innerRadius, this.innerRadius);
    
    
  }
}