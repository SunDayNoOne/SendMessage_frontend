<template>
    <RouterLink class="item" :to="pathItem">
        {{props.titleItem}}
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';
const props = defineProps({
    titleItem: String,
    pathItem: String,
    stateItem: Boolean
})

const changeState = (path)=> {
     
}

</script>

<style lang="scss">
.item{
    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    font-style: italic;
    font-family: "Roboto";
    font-size: 1.3em;
    font-weight: 500;
    color: #231F20;

    margin-top: 3%;

    width: 90%;
    height: 8%;


    border: 3px solid #231F20;;
    border-radius: 10px;
}
</style>