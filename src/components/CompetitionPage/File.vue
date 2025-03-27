<script setup>
import UserPage from '@/components/MasterPageUser.vue'
import Breadcrumb from '@/components/BaseComponents/Breadcrumb.vue'
</script>
<template>
    <div>
        <Breadcrumb :BreadcrumbList="['教材資源', '布農']" class="m-8"></Breadcrumb>
        <div style="position:relative;padding-top:max(60%,324px);width:100%;height:0;"><iframe
                style="position:absolute;border:none;width:100%;height:100%;left:0;top:0;"
                src="https://online.fliphtml5.com/hluzz/nhly/" seamless="seamless" scrolling="no" frameborder="0"
                allowtransparency="true" allowfullscreen="true"></iframe></div>
    </div>
</template>