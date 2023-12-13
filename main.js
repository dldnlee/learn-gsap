


//rotate and move elements with a class of "box" ("x" is a shortcut for a translateX() transform) over the course of 1 second.
const tl = gsap.timeline();

// gsap.to(".green", {rotation: 360, x: 100, duration: 1});

// // target the element with a class of "purple" - rotate and move FROM 100px to the left over the course of 1 second. 
// gsap.from(".purple", {rotation: -360, x: -100, duration: 1});

// // target the element with a class of "blue" - rotate and move FROM 100px to the left, TO 100px to the right over the course of 1 second. 
// gsap.fromTo(".blue", {x: -100},{rotation: 360, x: 100, duration: 1});


// sequenced one after another not all at once
// tl.to(".green", {rotation: 360, x: 300, y:100, duration: 2, repeat: -1, yoyo:true}, 2)
//   .to(".purple", {rotation: -360, x: -100, duration: 2}, 1)   
//   .to(".blue", {rotation: 360, x: 100, duration: 3,}, 2)
//   .to(".blue", {rotation: -360, x: 200, duration: 3}, 5)


gsap.to(".green", {
  scrollTrigger: {
    trigger: '.green',
    start: "top center",
    end: "top 50px",
    scrub: 3,
    markers:true,
  },
  rotation: 360,
  x: 600, 
  duration: 2, 
}, 2)
  

