<script>
export default {
  data() {
    return {
      activeTab: 1,
      tech: [
        {
          id: 1,
          name: "HTML",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
          status: "Advanced",
        },
        {
          id: 2,
          name: "CSS",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
          status: "Advanced",
        },
        {
          id: 3,
          name: "PHP",
          imageUrl:
            "https://cdn.iconscout.com/icon/free/png-256/free-php-2038871-1720084.png",
          status: "Advanced",
        },
        {
          id: 4,
          name: "Javascript",
          imageUrl:
            "https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png",
          status: "Advance",
        },
        {
          id: 5,
          name: "Laravel",
          imageUrl: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
          status: "Advance",
        },
        {
          id: 6,
          name: "VueJS",
          imageUrl:
            "https://cdn.iconscout.com/icon/free/png-256/free-vue-282497.png?f=webp",
          status: "Intermediate",
        },
        {
          id: 7,
          name: "NodeJS",
          imageUrl:
            "https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png",
          status: "Beginner",
        },
        {
          id: 8,
          name: "Tailwind",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
          status: "Advance",
        },
        {
          id: 9,
          name: "Bootstrap",
          imageUrl:
            "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png",
          status: "Intermediate",
        },
        {
          id: 10,
          name: "ReactJS",
          imageUrl:
            "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
          status: "Beginner",
        },
      ],
      tools: [
        {
          id: 1,
          name: "Git",
          imageUrl:
            "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
          status: "Version Control",
        },
        {
          id: 2,
          name: "GitHub",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
          status: "Git Hosting",
        },
        {
          id: 3,
          name: "NPM",
          imageUrl:
            "https://cdn.iconscout.com/icon/free/png-256/free-npm-3-1175132.png",
          status: "Package Manager",
        },
        {
          id: 4,
          name: "MySQL",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png",
          status: "Database",
        },
      ],
    };
  },
};
</script>
<template>
  <div
    class="bg-[#1e1e1f] px-5 py-5 md:px-12 md:py-10 text-left border border-[#383838] rounded-3xl text-amber-50 mx-3 mb-5 slide-up"
  >
    <article data-page="about">
      <header>
        <div
          class="text-2xl font-bold text-white mb-5 title-section flex items-center scale-in"
        >
          About Me &nbsp;
          <div
            class="h-[1px] w-32 bg-amber-200 md:w-96 line-expand"
          ></div>
        </div>
      </header>

      <section
        class="text-sm md:text-lg text-justify flex flex-col gap-4 md:flex-row md:gap-8 md:justify-left md:items-center"
      >
        <div class="flex justify-center">
          <img
            class="w-9/12 rounded-full mb-3 image-fade-in hover:scale-105 transition-transform duration-500"
            src="https://i.ibb.co/mFgw9F9K/profile.jpg"
            alt="Profile Photo"
            loading="lazy"
          />
        </div>
        <div class="md:w-7/12">
          <p class="mb-3 md:mb-7 text-slide-in text-slide-1">
            &nbsp; &nbsp; &nbsp; Hi everyone! My name is Bagas Cahya Pamungkas.
            I'm a web developer from Magelang, Central Java. I have 2.5 year of
            experience in back-end web development. I really enjoy what I do
            right now, in my opinion, creating programs is not just a job, but
            also an art that has aesthetic value
          </p>
          <p class="mb-3 text-slide-in text-slide-2">
            &nbsp; &nbsp; &nbsp; My job is to build your website to be
            functional and user-friendly yet still attractive. In addition, I
            provide a personal touch to your product and ensure that the website
            catches attention and is easy to use. My goal is to convey your
            message and identity in the most creative way. If you are interested
            in hiring me, please contact the listed contact.
          </p>
        </div>
      </section>
    </article>
  </div>

  <div class="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
    <article data-page="about">
      <header>
        <div
          class="text-2xl font-bold text-white mb-5 title-section flex items-center"
        >
          <div
            class="h-[1px] w-10 bg-amber-200 md:w-20 line-expand"
            style="animation-delay: 0.8s;"
          ></div>
          &nbsp; Skills
        </div>
      </header>
      <section>
        <div>
          <ul
            class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-5 tab-fade-in"
          >
            <li class="mr-2">
              <button
                class="inline-block px-4 py-3 rounded-lg hover:text-white transition-all duration-300 transform hover:scale-105"
                :class="{
                  'text-amber-200 bg-amber-200 bg-opacity-10': activeTab === 1,
                }"
                @click="activeTab = 1"
              >
                Tech Stack
              </button>
            </li>
            <li class="mr-2">
              <button
                class="inline-block px-4 py-3 rounded-lg hover:text-white transition-all duration-300 transform hover:scale-105"
                :class="{
                  'text-amber-200 bg-amber-200 bg-opacity-10': activeTab === 2,
                }"
                @click="activeTab = 2"
              >
                Tools
              </button>
            </li>
          </ul>
        </div>
        <div v-show="activeTab === 1">
          <div
            class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12"
          >
            <div 
              v-for="(item, index) in tech" 
              :key="item.id"
              class="skill-item"
              :style="{ animationDelay: `${index * 0.1 + 1}s` }"
            >
              <div
                class="item-tech flex cursor-pointer items-center gap-2 rounded border border-amber-200 px-2 py-2 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-amber-300"
              >
                <div
                  class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2"
                >
                  <img
                    alt="Technology Icon"
                    loading="lazy"
                    width="32"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                    :src="item.imageUrl"
                  />
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg">
                  <div
                    class="tech font-medium text-secondary transition-all duration-300"
                  >
                    {{ item.name }}
                  </div>
                  <div
                    class="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm"
                  >
                    {{ item.status }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="activeTab === 2">
          <div
            class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12"
          >
            <div 
              v-for="(item, index) in tools" 
              :key="item.id"
              class="skill-item"
              :style="{ animationDelay: `${index * 0.1 + 1}s` }"
            >
              <div
                class="item-tech flex cursor-pointer items-center gap-2 rounded border border-amber-200 px-2 py-2 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-amber-300"
              >
                <div
                  class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2"
                >
                  <img
                    alt="Tool Icon"
                    loading="lazy"
                    width="32"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                    :src="item.imageUrl"
                  />
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg">
                  <div
                    class="tech font-medium text-secondary transition-all duration-300"
                  >
                    {{ item.name }}
                  </div>
                  <div
                    class="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm"
                  >
                    {{ item.status }}
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
/* Optimized animations with hardware acceleration */
.slide-up {
  opacity: 0;
  animation: slideUp 0.8s ease-out forwards;
  will-change: transform, opacity;
}

@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
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

.line-expand {
  transform: scaleX(0);
  transform-origin: left;
  animation: expandLine 1s ease-out forwards;
  animation-delay: 0.5s;
  will-change: transform;
}

@keyframes expandLine {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}

.image-fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
  animation-delay: 0.3s;
  will-change: opacity, transform;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.text-slide-in {
  opacity: 0;
  animation: slideInLeft 0.8s ease-out forwards;
  will-change: transform, opacity;
}

@keyframes slideInLeft {
  0% {
    opacity: 0;
    transform: translate3d(-30px, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.text-slide-1 {
  animation-delay: 0.6s;
}

.text-slide-2 {
  animation-delay: 0.8s;
}

.tab-fade-in {
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;
  animation-delay: 1s;
  will-change: opacity;
}

.skill-item {
  opacity: 0;
  animation: slideInUp 0.6s ease-out forwards;
  will-change: transform, opacity;
}

@keyframes slideInUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 30px, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.img-tech,
.tech {
  will-change: transform;
}

.item-tech:hover .img-tech {
  transform: scale(1.2) translateZ(0);
}

.item-tech:hover .tech {
  transform: translateY(-12px) translateZ(0);
}

.item-tech:hover .status-tech {
  opacity: 1;
}

.item-tech {
  will-change: transform, box-shadow;
  backface-visibility: hidden;
}

/* Performance optimizations */
@media (prefers-reduced-motion: reduce) {
  .slide-up,
  .scale-in,
  .line-expand,
  .image-fade-in,
  .text-slide-in,
  .tab-fade-in,
  .skill-item {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
  
  .item-tech:hover .img-tech,
  .item-tech:hover .tech {
    transform: none !important;
  }
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .item-tech:hover {
    transform: scale(1.02) translateZ(0);
  }
}
</style>
