<template>
    <div class="py-20 flex justify-center bg-slate-200 text-xs">
        <div class="w-2/4 flex flex-col gap-4 justify-center items-center">
            <h6 class="text-xl font-bold">Gagne 10% de réduction !</h6>
            <p>
                Inscris-toi et reçois 10% de réduction sur ta prochaine commande et du contenu frais chaque semaine !
            </p>
            <div class="w-1/2 grid grid-cols-10">
                <div class="p-2 bg-white col-span-8">
                    <input type="" class="border-0 p-2 outline-0" placeholder="Email" name="" value="">
                </div>
                <div class="bg-black p-2 col-span-2 flex items-center">
                    <button class="text-white">S'inscrire</button>
                </div>
            </div>
        </div>
    </div>

    <hr class="mx-10 mt-10">
    <div class="gap-10 flex justify-center text-xs py-20">
        <div class="flex flex-col gap-4 justify-center items-center">
            <Icon name="mdi:box-outline" size="30" />
            <p class="uppercase">Expédition en 24h ouvrées</p>
            <p class="font-light">Ta commande est préparée et expédiée depuis notre atelier à Paris</p>
        </div>

        <div class="flex flex-col gap-4 justify-center items-center">
            <Icon name="mdi:clock-outline" size="30" />
            <p class="uppercase">Echanges gratuits pendant 14 jours</p>
            <p class="font-light">Prends le temps d'essayer tes nouvelles lunettes</p>
        </div>

        <div class="flex flex-col gap-4 justify-center items-center">
            <p class="uppercase">Paiements sécurisé</p>
            <p class="font-light">Paiement possible en plusieurs fois et à 30 jours</p>
        </div>
    </div>
    <hr class="mx-10 ">

    <div class="gap-10 flex justify-center text-xs py-20">
        <div class="flex flex-col gap-4">
            <p class="uppercase">NOUS CONTACTER</p>
        </div>

        <div class="flex flex-col gap-4">
            <p class="uppercase">L'ESSENTIEL</p>
            <ul class="font-light">
                <li> La Marque </li>
                <li> Protection des données </li>
                <li> Conditions Générales de Vente </li>
                <li> Législation et règlementation applicable </li>
                <li> Offre 100% Santé </li>
                <li> Cartes-Cadeau </li>
            </ul>
        </div>

        <div class="flex flex-col gap-4">
            <p class="uppercase">CONSEILS</p>
            <ul class="font-light">
                <li> Bien choisir sa monture </li>
                <li> Qu'est-ce que la lumière bleue </li>
                <li> Ajuster mes lunettes </li>
                <li> Entretenir mes lunettes </li>
                <li> Essayage virtuel </li>
                <li> Comment adapter à ma vue </li>
                <li> Assurance Lunettes </li>
            </ul>
        </div>

        <div class="flex flex-col gap-4">
            <p class="uppercase">SUPPORT</p>
            <ul class="font-light">
                <li> Demande de devis </li>
                <li> FAQ </li>
                <li> Moyens de paiement </li>
                <li> Centre de Retours </li>
                <li> Échanges et retours </li>
                <li> Livraison </li>
                <li> Click & Collect </li>
                <li> Remboursements mutuelle et sécurité sociale </li>
                <li> Les Garanties Le Petit Lunetier </li>
            </ul>
        </div>
    </div>
    <hr class="mx-10">
    <div class="flex justify-around items-center text-xs">
        <p>© Alhister - Tous droits réservés</p>
        <nuxt-link to="/" class="m-2">
            <img width="170" src="/img/logo.png" alt="" />
        </nuxt-link>
        <div class="flex gap-2">
            <select class="border-0 outline-0 w-36 h-10 px-2">
                <option value="France">France EUR €</option>
            </select>
            <select class="border-0 outline-0 w-20 h-10 px-2">
                <option value="Francais">Francais</option>
            </select>
        </div>
    </div>
</template>