function Carousels(){

  
  
  const video = document.querySelector(".home-video");
  // video.muted=false

  //stop video when not on video section
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        video.pause();
      } else {
        video.play();
      }
    });
  }, {});
  observer.observe(video);

//   stop video when on different tab
const onVisibilityChange = () => {
    if (document.hidden) {
      video.pause();
    } else {
      video.play();
    }
  };

  document.addEventListener("visibilitychange", onVisibilityChange);

  // mute
  const mute = document.querySelector(".mute");
  const unmute = document.querySelector(".unmute");
  const replay = document.querySelector(".replay");

  mute.addEventListener("click", toggleclick);
  unmute.addEventListener("click", toggleclick);
  replay.addEventListener("click", function () {
    video.pause();
    video.currentTime = "0";
    video.play();
    replay.style.visibility = "hidden";
  });
  
  video.onended = function () {
    replay.style.visibility = "visible";
  };
  
  // video.onpause = function () {
    //   unmute.style.display='none'
    // };
    
    // video.onplay = function(){
      //   unmute.style.visibility='visible'
      // }
      
      let showmute = false;

      function toggleclick() {
    if (!showmute) {
      mute.classList.add("hide");
      unmute.classList.add("show");
      
      showmute = true;
    } else {
      mute.classList.remove("hide");
      unmute.classList.remove("show");
      
      showmute = false;
    }
  }

  mute.addEventListener("click", function () {
    video.muted = false;
    if (video.muted === false) {
      video.muted = true;
    } else {
      video.muted = false;
    }
  });
  
  unmute.addEventListener("click", function () {
    video.muted = false;
    if ((video.muted = true)) {
      video.muted = false;
    } else {
      video.muted = true;
    }
  });
  

}

export default Carousels