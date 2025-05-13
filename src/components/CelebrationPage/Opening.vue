<script setup>
import UserPage from '@/components/MasterPageUser.vue'
import AwardProcess from '@/components/CelebrationPage/AwardProcess.vue'
import Card from '../BaseComponents/Card.vue';

import AlbumJson from '@/assets/Album.json' 
</script>
<template>
    <div class="flex flex-wrap justify-center">
        <div v-for="team in AlbumJson">
            <Card :title="team.title" :content="team.content" :img="team.img" :link="team.link"></Card>
        </div>
    </div>
</template>