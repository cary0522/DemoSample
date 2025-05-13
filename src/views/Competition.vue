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
import Breadcrumb from '@/components/BaseComponents/Breadcrumb.vue'
import Table from '@/components/BaseComponents/Table.vue'
import Pagination from '@/components/BaseComponents/Pagination.vue'
import TeachersJson from '@/assets/Teachers.json'

const router = useRouter()

const OptionsList = ref([
    { Value: '泰雅', Path: '/resources/atayal' },
    { Value: '布農', Path: '/resources/bunun' },
    { Value: '排灣', Path: '/resources/paiwan' },
    { Value: '太鲁閣', Path: '/resources/taroko' },
    { Value: '阿美', Path: '/resources/amis' },
    { Value: '部落大學電子書', Path: 'https://ebook.cdway.com.tw/tyc/index.asp' },
    { Value: '檔案下載', Path: 'https://drive.google.com/drive/folders/1yfgnTe6x0Ul4pMyvVxhj7lVwITUCYTtd?usp=drive_link' },
    { Value: '典藏文物', Path: 'https://docs.google.com/spreadsheets/d/13ccpNo4Jnsgkq2IpwbZQ-4xReCI0e8RZVMs643HT3P0/edit?usp=sharing' },
    { Value: '全市族語師資查詢', Path: '/resources/teachers' },
])

// 表格欄位
const TableHeader = [
    {
        Key: "Language",
        Value: "語系",
    },
    {
        Key: "Name",
        Value: "姓名",
    },
    {
        Key: "Identity",
        Value: "身分別",
    },
    {
        Key: "Main elementary schools",
        Value: "主聘國小",
    },
    {
        Key: "Phone",
        Value: "主聘國小電話",
    },
    {
        Key: "Area",
        Value: "服務區域",
    },
    {
        Key: "Lecture Records",
        Value: "授課記錄",
    },
];

const TableData = ref([])
onMounted(() => {
    TableData.value = TeachersJson
})
</script>
<template>
    <UserPage>
        <div class="flex w-full">
            <LeftOptions :OptionsList="OptionsList" class="w-1/3" />
            <div class="w-full flex flex-wrap">
                <Breadcrumb :-breadcrumb-list="['教材資源', router.currentRoute.value.meta.title]" class="w-full">
                </Breadcrumb>
                <div v-if="router.currentRoute.value.path == '/resources/teachers'">
                    <Search></Search>
                    <Table :-table-header="TableHeader" v-model:TableData="TableData"></Table>
                    <!-- <Pagination></Pagination> -->
                </div>
                <div v-else style="position:relative;padding-top:max(60%,324px);width:100%;height:0;" class="my-2">
                    <iframe style="position:absolute;border:none;width:100%;height:100%;left:0;top:0;"
                        src="https://online.fliphtml5.com/hluzz/nhly/" seamless="seamless" scrolling="no"
                        frameborder="0" allowtransparency="true" allowfullscreen="true"></iframe>
                </div>
            </div>
        </div>
    </UserPage>
</template>