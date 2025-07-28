<script setup>
import { onMounted, ref } from 'vue';
import Loading from './Loading.vue';
import Swal from 'sweetalert2';

import { useCartStore } from '@/stores/useCartStore';
const cartStore = useCartStore();

const props = defineProps(["item","CartView"]);

const LoadingValue = ref(true);

function DeleteItem(id) {
    Swal.fire({
        title: '請確認是否刪除',
        text: `將從購物車中刪除 ${props.item.Title}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '確認',
        cancelButtonText: '取消',
        confirmButtonColor: '#8cb1ed',
    }).then((res) => {
        if (res.isConfirmed) {
            cartStore.DeleteCart(id);
        }
    });
}
</script>
<template>
    <div class="cursor-pointer text-center w-full flex flex-wrap justify-center items-center">
        <img loading="lazy" :src="props.item.Image" alt="" @load="LoadingValue = false"
            class="w-1/2 max-w-[200px] h-[200px] rounded-lg mx-auto my-2 hover:scale-110 transition-all" />
        <div class="w-1/2 mx-auto h-full relative">
            <div class="w-full md:w-1/2 px-2">
                <p class="w-full text-start text-lg font-bold my-4">{{ props.item.Title }}</p>
                <p class="w-full text-start text-lg font-bold my-4">{{ props.item.Price }} 元</p>
                <div class="w-full flex flex-wrap justify-start items-center">
                    <template v-if="props.CartView">
                        <button @click="cartStore.DecreaseValue(props.item)" class="mx-2">-</button>
                        <input type="number" class="text-center" v-model="props.item.Value" :max="props.item.Max" min="1" />
                        <button @click="cartStore.IncreaseValue(props.item)" class="mx-2">+</button>
                        <p class="my-2 text-xs w-full">目前庫存：{{ props.item.Max }} 個</p>
                    </template>
                    <template v-if="!props.CartView">
                        <p>x{{ props.item.Value }}</p>
                    </template>
                    <!-- <p class="w-full my-4 mx-1 text-start">{{ props.item.Value * props.item.Price }} 元</p> -->
                </div>
            </div>
            <button v-if="props.CartView"
                class="w-full md:w-1/2 bg-transparent p-2 rounded-lg m-1 text-defaultCancel absolute top-[50%] translate-y-[-50%] text-2xl"
                @click="DeleteItem(props.item.ID)">
                <v-icon icon="mdi-delete" class="text-defaultCancel hover:scale-105"></v-icon>
            </button>
        </div>
    </div>
    <Loading :Loading="LoadingValue"></Loading>
</template>
