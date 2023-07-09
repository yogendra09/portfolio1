
document.querySelector("#main").addEventListener("mousemove",function(dets){
  document.querySelector("#crsr").style.top = `${dets.clientY}px`;
  document.querySelector("#crsr").style.left = `${dets.clientX}px`;
})


var flag = 0;

function icon(){

 var ikan = document.querySelector("#icon");

  ikan.addEventListener("click",function(){
     

     if(flag===0){
      document.querySelector("#l1").style.transform = 'rotate(45deg)';
      document.querySelector("#l3").style.transform = 'rotate(-45deg)';
      document.querySelector("#l2").style.display = 'none';
      flag = 1;
     }else{
      document.querySelector("#l1").style.transform = 'rotate(0deg)';
      document.querySelector("#l3").style.transform = 'rotate(0deg)';
      document.querySelector("#l2").style.display = 'flex';
      flag=0;
     }

  })
}

function setValue() {
  gsap.set("#nav a", { y: "-100%", opacity: 0 });
  gsap.set("#white .parent .child", { y: "100%" });
}

function reveal() {
  document.querySelectorAll(".reveal").forEach(function (elem) {
    var spanParent = document.createElement("span");
    var spanChild = document.createElement("span");

    spanParent.classList.add("parent");
    spanChild.classList.add("child");

    spanChild.innerHTML = elem.innerHTML;
    spanParent.appendChild(spanChild);

    elem.innerHTML = " ";
    elem.appendChild(spanParent);
  });

  var timeline = gsap.timeline();

  timeline
    .from("#loader .child span", {
      x: 100,
      delay: 1,
      duration: 2,
      stagger: 0.2,
      ease: Expo.easeInOut,
    })
    .to("#loader .parent .child", {
      y: "-105%",
      delay: 1,
      duration: 2,
      ease: Expo.easeInOut,
    });
}

function animatesvg(){
  document.querySelectorAll("#Visual>g").forEach(function(elem){
    var char = elem.childNodes[1].childNodes[1];

    char.style.strokeDasharray = char.getTotalLength()+'px';
    char.style.strokeDashoffset = char.getTotalLength()+'px';

  })

  gsap.to("#Visual>g>g>path, #Visual>g>g>polyline",{
    opacity:1,
    strokeDashoffset:5,
    stagger:.2,
    duration:3,
    ease:Expo.easeInOut,
  })
}

function loading() {
  var timeline = gsap.timeline();

  timeline
    .to(
      ".loader",
      {
        opacity: 0,
        duration: 0.5,
      
      },
      5
    )
    .to("#loader", {
      height:0,
      duration: 2,
      ease: Expo.easeInOut,
    })
    .to("#green", {
      height: "100%",
      duration: 2,
      delay: -2,
      ease: Expo.easeInOut,
    })
    .to("#white", {
      height: "100%",
      duration: 2,
      delay: -1.6,
      ease: Expo.easeInOut,
      onComplete: function () {
        homeAnimation();
        animatesvg();
      },
    });
}



function homeAnimation() {
  var timeline = gsap.timeline();

  timeline
    .to("#nav a", {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      ease: Expo.easeInOut,
    })
    .to("#white .parent .child", {
      y: 0,
      stagger: 0.1,
      duration: 2,
      ease: Expo.easeInOut,
    });
}


 



function locomotive() {
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}



function cardanim(){

  document.querySelectorAll(".box").forEach(function(box){
    var offimage;
  box.addEventListener("mousemove",function(dets){
  


 document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity=1;
 document.querySelector("#cursor").style.top = `${dets.pageY}`+"px";
 offimage =dets.target;
 document.querySelector("#cursor").style.left = `${dets.pageX+100}`+"px";
         dets.target.style.filter= 'grayscale(1)';
  })

  box.addEventListener("mouseleave",function(dets){
            document.querySelector("#cursor").children[offimage.dataset.index].style.opacity = 0;
            offimage.style.filter= 'grayscale(0)';
  })


})


}




reveal();
setValue();
loading();
icon();
cardanim();

locomotive();




// document.querySelectorAll(".box").forEach(function(box){
//   box.addEventListener("mousemove",function(dets){
//     document.querySelectorAll(".div").forEach(function(div){
//       div.style.display = 'initial';
//       div.style.top = `${dets.clientY}`+"px";
//       div.style.left = `${dets.clientX}`+"px";

//     })

//   })
//   box.addEventListener("mouseleave",function(dets){
//     document.querySelectorAll(".div").forEach(function(div){
//       div.style.display = 'none';


//     })

//   })
// })
