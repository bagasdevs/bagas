<script>
export default {
  data() {
    return {
      activeTab: 1,
      items: [
        {
          id: 1,
          name: "FPM Attendance",
          imageUrl: "presensi",
          status:
            "A website that has a responsive display to facilitate school attendance with Fingerprint Module IOT.",
          tech: "PHP, Bootstrap, Arduino",
          github: "null",
          demo: "null",
        },
        {
          id: 2,
          name: "StoreGG",
          imageUrl: "topup",
          status:
            "A web application about the game topup application for game players that makes it easy in terms of responsiveness.",
          tech: "Typescript, Next JS, Express JS",
          github: "null",
          demo: "null",
        },
        {
          id: 3,
          name: "SIMPERPUS",
          imageUrl: "simperpus",
          status:
            "Sistem Perpustakaan, a web application to manage books, book returns, book categories in the library.",
          tech: "PHP, Bootstrap",
          github: "null",
          demo: "null",
        },
        {
          id: 4,
          name: "Travel Nomads",
          imageUrl: "nomads",
          status:
            "Nomads Travel, a web  application for booking travel with a responsive interface, island vacation category.",
          tech: "PHP, Laravel",
          github: "null",
          demo: "null",
        },
        {
          id: 5,
          name: "Portfolio v1",
          imageUrl: "v1",
          status: "My previous portfolio that has been updated to the present.",
          tech: "Vue JS, Tailwind",
          github: "null",
          demo: "null",
        },
        {
          id: 6,
          name: "Quran App",
          imageUrl: "quran",
          status:
            "A application make it easier for Muslims to read the Quran from anywhere.",
          tech: "Flutter",
          github: "null",
          demo: "null",
        },
        {
          id: 7,
          name: "Euna Shop",
          imageUrl: "onlineshop",
          status:
            "An app that makes it easy to shop online from anywhere with convenient and fast usage.",
          tech: "Vue JS",
          github: "null",
          demo: "null",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
    <article data-page="about">
      <header>
        <div
          class="text-2xl font-bold text-white mb-10 slide-up title-section flex items-center justify-center flex-col"
        >
          <h4 class="scale-in">Past Project Experience</h4>
          <h4
            class="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300 fade-in-delayed"
          >
            Explore the projects I've worked on so far
          </h4>
        </div>
      </header>
      <section>
        <div>
          <div
            class="grid grid-cols-1 gap-4 pb-32 md:grid-cols-3 md:gap-3 xl:grid-cols-3 xl:gap-3 2xl:gap-5"
          >
            <div 
              v-for="(item, index) in items" 
              :key="item.id"
              class="portfolio-item"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <div
                class="item-card flex flex-col items-center gap-2 rounded bg-[#1e1e1f] hover:bg-[#282828] border border-[#383838] rounded-xl text-amber-50 md:gap-3 px-5 py-5 lg:px-5 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-amber-200/30"
              >
                <div
                  class="flex h-12 w-12 items-center justify-center p-0 h-full w-full lg:p-0 image-container"
                >
                  <img
                    alt="Project Image"
                    loading="lazy"
                    decoding="async"
                    data-nimg="1"
                    class="drop-shadow-xl rounded rounded-xl transition-transform duration-300 hover:scale-110"
                    :src="'/img/portfolio-' + item.imageUrl + '.png'"
                  />
                </div>
                <div
                  class="w-full flex flex-col gap-2 items-center text-sm md:text-base lg:text-lg"
                >
                  <div class="title-text font-medium text-secondary transition-colors duration-300 hover:text-amber-200">
                    {{ item.name }}
                  </div>
                  <div
                    class="w-full text-left text-[10px] text-[#c1c1c1] md:text-xs lg:text-sm leading-relaxed"
                  >
                    {{ item.status }}
                  </div>
                  <div
                    class="w-full mt-4 text-normal text-sm text-left text-amber-200 font-medium"
                  >
                    {{ item.tech }}
                  </div>
                  <div class="w-full flex justify-end">
                    <div
                      class="flex cursor-pointer items-end gap-2 text-primary"
                    >
                      <a
                        v-if="item.github !== 'null'"
                        :href="item.github"
                        target="_blank"
                        rel="noreferrer"
                        title="View github repository"
                        class="transition-all duration-300 hover:text-amber-200 hover:scale-125 transform"
                      >
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          height="16"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                          ></path></svg
                      ></a>
                      <a
                        v-if="item.demo !== 'null'"
                        :href="item.demo"
                        target="_blank"
                        rel="noreferrer"
                        title="View finished project"
                        class="transition-all duration-300 hover:text-amber-200 hover:scale-125 transform"
                      >
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          height="18"
                          width="18"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                          ></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line></svg
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<style scoped>
/* Performance optimized animations */
.portfolio-item {
  opacity: 0;
  animation: slideInUp 0.8s ease-out forwards;
  will-change: transform, opacity;
}

@keyframes slideInUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
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
  animation-delay: 0.2s;
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

.fade-in-delayed {
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;
  animation-delay: 0.4s;
  will-change: opacity;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.item-card {
  will-change: transform, box-shadow;
  backface-visibility: hidden;
  transform: translateZ(0);
}

.item-card:hover {
  transform: translateY(-8px) scale(1.02) translateZ(0);
  box-shadow: 0 20px 40px rgba(255, 219, 112, 0.1);
}

.image-container img {
  will-change: transform;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced hover effects */
.title-text {
  transition: color 0.3s ease;
}

/* Icon hover animations */
svg {
  will-change: transform;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

svg:hover {
  stroke: #ffdb70;
  transform: translateY(-2px) scale(1.1) translateZ(0);
}

/* Staggered animation for grid items */
.portfolio-item:nth-child(1) { animation-delay: 0.1s; }
.portfolio-item:nth-child(2) { animation-delay: 0.2s; }
.portfolio-item:nth-child(3) { animation-delay: 0.3s; }
.portfolio-item:nth-child(4) { animation-delay: 0.4s; }
.portfolio-item:nth-child(5) { animation-delay: 0.5s; }
.portfolio-item:nth-child(6) { animation-delay: 0.6s; }
.portfolio-item:nth-child(7) { animation-delay: 0.7s; }

/* Responsive optimizations */
@media (prefers-reduced-motion: reduce) {
  .portfolio-item,
  .slide-up,
  .scale-in,
  .fade-in-delayed {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
  
  .item-card:hover,
  svg:hover {
    transform: none !important;
  }
}

/* Performance improvements for mobile */
@media (max-width: 768px) {
  .item-card:hover {
    transform: translateY(-4px) translateZ(0);
  }
}
</style>
