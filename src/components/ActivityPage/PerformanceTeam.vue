<script setup>
import { reactive, onMounted } from 'vue'
import ApiHelper from "@/helpers/ApiHelper";
import Card from '../BaseComponents/Card.vue';
import PhotoJson from '@/assets/Photo.json'

// 搜尋資料
const SearchData = reactive({
    KeyWord: "",
    SortColumn: "",
    SortMethod: "ASC",
    Page: 1,
    Fetch: 5,
    Identities: [],
});
// 頁面資料
const PageData = reactive({
    TotalCount: 0,
    MaxPage: 0,
    DataList: [],
});
// 取得頁面資料
function GetPageData() {
    ApiHelper.Axios(
        "api/Administration/GetPageData",
        "POST",
        SearchData,
        (res) => {
            PageData.TotalCount = res.data.TotalCount;
            PageData.MaxPage = res.data.MaxPage;
            PageData.DataList = res.data.DataList;
        },
        (err) => {
            PageData.DataList = PhotoJson;
            ApiHelper.ProcessErrMsg(err);
        }
    );
}
</script>
<template>
    <div class="flex flex-wrap justify-center">
        <div v-for="team in PhotoJson">
            <Card :title="team.title" :content="team.content" :img="team.img" :link="team.link"></Card>
        </div>
    </div>
</template>