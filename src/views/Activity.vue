<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import UserPage from '@/components/MasterPageUser.vue'
import Breadcrumb from "@/components/BaseComponents/Breadcrumb.vue";
import LeftOptions from '@/components/BaseComponents/LeftOptions.vue'
import Search from '@/components/BaseComponents/Search.vue'
import Night from '@/components/ActivityPage/Night.vue'
import PerformanceTeam from '@/components/ActivityPage/PerformanceTeam.vue'
import ScienceJourney from '@/components/ActivityPage/ScienceJourney.vue'
import Registration from '@/components/ActivityPage/Registration.vue'
import Master from '@/components/ActivityPage/Master.vue'
import Workshop from '@/components/ActivityPage/Workshop.vue'

import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

const router = useRouter()

// const OptionsList = ref([
//     { Value: '科展之夜', Path: '/activity/night' },
//     { Value: '科展之夜表演團隊介紹', Path: '/activity/performanceTeam' },
//     { Value: '科學之旅', Path: '/activity/scienceJourney' },
//     { Value: '科學之旅報名', Path: '/activity/registration' },
//     { Value: '與大師有約', Path: '/activity/master' },
//     { Value: '科學教師交流工作坊', Path: '/activity/workshop' },
// ])
</script>
<template>
    <Breadcrumb :BreadcrumbList="['聯絡我們']" class="m-8 w-full"></Breadcrumb>
    <div class="flex justify-around">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7236.569589358758!2d121.2946249!3d24.9223662!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346818f623ac48cb%3A0x88a1795d71fd27af!2z5qGD5ZyS5biC5aSn5rqq5Y2A5YOR5oSb5ZyL5rCR5bCP5a24!5e0!3m2!1szh-TW!2stw!4v1742968422699!5m2!1szh-TW!2stw"
            width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div class="flex justify-around flex-col ms-4 items-start">
            <p>{{ t('桃園市原住民族教育資源中心') }}</p>
            <p>{{ t('地址') }}：{{ t('桃園市大溪區介壽路214號') }}</p>
            <p>{{ t('電話') }}：03-3892762</p>
            <p>{{ t('傳真') }}：03-3906990</p>
        </div>
    </div>
    <!-- <UserPage>
        <div class="flex">
            <LeftOptions :OptionsList="OptionsList" class="w-1/3" />
            <div class="w-full flex flex-wrap">
                <Search class="w-full"></Search>
                <Night v-if="router.currentRoute.value.path === '/activity/night'" class="w-full"></Night>
                <PerformanceTeam v-if="router.currentRoute.value.path === '/activity/performanceTeam'" class="w-full">
                </PerformanceTeam>
                <ScienceJourney v-if="router.currentRoute.value.path === '/activity/scienceJourney'" class="w-full">
                </ScienceJourney>
                <Registration v-if="router.currentRoute.value.path === '/activity/registration'" class="w-full">
                </Registration>
                <Master v-if="router.currentRoute.value.path === '/activity/master'" class="w-full"></Master>
                <Workshop v-if="router.currentRoute.value.path === '/activity/workshop'" class="w-full"></Workshop>
            </div>
        </div>
    </UserPage> -->
</template>