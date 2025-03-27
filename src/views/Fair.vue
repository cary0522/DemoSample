<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import UserPage from '@/components/MasterPageUser.vue'
import LeftOptions from '@/components/BaseComponents/LeftOptions.vue'
import Search from '@/components/BaseComponents/Search.vue'
import Method from '@/components/FairPage/Method.vue'
import Stall from '@/components/FairPage/Stall.vue'
import ThemePavilion from '@/components/FairPage/ThemePavilion.vue'
import RadioProgramList from '@/components/FairPage/RadioProgramList.vue'

const router = useRouter()

const OptionsList = ref([
    { Value: '政府機關', Path: '/fair/method' },
    { Value: '教育學習', Path: '/fair/stall' },
    { Value: '研究單位', Path: '/fair/themePavilion' },
    { Value: '財團法人', Path: '/fair/radioProgramList' },
    { Value: '原教中心', Path: '/fair/radioProgramList' },
])
</script>
<template>
    <UserPage>
        <div class="flex">
            <LeftOptions :OptionsList="OptionsList" class="w-1/3" />
            <div class="w-full flex flex-wrap">
                <Search class="w-full" />
                <Method v-if="router.currentRoute.value.path === '/fair/method'" class="w-full" />
                <Stall v-if="router.currentRoute.value.path === '/fair/stall'" class="w-full" />
                <ThemePavilion v-if="router.currentRoute.value.path === '/fair/themePavilion'" class="w-full" />
                <RadioProgramList v-if="router.currentRoute.value.path === '/fair/radioProgramList'" class="w-full" />
            </div>

        </div>
    </UserPage>
</template>