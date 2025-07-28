<script setup>
import UserPage from "@/components/MasterPageUser.vue"
import CartItem from "@/components/BaseComponents/CartItem.vue";
import Pagination from "@/components/BaseComponents/Pagination.vue";

import { useCartStore } from "@/stores/useCartStore";
import { onMounted, watch, computed, ref, watchEffect } from "vue";
const cartStore = useCartStore();

onMounted(() => {
    console.log(cartStore);
})

watch(() => { cartStore.CartData }, (newValue) => {
    console.log(newValue);
}, { deep: true })

const ShippingFee = ref(60)
watchEffect(() => {
    if (cartStore.TotalPrice >= 2000) {
        ShippingFee.value = 0
    } else {
        ShippingFee.value = 60
    }
})
const Total = computed(() => {
    if (cartStore.CartData.length === 0) {
        return 0; // 如果購物車是空的，總金額為0
    }
    return cartStore.TotalPrice + ShippingFee.value
})
</script>

<template>
    <UserPage>
        <div class="w-4/5 mx-auto lg:flex">
            <div class="w-full lg:w-1/2">
                <div v-for="item in cartStore.CartData" :key="item.ID">
                    <CartItem :item="item" :-cart-view="true" />
                </div>
                <!-- <Pagination :-total-page="6" /> -->
            </div>
            <div class="w-full py-2 lg:w-1/2 bg-slate-500 min-h-[300px] h-full relative rounded-lg">
                <h3 class="text-white text-xl font-black m-4">小計： {{ cartStore.TotalPrice }} 元</h3>
                <h3 class="text-white text-xl font-black m-4">運費： {{ ShippingFee }} 元</h3>
                <h3 class="text-white text-xl font-black m-4">總金額： {{ Total }} 元</h3>
                <button @click="cartStore.Checkout"
                    class="bg-defaultButton hover:bg-defaultCancel p-6 rounded-lg m-1 absolute bottom-0 right-0">
                    結帳
                </button>
            </div>
        </div>
    </UserPage>
</template>