<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import UserPage from '@/components/MasterPageUser.vue'
import LeftOptions from '@/components/BaseComponents/LeftOptions.vue'
import Search from '@/components/BaseComponents/Search.vue'
import Schedule from '@/components/CompetitionPage/Schedule.vue'
import File from '@/components/CompetitionPage/File.vue'
import ExcellentInstructor from '@/components/CompetitionPage/ExcellentInstructor.vue'
import Award from '@/components/CompetitionPage/Award.vue'

const router = useRouter()

const OptionsList = ref([
    { Value: '泰雅', Path: '/competition/schedule' },
    { Value: '布農', Path: '/competition/file' },
    { Value: '排灣', Path: '/competition/excellentInstructor' },
    { Value: '太鲁閣', Path: '/competition/award' },
    { Value: '阿美', Path: '/competition/award' },
    { Value: '部落大學電子書', Path: '/competition/award' },
    { Value: '檔案下載', Path: 'https://drive.google.com/drive/folders/1yfgnTe6x0Ul4pMyvVxhj7lVwITUCYTtd?usp=drive_link' },
    { Value: '典藏文物', Path: 'https://docs.google.com/spreadsheets/d/13ccpNo4Jnsgkq2IpwbZQ-4xReCI0e8RZVMs643HT3P0/edit?usp=sharing' },
])
</script>
<template>
    <UserPage>
        <div class="flex">
            <LeftOptions :OptionsList="OptionsList" class="w-1/3" />
            <div class="w-full flex flex-wrap">
                <!-- <Search class="w-full" /> -->
                <Schedule v-if="router.currentRoute.value.path === '/competition/schedule'" class="w-full" />
                <File v-if="router.currentRoute.value.path === '/competition/file'" class="w-full" />
                <ExcellentInstructor v-if="router.currentRoute.value.path === '/competition/excellentInstructor'"
                    class="w-full" />
                <Award v-if="router.currentRoute.value.path === '/competition/award'" class="w-full" />
            </div>
        </div>
    </UserPage>
</template>