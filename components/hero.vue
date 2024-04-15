<template>
  <section class="hero" :style="{ backgroundImage: 'url(' + backgroundImage + ')' }">
    <div class="hero-content">
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  backgroundImage: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  }
});
</script>


<style scoped>
.hero {
  background-size: cover;
  background-position: center center;
  color: white;
  text-align: center;
  padding: 100px 0;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.5rem;
}
</style>