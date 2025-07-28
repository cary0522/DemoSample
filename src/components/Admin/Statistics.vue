<script setup>
import { ref, reactive, onMounted } from 'vue'
import MasterPageAdmin from '@/components/MasterPageAdmin.vue'
import Button from '../BaseComponents/Button.vue'
import AreaTitle from '../BaseComponents/AreaTitle.vue'
import Breadcrumb from '../BaseComponents/Breadcrumb.vue'
import Table from '../BaseComponents/Table.vue'
import SelectSearch from '../BaseComponents/SelectSearch.vue'
import ApiHelper from '@/helpers/ApiHelper.js'
import Swal from 'sweetalert2'
import { Page } from 'page-flip'

import ProductJson from '@/assets/Products.json'
// 搜尋資料
const SearchData = reactive({
  Category: '',
  Type: '',
  KeyWord: '',
  SortColumn: '',
  SortMethod: 'ASC',
  Page: 1,
  Fetch: 100
})
// 頁面資料
const PageData = reactive({
  TotalCount: 0,
  MaxPage: 0,
  DataList: []
})
const TableData = reactive([
  {
    Page: '首頁',
    ViewCount: 0
  },
  {
    Page: '中心簡介',
    ViewCount: 0
  },
  {
    Page: '中心任務',
    ViewCount: 0
  },
  {
    Page: '組織分工',
    ViewCount: 0
  },
  {
    Page: '聯絡我們',
    ViewCount: 0
  },
])
// 取得首頁點閱數
// function GetViewCountHome() {
//   ApiHelper.Axios(
//     '/api/News/1',
//     'GET',
//     null,
//     res => {
//       TableData[0].ViewCount = res.data.ViewCount
//     },
//     err => {
//       ApiHelper.ProcessErrMsg(err)
//     }
//   )
// }
// 取得首頁點閱數
// function GetViewCount() {
//   ApiHelper.Axios(
//     '/api/News/List',
//     'POST',
//     SearchData,
//     res => {
//       PageData.TotalCount = res.data.TotalCount
//       PageData.MaxPage = res.data.MaxPage
//       for (let data of TableData) {
//         res.data.DataList.map(item => {
//           if (item.Category === data.Page) {
//             data.ViewCount = item.ViewCount
//           }
//         })
//       }
//     },
//     err => {
//       ApiHelper.ProcessErrMsg(err)
//     }
//   )
// }
const TableHeader = [
  { Key: 'ID', Value: '產品編號' },
  { Key: 'Title', Value: '產品名稱' },
  { Key: 'Price', Value: '產品單價' },
  { Key: 'Purchased', Value: '採購數量' }
]


// onMounted(() => {
//   GetViewCountHome()
//   GetViewCount()
// })
</script>

<template>
  <MasterPageAdmin>
    <div class="wrap">
      <Breadcrumb :BreadcrumbList="['後台', '統計資訊']" class="mx-8"></Breadcrumb>
      <AreaTitle :title-content="'功能區'"></AreaTitle>
      <div class="w-4/5 mx-auto flex flex-wrap justify-between items-center">
        <!-- <SelectSearch></SelectSearch> -->
        <Button :-btn-text="'匯出'"></Button>
      </div>
      <div class="w-4/5 mx-auto">
        <Table :-table-header="TableHeader" v-model:TableData="ProductJson"></Table>
      </div>
    </div>
  </MasterPageAdmin>
</template>
