<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import UserPage from '@/components/MasterPageUser.vue'
import LeftOptions from '@/components/BaseComponents/LeftOptions.vue'
import Search from '@/components/BaseComponents/Search.vue'
import ThemePavilion from '@/components/FairPage/ThemePavilion.vue'
import RadioProgramList from '@/components/FairPage/RadioProgramList.vue'
import Breadcrumb from '@/components/BaseComponents/Breadcrumb.vue'
import LinkJson from '@/assets/Link.json'

const router = useRouter()
const LinkData = ref([])

watchEffect(() => {
    LinkData.value = LinkJson.filter((item) => {
        return item.type === router.currentRoute.value.meta.title
    })
})


const OptionsList = ref([
    { Value: '政府機關', Path: '/link/method' },
    { Value: '教育學習', Path: '/link/stall' },
    { Value: '研究單位', Path: '/link/themePavilion' },
    { Value: '財團法人', Path: '/link/foundation' },
    { Value: '原教中心', Path: '/link/center' },
])
</script>
<template>
    <UserPage>
        <div class="flex w-full">
            <LeftOptions :OptionsList="OptionsList" class="w-1/3" />
            <div class="w-full flex flex-wrap">
                <Search class="w-full" />
                <Breadcrumb :-breadcrumb-list="['好站連結', router.currentRoute.value.meta.title]" class="w-full">
                </Breadcrumb>
                <div class="w-full md:flex md:flex-wrap min-h-[150px]">
                    <div v-for="link in LinkData" class="w-full md:w-1/2">
                        <a :href="link.path" class="flex items-center m-4" target="_blank" rel="noopener noreferrer">
                            <img loading="lazy" :src="link.image" alt="" class="w-[50px] h-[50px] rounded-full">
                            <p
                                class="text-defaultColor font-black text-base md:text-xl mx-2 hover:text-[#F28729] hover:text-2xl transition-all">
                                {{ link.name }}
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </UserPage>
</template>