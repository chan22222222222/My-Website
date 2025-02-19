/* =============================
   Particles.js Configuration
   ============================= */
   particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#b67eff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#b67eff"
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false
      },
      "size": {
        "value": 3,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#b67eff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2.5,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": false
        },
        "resize": true
      }
    },
    "retina_detect": true
  });
  
  /* ============================
     Simple "Typed Text" Effect
     ============================ */
  const typedText = document.getElementById("typed-text");
  const textToType = "I create futuristic digital experiences.";
  let index = 0;
  
  function typeEffect() {
    if (index < textToType.length) {
      typedText.textContent += textToType.charAt(index);
      index++;
      setTimeout(typeEffect, 80);
    }
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    typeEffect();
  });
  