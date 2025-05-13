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
import Contact from '@/components/InfoPage/Contact.vue'
import Breadcrumb from '@/components/BaseComponents/Breadcrumb.vue'

const router = useRouter()

const OptionsList = ref([
    { Value: '中心簡介', Path: '/about/introduction' },
    { Value: '中心任務', Path: '/about/mission' },
    { Value: '組織分工', Path: '/about/division' },
    { Value: '聯絡我們', Path: '/about/contact' },
])
</script>
<template>
    <div>
        <UserPage>
            <div class="flex w-full">
                <LeftOptions :OptionsList="OptionsList" class="w-1/3" />
                <div class="w-full flex flex-wrap">
                    <Breadcrumb :-breadcrumb-list="['認識我們', router.currentRoute.value.meta.title]" class="w-full">
                    </Breadcrumb>
                    <!-- <Search class="w-full"></Search> -->
                    <Calendar v-if="router.currentRoute.value.path === '/about/introduction'" />
                    <Organization v-if="router.currentRoute.value.path === '/about/mission'" />
                    <Logo v-if="router.currentRoute.value.path === '/about/division'" />
                    <Contact v-if="router.currentRoute.value.path === '/about/contact'"></Contact>
                </div>
            </div>
        </UserPage>
    </div>
</template>