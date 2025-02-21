<script setup>
import { RouterLink, RouterView } from 'vue-router';
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
                <button class="Login_button">Login</button>
                <button class="SigIn_button">Sing In</button>
            </div>
        </div>
        <div class="about_containeer">

        </div>
    </div>
</div>
</template>

<style scoped lang="scss">
.loginPage_containeer{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #FF977A;
    
    .login_containeer{
        display: flex;
        flex-direction: row;
        width: 80%;
        height: 80%;


        
        .form_containeer{
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

            .form-login_containeer{
                display: flex;
                flex-direction: column;
                width: 80%;
                height: 10%;
                gap: 10px;

                label{
                    margin-left: 5px;
                }
            
                input{
                    font-family: "Roboto";
                    font-style: italic;
                    padding-left: 10px;
                    height: 100%;
                    border-radius: 10px;
                    border: solid 3px #FF977A;
                    transition-property: border-radius, border;
                    transition-duration: 0.5s, 0.5s;
                    
                    &:focus{
                        border-radius: 8px;
                        border: solid 3px #e6e5e5;
                        outline: none;
                    }

                }
            }

            .form-password_containeer{
                display: flex;
                flex-direction: column;
                width: 80%;
                height: 10%;
                gap: 10px;

                label{
                    margin-left: 5px;
                }
            
                input{
                    font-family: "Roboto";
                    font-style: italic;
                    padding-left: 10px;
                    height: 100%;
                    border-radius: 10px;
                    border: solid 3px #FF977A;
                    transition-property: border-radius, border;
                    transition-duration: 0.5s, 0.5s;
                    
                    &:focus{
                        border-radius: 8px;
                        border: solid 3px #e6e5e5;
                        outline: none;
                    }
                    

                }
            }

            .login-button_containeer{
                display: flex;
                flex-direction: row;
                margin-top: 20px;
                width: 80%;
                height: 7%;
                gap: 10px;

                button{
                    font-family: "Roboto";
                    font-style: italic;
                    font-weight: 500;
                    font-size: 1em;
                    width: 50%;
                    border: none;
                    border-radius: 10px;
                    transition-property: width;
                    transition-duration: 0.6s;

                    &:hover{
                        width: 100%;
                    }
                    
                }

                .Login_button{
                    background-color: #FF977A;
                }

            }

        }

        .about_containeer{
            display: flex;
            height: 100%;
            width: 70%;
            background-color: #e6e5e5;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
        }


    }
}
</style>