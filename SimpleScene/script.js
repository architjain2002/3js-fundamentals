const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const sizes = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.x = 0;
camera.position.y = 0;
scene.add(camera);

const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);
// renderer.render(scene, camera);

// the time part of the loop is to have a constant speed of the animation irrespect of the framerate difference between different systems
let time = Date.now();

//Animation
let loop = () => {

  // Time
  let currentTime = Date.now();
  let deltaTime = currentTime - time;
  time = currentTime;

  mesh.rotation.y = mesh.rotation.y + 0.001*deltaTime;

  renderer.render(scene, camera);

  window.requestAnimationFrame(loop);
}

loop();
