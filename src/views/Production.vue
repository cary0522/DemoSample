<script setup>
import UserPage from "@/components/MasterPageUser.vue"
import Card from "@/components/BaseComponents/Card.vue";
import Pagination from "@/components/BaseComponents/Pagination.vue";
import ProductsJson from "@/assets/Products.json";

</script>

<template>
    <UserPage>
        <div class="flex flex-wrap justify-start items-center w-4/5 mx-auto">
            <div v-for="item in ProductsJson" class="w-1/2 md:w-1/3 xl:w-1/4 p-2">
                <Card :key="item.ID" :item="item"></Card>
            </div>
        </div>
        <Pagination :TotalPage="6"></Pagination>
    </UserPage>
</template>