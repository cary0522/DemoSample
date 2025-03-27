<script setup>
import { reactive, onMounted } from 'vue'
import ApiHelper from '@/helpers/ApiHelper.js'
import Table from '../BaseComponents/Table.vue';
import TableContent from '../BaseComponents/TableContent.vue';

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
        "api/Accommodation/GetPageData",
        "POST",
        SearchData,
        (res) => {
            PageData.TotalCount = res.data.TotalCount;
            PageData.MaxPage = res.data.MaxPage;
            PageData.DataList = res.data.DataList;
            console.log(PageData.DataList);
        },
        (err) => {
            ApiHelper.ProcessErrMsg(err);
        }
    );
}

const TableHeader = [
    { Key: "Category", Value: "分類" },
    { Key: "Area", Value: "行政區" },
    { Key: "Name", Value: "名稱" },
    { Key: "Address", Value: "地址" },
    { Key: "Phone", Value: "電話" },
]

onMounted(() => {
    GetPageData();
});
</script>
<template>
    <div class="w-11/12 mx-auto">
        <Table :-table-header="TableHeader" v-model:TableData="PageData.DataList" :-get-page-data="GetPageData"></Table>
    </div>
</template>