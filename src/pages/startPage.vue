<script setup>
import Logo from '@/components/logos/Logo.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="main_containeer">
        <Logo class="logo" />
        <div class="login_containeer">
            <div class="text_containeer">
                <h1>SendMessage</h1>
                <p>Service for the corporation mail</p>
            </div>
            <RouterLink to="/login" class="button-link_login"><button class="button">Login</button></RouterLink>
            <p>Don't have account yet? Registratuion <RouterLink to="/reg" class="reg_link">here.</RouterLink></p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.main_containeer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 100%;
    gap: 20px;

    .logo {
        width: 512px;
        height: 512px;
    }

    .login_containeer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(226, 226, 226, 0.849);
        border-radius: 30px;
        width: 50%;
        height: 30%;


        .text_containeer {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: "Roboto";
            color: #231F20;
            font-style: italic;
            
            h1 {
                font-weight: 600;
                font-size: 4.3em;
                margin-top: 0;
                margin-bottom: 0;
            }

            p {
                margin-top: 0;
                margin-bottom: 0;
                font-size: 1.8em;
            }
        }

        .button-link_login {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 60%;
            height: 15%;
            margin-top: 0;
            text-decoration: none;
            margin-top: 15px;

            .button {
                font-family: "Roboto";
                font-style: italic;
                font-weight: 300;
                font-size: 1em;
                width: 100%;
                height: 100%;
                border: none;
                background-color: #FF977A;
                border-radius: 15px;
                transition-property: opacity;
                transition-duration: 0.3s;

                &:hover{
                    opacity: 60%;
                }
            }
        }

        p {
            font-family: "Roboto";
            font-style: italic;
            margin-top: 10px;

            .reg_link {
                color: #FF977A;
                transition-property: opacity;
                transition-duration: 0.3s;

                &:hover{
                    opacity: 60%;
                }
            }
        }
    }
}
</style>