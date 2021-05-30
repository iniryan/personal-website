import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const homess = (node) => {
  let tl = gsap.timeline() 
  tl.from('#home.container', {
    opacity: 0,
    ease: "power3.InOut",
    delay: 0.2,
  }, 0)
  tl.fromTo('.text-role', {
    scale: 1.1,
    delay: 0.2,
    duration: 1.5,
    opacity: 1,
  },{
    opacity: 0.1,
    scale: 1,
  }, 1.5)
  tl.fromTo('#name', {
    opacity: 0,
    delay: 0.2,
    duration: 1.5,
  },{
    opacity: 1,
  }, 1.6)
  tl.from('.content-line',
    {
      y: 30,
      delay: 0.4,
      ease: "power3.InOut",
      opacity: 0,
    }, 1.8)
  tl.from('.p',
    {
      y: 30,
      delay: 0.4,
      ease: "power3.InOut",
      opacity: 0,
    }, 2) 
  tl.from('.intro-contact',
    {
      y: 30,
      delay: 0.4,
      ease: "power3.InOut",
      opacity: 0,
    }, 2.2)
   tl.from(['.fluid','.hero-images'],
    {
      y: 100,
      delay: 0.4,
      ease: "power3.InOut",
      opacity: 0,
    }, 1.5)       
}
export const servicess = (node) => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: node,
            start: "top 50%", 
            // markers: true,
        }
      });  
    tl.from('#services.container', {
      opacity: 0,
      ease: "power3.InOut",
      delay: 0.2,
    }, 0)
    tl.from('#services .common',
      {
        y: 30,
        delay: 0.4,
        ease: "power3.InOut",
        opacity: 0,
       }, 0)
    tl.from('.services', {
        ease: 'power4',
        x: 2000,
        duration: 2,
        delay: 0.4,
    }, 0.2)
}

export const projectss = (node) => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: node,
            start: "top 50%", 
            // markers: true,
        }
      });  
    tl.from('#project.container', {
      opacity: 0,
      ease: "power3.InOut",
      delay: 0.2,
    }, 0)  
    tl.from('#project .common', {
      y: 30,
      delay: 0.4,
      ease: "power3.InOut",
      opacity: 0,
     }, 0)
    tl.from('.project-pict', {
        ease: 'power4',
        x: -2000,
        duration: 2,
        delay: 0.4,
    }, 0.2)
    tl.from('.project-caption', {
      ease: 'power4',
      x: 2000,
      duration: 2,
      delay: 0.4,
  }, 0.2)
}

export const aboutss = (node) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: node,
      start: "top 50%",
      // markers: true,
    }
  });
  tl.from('#about.container', {
    opacity: 0,
    ease: "power3.InOut",
    delay: 0.2,
  }, 0)
  tl.from('#about .common#about', {
    y: 30,
    delay: 0.4,
    ease: "power3.InOut",
    opacity: 0,
  }, 0)
  tl.from('.person', {
    ease: 'power4',
    x: -2000,
    duration: 2,
    delay: 0.4,
  }, 0.2)
  tl.from('.aboutme-p', {
    ease: 'power4',
    x: 2000,
    duration: 2,
    delay: 0.4,
  }, 0.2)
  tl.from('.btn-cv', {
    ease: "power3.InOut",
    delay: 0.4,
    opacity: 0,
    y: 50,
  }, 2)
  tl.from('#about .common#skill', {
    y: 30,
    delay: 0.4,
    ease: "power3.InOut",
    opacity: 0,
  }, 2.4)
  tl.from('.skills', {
    y: 30,
    delay: 0.4,
    ease: "power3.InOut",
    opacity: 0,
  }, 2.6)
}

export const contactss = (node) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: node,
      start: "top 50%",
      // markers: true,
    }
  });
  tl.from('#contact.container', {
    opacity: 0,
    ease: "power3.InOut",
    delay: 0.2,
  }, 0)
  tl.from('#contact .common', {
    y: 30,
    delay: 0.4,
    ease: "power3.InOut",
    opacity: 0,
  }, 0)
  tl.from('.contacts', {
    y: 30,
    delay: 0.4,
    ease: "power3.InOut",
    opacity: 0,
  }, 0.4) 
  tl.from('.map', {
    y: 30,
    delay: 0.4,
    ease: "power3.InOut",
    opacity: 0,
  }, 1) 
}

export const footerss = (node) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: node,
      start: "top 80%",
      // markers: true,
    }
  });
  tl.from('#footer.container', {
    opacity: 0,
    ease: "power3.InOut",
    delay: 0.2,
  }, 0)
}