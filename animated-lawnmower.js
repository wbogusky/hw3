function setup() {
	createCanvas(400, 200);
	colorMode(HSB);
}

var x = 0;
var h = 10;
var lawnmowerPos = -30;

function draw() {
	stroke(random(60, 70), 100, 90);
	line(x, height - 10, x + random(-10, 10), height - 10 - random(h));
	noStroke();

	x = x + 10;

	if (x > width) {
		x = random(10);
		h = h + 3;
	}

	if (mouseIsPressed) {
		fill(255);
		rect(lawnmowerPos, 0, 30, height - 15);
		lawnmowerPos = lawnmowerPos + 10; //lawnmower animation
		if (lawnmowerPos >= width) {
			lawnmowerPos = -30; //lawnmower position reset
		}
		h = 10;
	} else {
		lawnmowerPos = -30; //this makes the mower always start at the left edge
	}

	fill(40, 100, 60);
	rect(0, height - 10, width, 10);
}
