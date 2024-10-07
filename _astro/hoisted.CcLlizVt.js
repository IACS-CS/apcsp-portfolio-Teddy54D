import 'https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js';
import './hoisted.DstvtWxE.js';
/* empty css                                */

function initParticles() {
  if (typeof window !== "undefined") {
    particlesJS.load("particles-js", "/particles.json", function() {
      console.log("callback - particles.js config loaded");
    });
  }
}
window.addEventListener("load", initParticles);
