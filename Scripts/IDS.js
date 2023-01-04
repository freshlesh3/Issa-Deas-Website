<!-- Audio Player button -->
<script>
const audio = document.getElementById("audio"); // get the audio element from the DOM
const progressBar = document.getElementById("progress-bar"); // get the progress bar element from the DOM
const duration = document.getElementById("duration"); // get the duration display element from the DOM

// add an event listener for the 'loadedmetadata' event, which is fired when the metadata for the audio file has been loaded
audio.addEventListener("loadedmetadata", function() {
  duration.innerHTML = formatTime(audio.duration); // update the duration display with the duration of the audio file
});

// add an event listener for the 'timeupdate' event, which is fired at a regular interval as the audio plays
audio.addEventListener("timeupdate", function() {
  progressBar.style.width = (audio.currentTime / audio.duration) * 100 + "%"; // update the width of the progress bar
  duration.innerHTML = formatTime(audio.currentTime); // update the duration display with the current time of the audio
});

// convert the time in seconds to a formatted string in the format 'minutes:seconds'
function formatTime(time) {
  let minutes = Math.floor(time / 60); // calculate the number of minutes
  let seconds = Math.floor(time % 60); // calculate the number of seconds
  if (seconds < 10) { // if the number of seconds is less than 10
    seconds = "0" + seconds; // add a leading zero
  }
  return minutes + ":" + seconds; // return the formatted time string
}

</script>

<!-- Add the Locomotive Scroll script to the head of your HTML file -->
<!-- Add the Locomotive Scroll script to the head of your HTML file -->
<script src="https://unpkg.com/locomotive-scroll@3/dist/locomotive-scroll.min.js"></script>

<!-- include the Swiper script -->
<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
<script>
  // select all elements with the class 'slider-main_component'
  $(".slider-main_component").each(function (index) {
    // initialize loop mode as false
    let loopMode = false;
    // if the element has an attribute 'loop-mode' with the value 'true'
    if ($(this).attr("loop-mode") === "true") {
      // set loop mode to true
      loopMode = true;
    }
    // initialize slider duration as 300
    let sliderDuration = 300;
    // if the element has an attribute 'slider-duration'
    if ($(this).attr("slider-duration") !== undefined) {
      // set the slider duration to the value of the 'slider-duration' attribute
      sliderDuration = +$(this).attr("slider-duration");
    }
    // create a new Swiper instance for the element
    const swiper = new Swiper($(this).find(".swiper")[0], {
      // set the speed to the slider duration
      speed: sliderDuration,
      // set the loop mode
      loop: loopMode,
      // set auto height to false
      autoHeight: false,
      // set centered slides to the loop mode
      centeredSlides: loopMode,
      // set follow finger to true
      followFinger: true,
      // set free mode to false
      freeMode: false,
      // set slide to clicked slide to false
      slideToClickedSlide: false,
      // set slides per view to 1
      slidesPerView: 1,
      // set space between slides to 4%
      spaceBetween: "4%",
      // set rewind to false
      rewind: false,
      // set mousewheel options
      mousewheel: {
        forceToAxis: true
      },
      // set keyboard options
      keyboard: {
        enabled: true,
        onlyInViewport: true
      },
      // set breakpoints for different screen sizes
      breakpoints: {
        // mobile landscape
        480: {
          slidesPerView: 1,
          spaceBetween: "4%"
        },
        // tablet
        768: {
          slidesPerView: 2,
          spaceBetween: "4%"
        },
        // desktop
        992: {
          slidesPerView: 3,
          spaceBetween: "2%"
        }
      },
      // set pagination options
      pagination: {
        el: $(this).find(".swiper-bullet-wrapper")[0], // set the element for the pagination bullets
        bulletActiveClass: "is-active", // set the active class for the bullets
        bulletClass: "swiper-bullet", // set the class for the bullets
        bulletElement: "button", // set the element type for the bullets```
        clickable: true // set clickable to true
      },
      // set navigation options
      navigation: {
        nextEl: $(this).find(".swiper-next")[0], // set the element for the next button
        prevEl: $(this).find(".swiper-prev")[0], // set the element for the previous button
        disabledClass: "is-disabled" // set the disabled class for the buttons
      },
      // set scrollbar options
      scrollbar: {
        el: $(this).find(".swiper-drag-wrapper")[0], // set the element for the scrollbar
        draggable: true, // set draggable to true
        dragClass: "swiper-drag", // set the class for the scrollbar drag element
        snapOnRelease: true // set snap on release to true
      },
      // set the active class for the slide
      slideActiveClass: "is-active",
      // set the active class for duplicate slides
      slideDuplicateActiveClass: "is-active"
    });
  });
</script>

</script>

<script>
  // Create a new instance of Locomotive Scroll
  const scroll = new LocomotiveScroll({
    // set the element to the element with the id 'scroll'
    el: document.querySelector('#scroll'),
    // set smooth scrolling to true
    smooth: true
  });

  // add an event listener for the 'call' event, which is fired whenever the scroll position is updated
  scroll.on('call', () => {
    console.log('Scrolling'); // log a message to the console
  });
</script>

