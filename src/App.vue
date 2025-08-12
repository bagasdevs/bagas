<template>
  <!-- component -->
  <!-- This is an example component -->
  <div class="max-w-7xl mx-auto flex flex-col relative">
    <nav
      class="max-w-7xl px-5 md:fixed top-0 z-[98] w-screen backdrop-blur-md bg-[#121212] bg-opacity-80"
    >
      <div
        class="container mx-auto flex flex-wrap items-center justify-between"
      >
        <button @click="redirectToHome" class="flex">
          <span
            class="self-center text-lg text-[#ffdb70] font-semibold whitespace-nowrap fadein-bot hover:text-amber-100"
            >bagas();</span
          >
        </button>
        <div class="flex md:order-2 fadein-bot gap-3">
          <!-- GitHub Icon -->
          <a 
            href="https://github.com/bagasdevs" 
            class="text-gray-300 hover:text-amber-200 transition-all duration-300 hover:scale-110 transform"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <svg 
              class="w-7 h-7" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          
          <!-- Instagram Icon -->
          <a 
            href="https://instagram.com/bagasdevs" 
            class="text-gray-300 hover:text-pink-400 transition-all duration-300 hover:scale-110 transform"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
          >
            <svg 
              class="w-7 h-7" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          
          <!-- LinkedIn Icon -->
          <!-- <a 
            href="https://linkedin.com/in/bagascahya" 
            class="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110 transform"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <svg 
              class="w-7 h-7" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
           -->
          <!-- Email Icon -->
          <a 
            href="mailto:developerbagas@gmail.com" 
            class="text-gray-300 hover:text-green-400 transition-all duration-300 hover:scale-110 transform"
            aria-label="Email Contact"
          >
            <svg 
              class="w-7 h-7" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
            </svg>
          </a>
        </div>
        <div
          class="hidden md:flex justify-between items-center w-full md:w-auto md:order-1"
          id="mobile-menu-3"
        >
          <ul
            class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium"
          >
            <li>
              <router-link
                to="/"
                class="fadein-bot text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0"
                aria-current="page"
                >Home</router-link
              >
            </li>
            <li>
              <router-link
                to="/about"
                class="fadein-bot fadein-1 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0"
                >About</router-link
              >
            </li>
            <li>
              <router-link
                to="/portfolio"
                class="fadein-bot fadein-2 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0"
                >Portfolio</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="md:mt-[100px]">
      <router-view />
    </div>
  </div>
  <footer
    class="block md:hidden fixed bottom-0 left-0 right-0 rounded-t-3xl border border-[#383838] bg-[#121212] bg-opacity-80 backdrop-blur-md backdrop-opacity-90"
  >
    <nav class="flex justify-around py-4 text-xs">
      <router-link to="/" class="text-gray-300 hover:text-white"
        >Home</router-link
      >
      <router-link to="/about" class="text-gray-300 hover:text-white"
        >About</router-link
      >
      <router-link to="/portfolio" class="text-gray-300 hover:text-white"
        >Portfolio</router-link
      >
    </nav>
  </footer>
</template>

<script>
export default {
  methods: {
    redirectToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 5px; /* for vertical scrollbar */
  height: 5px; /* for horizontal scrollbar */
}

::-webkit-scrollbar-track {
  background: hsl(240, 1%, 17%);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: #ffdb70;
  border-radius: 5px;
}

::-webkit-scrollbar-button {
  width: 20px;
}

body {
  font-family: "Poppins", sans-serif;
  background: hsl(0, 0%, 7%);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  transition: color 0.3s;
}

nav a.router-link-exact-active {
  display: inline-flex;
  flex-direction: column;
  color: white;
  transition: color 0.3s;
}

nav a.router-link-exact-active::after {
  display: inline-block;
  content: "";
  margin-top: 0.08em;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: #ffdb70;
}

nav a.router-link-exact-active:hover {
  color: white;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideInUp {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0, 0, 0);
  }
  40%, 43% {
    transform: translate3d(0, -10px, 0);
  }
  70% {
    transform: translate3d(0, -5px, 0);
  }
  90% {
    transform: translate3d(0, -2px, 0);
  }
}

/* Fade-in animation classes */
.fadein-bot {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.fadein-1 {
  animation-delay: 0.1s;
}

.fadein-2 {
  animation-delay: 0.2s;
}

.fadein-3 {
  animation-delay: 0.3s;
}

.fadein-up {
  animation: fadeInUp 1s ease-out forwards;
  opacity: 0;
}

.fadein-right {
  animation: fadeInRight 1.2s ease-out forwards;
  opacity: 0;
}

.fadein-left {
  animation: fadeInLeft 1.2s ease-out forwards;
  opacity: 0;
}

.fade-in-from-left {
  animation: fadeInLeft 1s ease-out 0.5s forwards;
  opacity: 0;
}

.scale-in {
  animation: scaleIn 0.8s ease-out forwards;
  opacity: 0;
}

.slide-up {
  animation: slideInUp 1s ease-out forwards;
  opacity: 0;
}

.bounce-hover:hover {
  animation: bounce 1s;
}

/* Performance optimizations */
.pict {
  will-change: transform;
  transition: transform 0.3s ease;
}

.pict:hover {
  transform: scale(1.05);
}

/* Smooth transitions for all interactive elements */
a, button {
  transition: all 0.3s ease;
}

/* Hardware acceleration for animations */
.fadein-bot,
.fadein-up,
.fadein-right,
.fadein-left,
.fade-in-from-left,
.scale-in,
.slide-up {
  will-change: transform, opacity;
  transform: translateZ(0);
}
</style>
