<template>
    <div class="work-page-containeer">
        <sideBar>

        </sideBar>
        <RouterView/>
    </div>
</template>

<script setup>
import sideBar from '@/components/MainPageComponents/sideBar.vue';
import Logo from '@/components/logos/Logo.vue';
import { RouterView } from 'vue-router';
</script>

<style lang="scss">
.work-page-containeer{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;

    background-color: #FF977A;

}
</style>