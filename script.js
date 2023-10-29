gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
  gsap.to(".navpart1 svg",{
    transform:"translateY(-100%)",
    scrollTrigger:{
        trigger:".page1",
        scroller:".main",
        // markers:true,
        start:"top 0",
        end:"top -5%",scrub:true
    }
  })
  gsap.to(".navpart2 .links",{
    transform:"translateY(-100%)",
    opacity:0,
    scrollTrigger:{
        trigger:".page1",
        scroller:".main",
        // markers:true,
        start:"top 0",
        end:"top -5%",scrub:true
    }
  })

var vidcon= document.querySelector(".vidoecon")
var play = document.querySelector(".play")
vidcon.addEventListener("mouseenter",function(){
    gsap.to(play,{
        opacity:1,
        scale:1
    })
})
vidcon.addEventListener("mouseleave",function(){
    gsap.to(play,{
        opacity:0,
        scale:0
    })
})
vidcon.addEventListener("mousemove",function(dets){
    gsap.from(play,{
        left:dets.x-50,
        top:dets.y-50
    })
})
var h1= document.querySelector(".page1 h1")
gsap.from(".page1 h1 ,.vidoecon" ,{
    y:30,
    opacity:0,
    // scale:0,
    duration:0.5,
    delay:0.5,
    stagger:0.2
})
gsap.from(".page2 .elem",{
    x:10,
    opacity:0,
    scale:0,
    stagger:0.3,
    duration:.9,
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
        // markers:true,
        start:"top 60%",
        end:"top 30%"
    }
})
 var crsr=document.querySelector("#abc")
 var a = document.querySelector(".page4")
document.addEventListener("mousemove",function(dets){
    gsap.from("#abc",{
        left:dets.x,
        top:dets.y
    })
})
// document.querySelector("#child1").addEventListener("mouseenter",function(){
//     gsap.to("#abc",{
//   transform: `translate(-50%,-50%) scale(1)`

//     })
// })
// document.querySelector("#child1").addEventListener("mouseleave",function(){
//     gsap.to("#abc",{
//   transform: `translate(-50%,-50%) scale(0)`

//     })
// })
document.querySelectorAll(".child").forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
           gsap.to("#abc",{
          transform: `translate(-50%,-50%) scale(1)`
        
             })
 })
 elem.addEventListener("mouseleave",function(){
    gsap.to("#abc",{
   transform: `translate(-50%,-50%) scale(0)`
 
      })
})
})

var conn =document.querySelectorAll(".page5 .pagecon .roy")
console.log(conn)
conn.forEach(function(elem){
    elem.addEventListener("click",function(){
      console.log("hihihi");
      var rr= elem.getAttribute("data")
      document.querySelector(".roy button").style.backgroundColor="black"
      document.querySelector(".page5 h2").textContent =`${rr}`
      gsap.from(".page5 h2",{
        y:200
      })
    })
})
