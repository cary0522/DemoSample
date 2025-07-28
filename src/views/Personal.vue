<script setup>
import { ref } from 'vue';
import UserPage from "@/components/MasterPageUser.vue";
import Search from "@/components/BaseComponents/Search.vue";
import OrderItem from "@/components/BaseComponents/OrderItem.vue";
import CartItem from "@/components/BaseComponents/CartItem.vue";

import OrderJSon from "@/assets/Order.json";
</script>

<template>
    <UserPage>
        <div class="w-4/5 mx-auto">
            <Search></Search>
        </div>
        <div class="w-full mx-auto">
            <div v-for="order in OrderJSon" :key="order.OrderId">
                <OrderItem :order="order" />
            </div>
        </div>
    </UserPage>
</template>