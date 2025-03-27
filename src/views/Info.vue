<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import UserPage from '@/components/MasterPageUser.vue'
import LeftOptions from '@/components/BaseComponents/LeftOptions.vue'
import Search from '@/components/BaseComponents/Search.vue'
import Calendar from '@/components/InfoPage/Calendar.vue'
import Organization from '@/components/InfoPage/Organization.vue'
import Logo from '@/components/InfoPage/Logo.vue'
import Activity from './Activity.vue'

const router = useRouter()

const OptionsList = ref([
    { Value: '中心簡介', Path: '/info/calendar' },
    { Value: '中心任務', Path: '/info/organization' },
    { Value: '組織分工', Path: '/info/logo' },
    { Value: '聯絡我們', Path: '/activity' },
])
</script>
<template>
    <div>
        <UserPage>
            <div class="flex">
                <LeftOptions :OptionsList="OptionsList" class="w-1/3" />
                <div class="w-full flex flex-wrap">
                    <!-- <Search class="w-full"></Search> -->
                    <Calendar v-if="router.currentRoute.value.path === '/info/calendar'" />
                    <Organization v-if="router.currentRoute.value.path === '/info/organization'" />
                    <Logo v-if="router.currentRoute.value.path === '/info/logo'" />
                    <Activity v-if="router.currentRoute.value.path === '/activity'"></Activity>
                </div>
            </div>
        </UserPage>
    </div>
</template>