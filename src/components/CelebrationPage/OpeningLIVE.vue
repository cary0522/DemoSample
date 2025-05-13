<script setup>
import { ref } from 'vue'
import Card from '../BaseComponents/Card.vue'
import Table from '../BaseComponents/Table.vue'
import PhotoJson from '@/assets/Photo.json'
const SchoolValue = ref('羅浮高中')
const YearValue = ref('112')

import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

const YearList = [{ key: '107', value: '107' }, { key: '108', value: '108' }, { key: '109', value: '109' }, { key: '110', value: '110' }, { key: '111', value: '111' }, { key: '112', value: '112' }]
//   { type: '計畫名稱', items: ['101', '102', '103'] },
//   { type: '策略', items: ['101', '102', '103'] }
const SearchList = [
    { key: '羅浮高中', value: '羅浮高中' },
    { key: '三民國小', value: '三民國小' },
    { key: '介壽國小', value: '介壽國小' },
    { key: '介壽國中', value: '介壽國中' },
    { key: '霞雲國小', value: '霞雲國小' },
    { key: '義盛國小', value: '義盛國小' },
    { key: '羅浮國小', value: '羅浮國小' },
    { key: '奎輝國小', value: '奎輝國小' },
    { key: '長興國小', value: '長興國小' },
    { key: '高義國小', value: '高義國小' },
    { key: '三光國小', value: '三光國小' },
    { key: '巴崚國小', value: '巴崚國小' },
    { key: '光華國小', value: '光華國小' }
]
const HeaderList = [
    { Key: 'Data', Value: '日期' },
    { Key: 'Title', Value: '標題' }
]

const TableData = ref([])

</script>
<template>
    <div class="w-full ">
        <div class="flex flex-wrap justify-start items-center p-4 w-full">
            <v-select v-model="SchoolValue" :items="SearchList" item-title="key" item-value="value" variant="underlined"
                max-width="150" class="mx-2 mt-2" placeholder="學校"></v-select>
            <v-select v-model="YearValue" :items="YearList" item-title="key" item-value="value" variant="underlined"
                max-width="150" class="mx-2 mt-2" placeholder="年級"></v-select>
        </div>
        <div>
            <h1 class="text-2xl font-black m-4">{{ t(`${SchoolValue}`) }} {{ YearValue }} {{ t('年') }}
            </h1>
            <div class="my-2">
                <h2 class="text-xl font-black m-4"> {{ t('年度計畫') }}</h2>
                <Table :-table-header="HeaderList" v-model:TableData="TableData" class="mx-4"></Table>
            </div>
            <div class="my-2">
                <h2 class="text-xl font-black m-4"> {{ t('成果計畫') }}</h2>
                <div class="flex flex-wrap justify-start">
                    <div v-for="team in PhotoJson">
                        <Card :title="team.title" :content="team.content" :img="team.img" :link="team.link"></Card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>