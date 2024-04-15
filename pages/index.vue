<template>
    <MainLayout>

        <Hero backgroundImage="/img/hero.jpg" title="SOLAIRE" subtitle="100% Anti-UV // Adaptables à la vue." />

        <div class="flex justify-center gap-4 items-center w-full">
            <div class="p-4 cursor-pointer hover:text-black"
                :class="activeTab === index ? 'text-black' : 'text-slate-500'" v-for="(tab, index) in tabs" :key="index"
                @click.prevent="activeTab = index">
                <div class="flex flex-col justify-center items-center text-xs">
                    <img class="rounded-full w-14 h-14" :src="tab.img" alt="" />
                    {{ tab.name }}
                </div>
            </div>
            <div class="absolute right-8">
                <span class="text-xs font-light">100 articles</span>
                <Icon @click="largeShow = !largeShow; tinyShow = !tinyShow;" v-if="largeShow" name="mdi:square"
                    size="35" />
                <Icon @click="largeShow = !largeShow; tinyShow = !tinyShow;" v-if="largeShow"
                    name="ph:squares-four-fill" size="35" class="text-slate-300" />
                <Icon @click="largeShow = !largeShow; tinyShow = !tinyShow;" v-if="tinyShow" name="mdi:square" size="35"
                    class="text-slate-300" />
                <Icon @click="largeShow = !largeShow; tinyShow = !tinyShow;" v-if="tinyShow" name="ph:squares-four-fill"
                    size="35" />
            </div>
        </div>

        <div class="p-8">
            <div class="flex justify-around gap-4 mb-8">
                <div @click="showFilter1 = !showFilter1; showFilter2 = false; showFilter3 = false; showFilter4 = false;"
                    class="md:w-full text-xs">
                    <div class="border border-slate-200 p-3 flex justify-between">
                        COLORIS
                        <Icon v-if="!showFilter1" name="mdi:expand-more" size="20" />
                        <Icon v-if="showFilter1" name="mdi:expand-less" size="20" />
                    </div>
                    <div v-if="showFilter1" class="flex gap-4 bg-white border border-slate-200 p-3 mt-4">
                        <ul class="">
                            <li>test</li>
                        </ul>
                    </div>
                </div>

                <div @click="showFilter1 = false; showFilter2 = !showFilter2; showFilter3 = false; showFilter4 = false;"
                    class="md:w-full text-xs">
                    <div class="border border-slate-200 p-3 flex justify-between">
                        FORME
                        <Icon v-if="!showFilter2" name="mdi:expand-more" size="20" />
                        <Icon v-if="showFilter2" name="mdi:expand-less" size="20" />
                    </div>
                    <div>
                        <div v-if="showFilter2" class="border border-slate-200 p-3 mt-4 bg-white">
                            <ul>
                                <li>test</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div @click="showFilter1 = false; showFilter2 = false; showFilter3 = !showFilter3; showFilter4 = false;"
                    class="w-full text-xs">
                    <div class="border border-slate-200 p-3 flex justify-between">
                        TAILLE MONTURE
                        <Icon v-if="!showFilter3" name="mdi:expand-more" size="20" />
                        <Icon v-if="showFilter3" name="mdi:expand-less" size="20" />
                    </div>
                    <div v-if="showFilter3" class="border border-slate-200 p-3 mt-4 bg-white">
                        <ul>
                            <li>test</li>
                        </ul>
                    </div>
                </div>
                <div @click="showFilter1 = false; showFilter2 = false; showFilter3 = false; showFilter4 = !showFilter4;"
                    class="w-full text-xs">
                    <div class="border border-slate-200 p-3 flex justify-between">
                        MATÉRIAU
                        <Icon v-if="!showFilter4" name="mdi:expand-more" size="20" />
                        <Icon v-if="showFilter4" name="mdi:expand-less" size="20" />
                    </div>
                    <div v-if="showFilter4" class="border border-slate-200 p-3 mt-4 bg-white">
                        <ul>
                            <li>test</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div v-for="(tab, index) in tabs" :key="index" :style="{ display: activeTab === index ? 'block' : 'none' }">
                <div>
                    <nuxt-link to="/product-detail">
                        <div class="flex justify-start">
                            <div @mouseenter="hover = true" @mouseleave="hover = false"
                                class="md:w-1/3 bg-white shadow-md rounded-md overflow-hidden">
                                <div v-if="!hover" class="bg-cover bg-center h-64"
                                    :style="{ 'background-image': `url(${tab.product_img0})` }"></div>
                                <div v-if="hover" class="bg-cover bg-center h-64"
                                    :style="{ 'background-image': `url(${tab.product_img1})` }"></div>
                                <div class="p-4 flex flex-col items-center">
                                    <p class="text-xs mb-2">{{ tab.product }}</p>
                                    <p class="text-xs text-gray-700">{{ tab.price }}</p>
                                </div>
                            </div>
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
import Hero from "/components/hero.vue";

const activeTab = ref(0);
const tabs = [
    {
        name: "Lumière bleue",
        img: "/img/tab1.jpg",
        product: "SANTORIN NOIR",
        product_img0: '/products/recto1.png',
        product_img1: '/products/verso1.png',
        price: "79,90 €",
    },
    {
        name: "Nouvelle collection",
        img: "/img/tab2.png",
        product: "HVAR BLEU",
        product_img0: '/products/recto2.png',
        product_img1: '/products/verso2.png',
        price: "79,90 €",
    },
    {
        name: "Solaires",
        img: "/img/tab3.jpg",
        product: "PALAU CAMEL",
        product_img0: '/products/recto3.png',
        product_img1: '/products/verso3.png',
        price: "79,90 €"
    },
    {
        name: "Accessoires",
        img: "/img/tab4.jpg",
        product: "MOORÉA",
        product_img0: '/products/recto4.png',
        product_img1: '/products/verso4.png',
        price: "79,90 €"
    },
    {
        name: "Carte Cadeau",
        img: "/img/tab5.jpg",
        product: "LANAI",
        product_img0: '/products/recto5.png',
        product_img1: '/products/verso5.png',
        price: "79,90 €"
    },
    {
        name: "Kids",
        img: "/img/tab6.jpg",
        product: "OAHU",
        product_img0: '/products/recto1.png',
        product_img1: '/products/verso1.png',
        price: "79,90 €"
    },
    {
        name: "Ski",
        img: "/img/tab7.jpg",
        product: "PEHERENTIAN GRIS",
        product_img0: '/products/recto2.png',
        product_img1: '/products/verso2.png',
        price: "79,90 €"
    },
];

let largeShow = ref(true);
let tinyShow = ref(false);
let showFilter1 = ref(false);
let showFilter2 = ref(false);
let showFilter3 = ref(false);
let showFilter4 = ref(false);
let hover = ref(false);
</script>

<style>
/* 
.tab-product>div {
    display: none;
}

.tab-product>div.show {
    display: block;
} */
</style>
