let noise, env, cnv;
let types = ['white', 'pink', 'brown'];
let noiseType = 'brown';

function setup() {
  cnv = createCanvas(250, 250);
  textAlign(CENTER, CENTER);

  cnv.mousePressed(startSound);

  noise = new p5.Noise(noiseType);
  env = new p5.Envelope(0.01, 0.1, 0.45, 0.5);

  noise.disconnect();
  noise.connect(env);

  document.body.addEventListener('click', () => {
    userStartAudio();
  }, { once: true });
}

function startSound() {
  noiseType = random(types);
  noise.type(noiseType);
  noise.amp(0.2);
  noise.start();
  env.play();
}

function draw() {
  background(noiseType);
  fill(255);

  text('tap to play', width/2, height/2 - 20);
  text('type: ' + noiseType, width/2, height/2 + 20);
}