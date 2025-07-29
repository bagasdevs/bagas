<template>
  <main
    class="mt-10 md:mt-1 flex flex-col-reverse gap-8 items-center md:flex-row md:gap-16 md:justify-center min-h-[65vh] md:min-h-[80vh]"
  >
    <div class="space-y-2 text-center md:text-left px-10">
      <p class="text-amber-200 slide-up">Hello World, I'm</p>
      <h1 class="text-4xl font-bold md:text-5xl text-white fadein-up">
        Bagas Cahya
      </h1>
      <div class="py-2">
        <h1
          class="typewrite text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-yellow-500 md:text-2xl scale-in"
          ref="typewriter"
        >
          <span class="wrap">{{ txt }}</span>
        </h1>
      </div>
      <p class="text-white pr-4 fade-in-from-left">
        Welcome to My personal website. <span class="wave bounce-hover">👋🏼</span>
      </p>
      <br />
      <div class="slide-up" style="animation-delay: 1s;">
        <button
          class="flex items-center py-2 px-4 mx-auto text-sm font-medium rounded-lg border transition-all duration-300 md:py-2.5 md:px-5 md:mx-0 text-amber-200 border-amber-200 hover:bg-amber-200 hover:bg-opacity-10 bg-transparent focus:outline-none w-fit hover:scale-105 transform">
          <svg
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            class="mr-2 w-4 h-4">
            <path fill-rule="evenodd"
              d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm5.845 17.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V12a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z"
              clip-rule="evenodd"></path>
            <path
              d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z">
            </path>
          </svg>
          Download Resume
        </button>
      </div>
    </div>
    <div class="flex justify-center md:justify-start fadein-right">
      <div class="w-10/12 md:h-auto relative">
        <!-- Placeholder to prevent layout shift -->
        <div class="aspect-square rounded-full border-4 border-amber-200 bg-gray-800 animate-pulse" v-if="!imageLoaded"></div>
        <img
          alt="Bagas Cahya Profile"
          fetchpriority="high"
          width="300"
          height="300"
          decoding="async"
          data-nimg="1"
          class="w-full h-full rounded-full border-4 border-amber-200 pict hover:shadow-2xl transition-all duration-500 ease-in-out object-cover"
          :class="{ 'opacity-0': !imageLoaded, 'opacity-100': imageLoaded }"
          src="https://i.ibb.co/DfLCCsY/bagas2.jpg"
          loading="eager"
          @load="imageLoaded = true"
          @error="handleImageError"
        />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      toRotate: [
        "Web Developer",
        "Back-End Developer", 
        "Informatics Student",
        "Tech Enthusiast",
      ],
      period: 2000,
      txt: "",
      loopNum: 0,
      isDeleting: false,
      delta: 200,
      imageLoaded: false
    };
  },
  mounted() {
    // Use requestAnimationFrame for better performance
    this.$nextTick(() => {
      requestAnimationFrame(() => {
        this.tick();
      });
    });
  },
  beforeUnmount() {
    // Clean up any pending timeouts
    if (this.tickTimeout) {
      clearTimeout(this.tickTimeout);
    }
  },
  methods: {
    tick() {
      let typewriter = this.$refs.typewriter;

      if (!typewriter) {
        return;
      }

      let i = this.loopNum % this.toRotate.length;
      let fullTxt = this.toRotate[i];

      this.txt = this.isDeleting
        ? fullTxt.substring(0, this.txt.length - 1)
        : fullTxt.substring(0, this.txt.length + 1);
      
      // Use textContent for better performance
      const wrapElement = typewriter.querySelector('.wrap');
      if (wrapElement) {
        wrapElement.textContent = this.txt;
      }

      let delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      // Store timeout reference for cleanup
      this.tickTimeout = setTimeout(() => {
        this.tick();
      }, delta);
    },
    handleImageError() {
      console.warn('Profile image failed to load');
      this.imageLoaded = true; // Still show the container
    }
  }
};
</script>

<style scoped>
/* Optimized animations with will-change and transform3d for hardware acceleration */
.typewrite > .wrap {
  border-right: 0.08em solid #fff;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { border-color: #fff; }
  51%, 100% { border-color: transparent; }
}

.wave {
  animation: wave-animation 2.5s ease-in-out infinite;
  transform-origin: 70% 70%;
  display: inline-block;
  will-change: transform;
}

@keyframes wave-animation {
  0%, 60%, 100% { 
    transform: rotate(0deg) translateZ(0); 
  }
  10%, 30% { 
    transform: rotate(14deg) translateZ(0); 
  }
  20% { 
    transform: rotate(-8deg) translateZ(0); 
  }
  40% { 
    transform: rotate(-4deg) translateZ(0); 
  }
  50% { 
    transform: rotate(10deg) translateZ(0); 
  }
}

.pict {
  box-shadow: 0 0 60px -10px rgba(255, 219, 112, 0.4);
  will-change: transform, box-shadow;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.pict:hover {
  transform: scale(1.05) translateZ(0);
  box-shadow: 0 0 80px -5px rgba(255, 219, 112, 0.6);
}

/* Enhanced fade animations */
.fadein-up {
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
  animation-delay: 0.3s;
  will-change: transform, opacity;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 40px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fade-in-from-left {
  opacity: 0;
  animation: fadeInLeft 0.8s ease-out forwards;
  animation-delay: 0.6s;
  will-change: transform, opacity;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translate3d(-50px, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fadein-right {
  opacity: 0;
  animation: fadeInRight 1s ease-out forwards;
  animation-delay: 0.4s;
  will-change: transform, opacity;
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translate3d(100px, 0, 0) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
}

.slide-up {
  opacity: 0;
  animation: slideUp 0.8s ease-out forwards;
  will-change: transform, opacity;
}

@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 30px, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.scale-in {
  opacity: 0;
  animation: scaleIn 0.8s ease-out forwards;
  animation-delay: 0.5s;
  will-change: transform, opacity;
}

@keyframes scaleIn {
  0% {
    opacity: 0;
    transform: scale(0.8) translateZ(0);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateZ(0);
  }
}

/* Smooth button interactions */
button {
  will-change: transform;
  backface-visibility: hidden;
}

button:hover {
  transform: translateY(-2px) scale(1.05) translateZ(0);
  box-shadow: 0 10px 25px rgba(255, 219, 112, 0.2);
}

button:active {
  transform: translateY(0) scale(1.02) translateZ(0);
}

/* Performance optimizations */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  .wave,
  .fadein-up,
  .fade-in-from-left,
  .fadein-right,
  .slide-up,
  .scale-in {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
  
  .pict:hover,
  button:hover {
    transform: none !important;
  }
}

/* Image loading optimization */
.aspect-square {
  aspect-ratio: 1;
}

img {
  transition: opacity 0.3s ease;
}

/* Prevent layout shift during image loading */
.image-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%; /* 1:1 Aspect Ratio */
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
