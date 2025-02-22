<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Logo from '@/components/logos/Logo.vue';
import vkIcon from '@/components/icons/about_icons/vkIcon.vue';
import GitHubIcon from '@/components/icons/about_icons/GitHubIcon.vue';
import TelegramIcon from '@/components/icons/about_icons/TelegramIcon.vue';
import GmailIcon from '@/components/icons/about_icons/GmailIcon.vue';
</script>

<template>
    <div class="loginPage_containeer">
        <div class="login_containeer">
            <div class="form_containeer">
                <div class="form-login_containeer">
                    <label for="login">Login</label>
                    <input type="text" class="input_login" name="login" placeholder="Login">
                </div>
                <div class="form-password_containeer">
                    <label for="password">Password</label>
                    <input type="password" class="input_password" name="password" placeholder="Password">
                </div>
                <div class="login-button_containeer">
                    <RouterLink to="/main" class="link-login"><button class="Login_button">Login</button></RouterLink>
                    <RouterLink to="/reg" class="link-singin"><button class="SigIn_button">Sing In</button></RouterLink>
                </div>
            </div>
            <div class="about_containeer">
                <router-link to="/" class="goBackContaineer"><button class="goBackButton">Go Back</button></router-link>
                <div class="header-about_containeer">
                    <Logo style="width: 128px; height: 128px;" />
                    <h1>SendMessage</h1>
                </div>
                <div class="description-about_containeer">
                    <p>
                        Our project focuses on setting up a corporate email system designed for seamless communication
                        and professional branding. The goal is to provide a secure, reliable, and efficient email
                        service tailored to business needs.
                    </p>
                </div>
                <div class="contact-about_containeer">
                    <h1>Our Contacts</h1>
                    <hr style="width: 90%;">
                    <div class="icons_contact-about_containeer">
                        <vkIcon />
                        <GitHubIcon />
                        <TelegramIcon/>
                        <GmailIcon />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.loginPage_containeer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #FF977A;

    .login_containeer {
        display: flex;
        flex-direction: row;
        width: 80%;
        height: 80%;



        .form_containeer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 30%;
            background-color: #231F20;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
            font-family: "Roboto";
            font-style: italic;
            color: #e6e5e5;
            gap: 20px;

            .form-login_containeer {
                display: flex;
                flex-direction: column;
                width: 80%;
                height: 10%;
                gap: 10px;

                label {
                    margin-left: 5px;
                }

                input {
                    font-family: "Roboto";
                    font-style: italic;
                    padding-left: 10px;
                    height: 100%;
                    border-radius: 10px;
                    border: solid 3px #FF977A;
                    transition-property: border-radius, border;
                    transition-duration: 0.5s, 0.5s;

                    &:focus {
                        border-radius: 8px;
                        border: solid 3px #e6e5e5;
                        outline: none;
                    }

                }
            }

            .form-password_containeer {
                display: flex;
                flex-direction: column;
                width: 80%;
                height: 10%;
                gap: 10px;

                label {
                    margin-left: 5px;
                }

                input {
                    font-family: "Roboto";
                    font-style: italic;
                    padding-left: 10px;
                    height: 100%;
                    border-radius: 10px;
                    border: solid 3px #FF977A;
                    transition-property: border-radius, border;
                    transition-duration: 0.5s, 0.5s;

                    &:focus {
                        border-radius: 8px;
                        border: solid 3px #e6e5e5;
                        outline: none;
                    }


                }
            }

            .login-button_containeer {
                display: flex;
                flex-direction: row;
                margin-top: 20px;
                width: 80%;
                height: 7%;
                gap: 10px;

                a {
                    width: 50%;
                    height: 100%;
                    transition-property: width;
                    transition-duration: 0.6s;

                    &:hover {
                        width: 90%;
                    }

                    button {
                        font-family: "Roboto";
                        font-style: italic;
                        font-weight: 500;
                        font-size: 1em;
                        width: 100%;
                        height: 100%;
                        border: none;
                        border-radius: 10px;
                        transition-property: opacity;
                        transition-duration: 1s;

                        &:hover {
                            opacity: 80%;
                            cursor: pointer;
                        }
                    }

                    .Login_button {
                        background-color: #FF977A;
                    }
                }

            }

        }

        .about_containeer {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: "Roboto";
            font-style: italic;
            height: 100%;
            width: 70%;
            background-color: #e6e5e5;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;

            .goBackContaineer{
                    display: flex;
                    align-self: flex-end;
                    margin-top: 30px;
                    margin-right: 30px;
                    width: 10%;
                    height: 5%;
                    text-decoration: none;
                    transition-property: width, opacity;
                    transition-duration: 0.5s, 0.5s;

                    &:hover{
                            width: 11%;
                            opacity: 70%;
                        }

                    .goBackButton{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-family: 'Roboto';
                        font-style: italic;
                        font-size: 1em;
                        width: 100%;
                        height: 100%;
                        border: none;
                        border-radius: 10px;
                        background-color:#FF977A ;
                        


                    }
                }

            .header-about_containeer {
                margin-top: 3%;
                width: 100%;
                height: 25%;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                font-size: 1.8em;
                color: #231F20;

            }

            .description-about_containeer{
                width: 70%;
                height: 15%;
                margin-top: -2%;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                font-size: 1.4em;
            }

            .contact-about_containeer{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-top: 3%;
                width: 100%;
                height: 15%;

                .icons_contact-about_containeer{
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    justify-content: center;
                    align-items: center;
                    gap: 30px;

                    a{
                        margin-top: 20px;
                        width: 64px;
                        height: 64px;
                        opacity: 90%;
                        transition-property: opacity;
                        transition-duration: 0.3s;

                        &:hover{
                            opacity: 50%;
                            
                        }
                    }
                }
            }

        }


    }
}
</style>