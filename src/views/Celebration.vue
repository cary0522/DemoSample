<script setup>
import { ref, onMounted } from 'vue'
import UserPage from '@/components/MasterPageUser.vue'
import LeftOptions from '@/components/BaseComponents/LeftOptions.vue'
import Search from '@/components/BaseComponents/Search.vue'
import Opening from '@/components/CelebrationPage/Opening.vue'
import AwardProcess from '@/components/CelebrationPage/AwardProcess.vue'
import OpeningLIVE from '@/components/CelebrationPage/OpeningLIVE.vue'
import AwardLIVE from '@/components/CelebrationPage/AwardLIVE.vue'
import Breadcrumb from '@/components/BaseComponents/Breadcrumb.vue'

import { useRouter } from 'vue-router'
const router = useRouter()

const OptionsList = ref([
    { Value: '年度計畫與成果展示', Path: '/results/achievements' },
    { Value: '活動相簿', Path: '/results/album' },
    { Value: '成果填報', Path: '/results/writing' },
    { Value: '復興區策盟成果', Path: 'https://fuxing.sa.tyc.edu.tw/' },
    { Value: '110學年度策盟成果', Path: 'https://sites.google.com/mail.hfps.tyc.edu.tw/110irc?usp=sharing' },
    { Value: '111學年度策盟成果', Path: 'https://sites.google.com/mail.hfps.tyc.edu.tw/111irc?usp=sharing' },
])
</script>
<template>
    <UserPage>
        <div class="flex w-full">
            <LeftOptions :OptionsList="OptionsList" class="w-1/3" />
            <div class="flex flex-wrap w-full">
                <Breadcrumb :-breadcrumb-list="['策略聯盟', router.currentRoute.value.meta.title]" class="w-full">
                </Breadcrumb>
                <Search class="w-full" />
                <!-- <AwardProcess v-if="router.currentRoute.value.path === '/celebration/awardProcess'" /> -->
                <OpeningLIVE v-if="router.currentRoute.value.path === '/results/achievements'" />
                <Opening v-if="router.currentRoute.value.path === '/results/album'" />
                <AwardLIVE v-if="router.currentRoute.value.path === '/results/writing'" />
            </div>
        </div>
    </UserPage>
</template>