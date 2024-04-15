<template>
  <div class="carousel bg-black text-white text-center text-xs relative w-100 h-8 py-2 overflow-hidden">
    <div class="absolute w-full h-full hidden" v-for="(item, index) in items" :key="index"
      :class="{ active: index === currentIndex }">
      <p>{{ item.description }}</p>
    </div>
  </div>

  <div class="flex justify-around items-center">
    <nuxt-link to="/" class="m-2">
      <img width="170" src="/img/logo.png" alt="" />
    </nuxt-link>

    <ul class="hidden md:flex justify-center gap-4 items-center text-xs text-[#333333] font-semibold">
      <li class="hover:border-b border-black cursor-pointer uppercase">
        SOLAIRE
      </li>
      <li class="hover:border-b border-black cursor-pointer uppercase">
        NOUVEAUTÉS
      </li>
      <li class="hover:border-b border-black cursor-pointer uppercase">
        PRIX UNIQUE
      </li>
      <li class="hover:border-b border-black cursor-pointer uppercase">
        A PROPOS
      </li>
      <li class="hover:border-b border-black cursor-pointer uppercase">
        SERVICE CLIENT
      </li>
      <li class="hover:border-b border-black cursor-pointer uppercase">
        BLOG
      </li>
    </ul>

    <ul class="flex justify-center gap-4 items-center text-xs text-[#333333]">
      <li class="cursor-pointer">
        <Icon name="mdi:map-marker-outline" size="20" />
        Boutique
      </li>
      <li class="cursor-pointer">
        <Icon name="ph:magnifying-glass" size="30" />
      </li>

      <li class="cursor-pointer">
        <Icon name="ph:user" size="30" />
      </li>

      <li class="cursor-pointer">
        <nuxt-link to="" class="">
          <Icon size="33" name="ph:shopping-cart-simple-light" />
          <span class="relative right-[19px] top-0.5 text-xs">0</span>
        </nuxt-link>
      </li>

      <li>
        <button class="md:hidden">
          <Icon name="ph:list" size="30" />
        </button>
      </li>
    </ul>
  </div>

  <slot/>

  <Footer />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Footer from "/components/footer.vue";

// Déclaration des données réactives
const currentIndex = ref(0);
const items = [
  {
    description: "Paiement en 03 fois ou à J+30 à partir de 40€",
  },
  { description: "Livraison offerte à partir de 60€ d'achat" },
  {
    description: "Une monture 59,99€, deux montures 89.99€. Profitez en!",
  },
];

// Méthode pour passer à l'élément suivant
const nextItem = () => {
  currentIndex.value = (currentIndex.value + 1) % items.length;
};

// Utilisation de onMounted pour exécuter une action après le montage du composant
onMounted(() => {
  setInterval(nextItem, 4000);
});
</script>


<style>
.carousel>div.active {
  display: block;
  opacity: 1;
}
</style>
