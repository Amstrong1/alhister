<template>
    <MainLayout>
        <div class="md:grid grid-cols-12 mx-4">
            <div class="col-span-2">
                <div class="flex flex-col gap-4 items-center">
                    <div v-for="(image, index) in images" :key="index" @click="changeImage(index)">
                        <img :src="image" alt="Thumbnail" class="w-16 h-16">
                    </div>
                </div>
            </div>

            <div class="col-span-6">
                <div class="flex items-center">
                    <img :src="currentImage" alt="Main Image" class="w-full h-auto">
                </div>
            </div>

            <div class="col-span-4 px-20">
                <div class="flex flex-col">
                    <p>Nom du produit</p>
                    <div class="flex">
                        <div v-for="i in 5">
                            <Icon name="mdi:star" class="inline-block" />
                        </div>
                        33 Avis
                    </div>
                    <div class="my-4">
                        <p>€99.99</p>
                        <p class="text-xs">ou 3x €19.99 avec Alma
                            <Icon name="mdi:about-circle-outline" />
                        </p>
                    </div>
                    <div class="my-4 flex gap-4">
                        <div v-for="i in 2" class="text-xs cursor-pointer">
                            <img @mouseenter="showSpan = true" @mouseleave="showSpan = false" src="/img/tab1.jpg"
                                class="mx-auto block w-12 h-12 border rounded-full" alt="">
                            <span class="absolute ml-2" v-if="showSpan">test</span>
                        </div>
                    </div>
                    <div class="my-4">
                        <div class="grid grid-cols-12 gap-4">
                            <input class="bg-white border border-slate-200 outline-0 px-4 py-2 col-span-4" type="number"
                                name="" value="1">
                            <button class="bg-red-500 text-white px-4 py-2 col-span-8 text-xs"> Ajouter au panier
                            </button>
                        </div>
                        <button v-if="false" class="bg-slate-300 text-white px-4 py-2 w-full"> Épuisé </button>
                    </div>
                    <div v-if="false" class="my-4 text-xs">
                        <input class="bg-white border border-slate-200 outline-0 my-1 px-4 py-2 w-full" type="text"
                            name="" placeholder="Numéro de téléphone">
                        <button class="bg-green-500 text-white my-1 px-4 py-2 w-full"> Etre prévenu du retour sur
                            whatsapp </button>
                    </div>
                    <div>
                        <p class="text-xs underline">Recevoir une alerte par email</p>
                    </div>

                    <div class="mt-8 mb-4 border-b">
                        <div @click="showFilter1 = !showFilter1" class="py-2 flex justify-between">
                            <h5 class="text-xs uppercase">Détails et dimensions</h5>
                            <Icon v-if="!showFilter1" name="mdi:expand-more" size="20" />
                            <Icon v-if="showFilter1" name="mdi:expand-less" size="20" />
                        </div>
                        <div class="text-xs font-light mb-2" v-if="showFilter1">
                            <img src="" alt="">
                            <ul>
                                <li> Largeur des verres (A) : 54mm </li>
                                <li> Hauteur des verres (B) : 46mm </li>
                                <li> Taille du pont (C) : 16mm </li>
                                <li> Longueur des branches (D) : 140mm </li>
                                <li> Longueur totale (E) : 140mm </li>
                                <li> Matériaux utilisés : Acétate </li>
                                <li> Couleur des matériaux : Noir </li>
                                <li> Traitement des verres : Anti-Lumière Bleue </li>
                                <li> Matière des verres : CR39 (Organique ultra-résistant) </li>
                                <li> Fixation des branches : Flex </li>
                                <li> Plaquettes : Non </li>
                                <li> Norme : Marquage CE (Norme EN ISO 12312-1-2013) </li>
                                <li> Référence : ARSENELC1 </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </MainLayout>
</template>

<script setup>
import { ref } from 'vue';

import MainLayout from "~/layouts/MainLayout.vue";

const showSpan = ref(false);

const images = [
    '/img/tab1.jpg',
    '/img/tab2.png',
    '/img/tab3.jpg',
];
const currentImageIndex = ref(0);
const currentImage = computed(() => {
    return images[currentImageIndex.value];
});

const changeImage = (index) => {
    currentImageIndex.value = index;
};

let showFilter1 = ref(false);

</script>

<style>
/* .carousel {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.main-image img {
    width: 100%;
    max-width: 500px;
    height: auto;
    margin-bottom: 10px;
}

.thumbnails {
    display: flex;
    justify-content: center;
}

.thumbnails img {
    width: 100px;
    height: auto;
    margin: 0 5px;
    cursor: pointer;
} */
</style>