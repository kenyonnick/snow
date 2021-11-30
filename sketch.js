var progression = 0;

var snow = [];

function setup() {
    createCanvas(1920, 1080);
    background('rgba(0,0,0,0.0)');
    angleMode(DEGREES);
    for (var x = 0; x < width; x++) {
        snow.push(new Snow(x, 0, Math.random() * 2));
    }
}

function draw() {
    clear();
    background('rgba(0,0,0,0.0)');
    for (var x = 0; x < width; x++) {
        if(!snow[x].active && Math.random() > 0.8) {
            snow[x].active = true;
            snow[x].speed = Math.random() * 2 + 1;
        }
        snow[x].render();
    }
}

class Snow {
    initialX = 0;
    x = 0;
    y = 0;
    speed = 0;
    diameter = 2;
    active = false;
    amplitude = 10;
    frequency = 0.0005;

    constructor(x, y, speed) {
        this.initialX = x;
        this.x = x;
        this.y = y;
        this.speed = speed;
    }

    render() {
        if (this.active) {
            this.y += this.speed;
            this.x = this.initialX + this.amplitude / this.speed * Math.cos(Math.PI * 2 * this.frequency * this.speed * this.y);

            noStroke();
            fill(255);
            circle(this.x, this.y, this.diameter * this.speed);

            if (this.y >= height) {
                this.y = 0 - this.diameter / 2;
                this.active = false;
            }
        }
    }
}
