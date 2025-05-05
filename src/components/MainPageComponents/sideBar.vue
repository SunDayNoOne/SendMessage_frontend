<template>
    <div class="sidebar-containeer">
        <div class="work-page-logo-containeer">
            <Logo class="Logo"></Logo>
            <h1>SendMessage</h1>
        </div>
        <Menu>
        </Menu>
    </div>
</template>

<script setup>
import Menu from './Menu.vue';
import sideBar from '@/components/MainPageComponents/sideBar.vue';
import Logo from '@/components/logos/Logo.vue';
</script>

<style lang="scss">
.sidebar-containeer {
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 100%;
    gap: 20px;
    background-color: #231F20;


    .work-page-logo-containeer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        width: 90%;
        height: 10%;

        font-family: "Roboto";
        font-weight: 700;
        font-style: italic;
        
        margin: 4% 0% 0% 4%;

        border-radius: 15px;

        background-color: #e6e5e5;
        color: #231F20;

        .Logo {
            width: 128px;
            height: 128px;
        }

       
    }
}
</style>