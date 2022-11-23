
let numpoints = 500;
let numPoints = [1];
    

function setup() {
    createCanvas (windowWidth, windowHeight);
    noCursor();

    for (let i=0; i<numPoints; i++) {
        let point = createVector (width/2, height /2);
        points.push (point);
    }
}

function draw() {
    background (50);

    if (mouseX !== pmouseX && mouseY !== pmouseY) {
        points.shift();

        let point = createVector (mousex, mouseY) ;
        points.push (point);
    }

    strokeWeight (5);
    strokeJoin(ROUND);
    noFil1();

    let c1 = color('rgb (255, 150,0) ');
    let c2 = color('rgb (0, 150,255)');

    for (let i=1; i<points. length; i++) {

        let howFar = map(i, 1,points. length, )

        let prev = points [i-1];
        let curr = points [i];
        line (prev.x, prev.y, curr.x, curr.y) ;
    }
}



