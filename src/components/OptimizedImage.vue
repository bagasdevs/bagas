<template>
  <img
    :src="optimizedSrc"
    :alt="alt"
    :width="width"
    :height="height"
    :class="classes"
    :loading="loading"
    :decoding="decoding"
    @load="onImageLoad"
    @error="onImageError"
  />
</template>

<script>
export default {
  name: 'OptimizedImage',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    width: {
      type: [String, Number],
      default: null
    },
    height: {
      type: [String, Number],
      default: null
    },
    classes: {
      type: String,
      default: ''
    },
    loading: {
      type: String,
      default: 'lazy'
    },
    decoding: {
      type: String,
      default: 'async'
    },
    sizes: {
      type: String,
      default: null
    }
  },
  computed: {
    optimizedSrc() {
      // For external images like ibb.co, we can add optimization parameters
      if (this.src.includes('ibb.co')) {
        // Add compression and size optimization
        return this.src + '?w=' + (this.width || 400) + '&q=85&f=webp';
      }
      return this.src;
    }
  },
  methods: {
    onImageLoad() {
      this.$emit('load');
    },
    onImageError() {
      this.$emit('error');
      // Fallback to original image if optimized version fails
      if (this.optimizedSrc !== this.src) {
        this.$el.src = this.src;
      }
    }
  }
}
</script>
