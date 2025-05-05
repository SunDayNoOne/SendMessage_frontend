<template>
    <div class="menu-containeer">
        <MenuItem title-item="In Box" path-item="/InBoxPage"></MenuItem>
        <MenuItem title-item="Sent" path-item="/SentPage"></MenuItem>
    </div>
</template>

<script setup>
import MenuItem from './FunctionalItems/MenuItem.vue';
</script>

<style lang="scss">
.menu-containeer {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 90%;
    height: 60%;

    border-radius: 15px;

    margin: 0px 0px 0px 4%;

    background-color: #e6e5e5;
}
</style>