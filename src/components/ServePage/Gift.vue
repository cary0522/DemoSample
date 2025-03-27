<script setup>
import UserPage from '@/components/MasterPageUser.vue'
import { reactive, onMounted } from 'vue'
import ApiHelper from '@/helpers/ApiHelper.js'
import Pagination from '../BaseComponents/Pagination.vue';
import Table from '../BaseComponents/Table.vue';
import TableContent from '../BaseComponents/TableContent.vue';

// 搜尋資料
const SearchData = reactive({
    KeyWord: "",
    SortColumn: "",
    SortMethod: "ASC",
    Page: 1,
    Fetch: 20,
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
        "api/Gift/GetPageData",
        "POST",
        SearchData,
        (res) => {
            PageData.TotalCount = res.data.TotalCount;
            PageData.MaxPage = res.data.MaxPage;
            PageData.DataList = res.data.DataList;
        },
        (err) => {
            ApiHelper.ProcessErrMsg(err);
        }
    );
}

const TableHeader = [
    { Key: "Year", Value: "年度" },
    { Key: "Category", Value: "分類" },
    { Key: "Name", Value: "名稱" },
    { Key: "Data", Value: "資料說明" }
]

onMounted(() => {
    GetPageData();
});
</script>
<template>
    <div class="w-11/12 mx-auto">
        <Table :-get-page-data="GetPageData" :-table-header="TableHeader" v-model:TableData="PageData.DataList"></Table>
    </div>
    <Pagination :-get-page-data="GetPageData" :-total-page="PageData.MaxPage" v-model="SearchData.Page">
    </Pagination>
</template>