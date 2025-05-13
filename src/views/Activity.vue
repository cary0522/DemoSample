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
const OptionsList = ref([
    { Value: '研習公告', Path: '/activity/announcements' },
    { Value: '研習報名', Path: '/activity/registration' },
    { Value: '成果照片', Path: '/activity/highlights' }
])

</script>
<template>
    <div>
        <UserPage>
            <div class="flex w-full">
                <LeftOptions :OptionsList="OptionsList" class="w-1/3" />
                <div class="w-full flex flex-wrap">
                    <Breadcrumb :-breadcrumb-list="['師資培訓組', router.currentRoute.value.meta.title]" class="w-full">
                    </Breadcrumb>
                    <!-- <Search class="w-full"></Search> -->
                    <Workshop v-if="router.currentRoute.value.path === '/activity/announcements'" />
                    <Master v-if="router.currentRoute.value.path === '/activity/registration'" />
                    <PerformanceTeam v-if="router.currentRoute.value.path === '/activity/highlights'" />
                </div>
            </div>
        </UserPage>
    </div>
</template>