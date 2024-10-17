import Particles  from "particlesjs";
console.log('Imported',Particles)
var particles = Particles.init({
	selector: '.background',
  color: ['#DA0463', '#404B69','pink','orange','grey','#c6093b','#0033a0'],
  sizeVariation: 3,
  maxParticles : 500,
  responsive: [{
  	breakpoint: 800,
    options: {
    	color: '#00C9B1',
    	maxParticles: 80,
      connectParticles: false
    }
  }]
});
