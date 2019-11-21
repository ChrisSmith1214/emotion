var hopeless = "true";
var birdeyes = 350;
var r, g, b;

function setup() {
  // put setup code here
    createCanvas(1280, 720);
    r = random(255);
    g = random(255);
    b = random(255);
}

function draw() {
    //im going to make a smiling blue man with light in his teeth. his smile is fake not real ok
  // don't try to kill your brain please (:
// ok everything that you learn cease to exist ): sad
    background(r, g, b);
    fill("#70fdff");
    ellipse(600, 360, 400, 400);
    fill("#ffffff");
    //thanos controls your mouth
    if (hopeless ==="true"){
        arc(600, 380, 280, 280, 0, PI);
        birdeyes=350;
    }else{
        line(590, 370, 700, 370);
        birdeyes= 300;
    }
    
    //arc(600, 380, 280, 280, 0, PI);
    line(550, 200, 550, birdeyes);
    line(650, 200, 650, birdeyes);
    strokeWeight(4);
}


function keyPressed(){
    if (hopeless==="true"){
        hopeless="false";
        background(r, g, b);
    }else{
        hopeless="true"
        background(r, g, b);
    }
    
    /* ellipse(600, 360, 400, 400);
    line(550, 200, 550, 350);
    line(650, 200, 650, 350);
    line(590, 370, 700, 370);*/
    //arc(600, 380, 280, 280, 0, PI);

}