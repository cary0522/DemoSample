<script setup>
import { ref, onMounted, nextTick, watchEffect, watch } from 'vue'
import UserPage from '@/components/MasterPageUser.vue'
import LeftOptions from '@/components/BaseComponents/LeftOptions.vue'
import Search from '@/components/BaseComponents/Search.vue'
import Method from '@/components/Download/Method.vue'
import Stall from '@/components/Download/Stall.vue'
import Files from '@/components/BaseComponents/Files.vue'
import Breadcrumb from '@/components/BaseComponents/Breadcrumb.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
import FileJson from '@/assets/Files.json'
const FileList = ref([])

const OptionsList = ref([
    { Value: '政策法規', Path: '/download/rules' },
    { Value: '原教文件', Path: '/download/files' },
    { Value: '表單下載', Path: '/download/forms' },
    { Value: '申請資料', Path: '/download/data' },
])
const FileImg = ref()
const HeaderList = [
    { Key: "Title", Value: "檔案名稱" },
    {
        Key: "Content",
        Value: "檔案說明"
    },
];

watchEffect(() => {
    if (router.currentRoute.value.meta.title == '政策法規') {
        FileImg.value = "./images/icons/Meeting.png"
        FileList.value = FileJson.filter((item) => {
            if (item.Category == "政策法規") {
                return true
            }
        })
    } else if (router.currentRoute.value.meta.title == '原教文件') {
        FileImg.value = "./images/icons/library.png"
        FileList.value = FileJson.filter((item) => {
            if (item.Category == "原教文件") {
                return true
            }
        })
    } else if (router.currentRoute.value.meta.title == '表單下載') {
        FileImg.value = "./images/icons/FileFolders.png"
        FileList.value = FileJson.filter((item) => {
            if (item.Category == "表單下載") {
                return true
            }
        })
    } else if (router.currentRoute.value.meta.title == '申請資料') {
        FileImg.value = "./images/icons/teaching.png"
        FileList.value = FileJson.filter((item) => {
            if (item.Category == "申請資料") {
                return true
            }
        })
    }
})

</script>
<template>
    <UserPage>
        <div class="flex w-full">
            <LeftOptions :OptionsList="OptionsList" class="w-1/3" />
            <div class="flex flex-wrap w-full">
                <Breadcrumb :-breadcrumb-list="['資源專區', router.currentRoute.value.meta.title]" class="w-full">
                </Breadcrumb>
                <div class="w-full">
                    <Files v-model:FilesList="FileList" :-file-img="FileImg" :-header-list="HeaderList" />
                </div>
            </div>
        </div>
    </UserPage>
</template>