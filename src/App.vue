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
        <div class="flex md:order-2 fadein-bot">
          <a href="https://github.com/bagasdevs"
            ><img
              class="w-9 rounded-full"
              src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png"
              alt="github"
          /></a>
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
