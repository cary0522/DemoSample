<script setup>
import UserPage from '@/components/MasterPageUser.vue'
import Card from '../BaseComponents/Card.vue';

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
            if (res.status == 200) {
                PageData.TotalCount = res.data.TotalCount;
                PageData.MaxPage = res.data.MaxPage;
                PageData.DataList = res.data.DataList;
            }
        },
        (err) => {
            ApiHelper.ProcessErrMsg(err);
        }
    );
}

onMounted(() => {
    GetPageData();
});
</script>
<template>
    <div>
        <div v-for="team in PageData.DataList">
            <Card :title="team.title" :content="team.content" :img="team.img" :link="team.link"></Card>
        </div>
    </div>
</template>