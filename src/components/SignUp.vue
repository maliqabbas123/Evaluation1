<template>
    <div class="h-screen w-screen flex items-center justify-center bg-slate-100 ">
        <div
            class="flex flex-col items-center justify-center h-max w-5/12 border-2 border-grey divide-y divide-solid rounded-xl bg-white my-4 pt-4">
            <!-- justify-around -->
            <div class="flex items-center justify-center h-2/5 pb-4">
                <!-- border-2 -->
                <img class="h-20 w-20" src="../assets/user.png" alt="UserPng">
            </div>
            <div class="flex flex-col items-center pt-4 h-full ">
                <!-- border-sky-950 border-2 -->
                <h2 class="py-px font-semibold">SignUp</h2>
                <input class="border-2 bg-slate-200 p-3 m-4 rounded-3xl pl-5" type="text" name="username" id="Username"
                    placeholder="Create Username" v-model="form.name">
                <input class="border-2 bg-slate-200 p-3 mb-4 rounded-3xl pl-5" type="email" name="Email" id="Email"
                    placeholder="Enter Email" v-model="form.email">
                <input class="border-2 bg-slate-200 p-3 mb-4 rounded-3xl pl-5" type="password" name="password" id="password"
                    placeholder="Create Password" v-model="form.password">
                <input class="border-2 bg-slate-200 p-3 mb-4 rounded-3xl pl-5" type="password" name="Con-password"
                    id="Con-password" placeholder="Confirm Password" v-model="form.Newpassword">
                <button
                    class="border-2 bg-green-500 border-slate-700 px-14 py-2 my-1 rounded-3xl font-medium text-white hover:text-black hover:bg-white hover:border-green-500 hover:font-semibold"
                    @click="checkData()">SignUp</button>
                <router-link class=" font-thin text-xs mt-2 mb-8 text-slate-600 underline hover:text-green-700"
                    to="/">Already Have An Account? SignIn</router-link>
            </div>
            <div v-if="form.check === false" class="text-red-600 py-4">
                <p> Resolve the errors </p>
                <li v-for="(x, index) in form.error" :key="index">{{ x }}</li>
            </div>
        </div>
    </div>
</template>

<script>

import router from '../router/index.js';


export default {
    name: 'SignUp',
    data() {
        return {
            form: {
                name: '',
                password: '',
                Newpassword: '',
                email: '',
                error: [],
                special: '`~!@#$%^&*()_-+=|[]{}""/;:?><.,',
                checkUser: false,
                checkPass: false,
                checkConPass: false,
                checkEmail: false,
                check: true
            }

        }
    },
    methods: {
        checkUserCred() {
            if (this.form.name.indexOf(' ') === -1) {
                console.log("In Space");
                console.log("Next Con ", this.form.name.includes(this.form.special));
                var i = 0;
                for (i = 0; i < this.form.special.length; i++) {
                    if (this.form.name.includes(this.form.special[i])) {
                        console.log("In Special");
                        this.form.checkUser = true;
                        break;
                    }
                }
                if (this.form.checkUser === false) {
                    this.form.error.push("UserName must contain at least one special character");
                    this.form.check = false;
                }
            }
            else {
                this.form.check = false;
                this.form.error.push("Username can not have space");
            }
        },
        checkPassCred() {
            if (this.form.password.length >= 8) {

                if (/[A-Z]/.test(this.form.password[0])) {
                    var i = 0;
                    for (i = 0; i < this.form.special.length; i++) {
                        if (this.form.password.includes(this.form.special[i])) {
                            console.log("In Special of Pass");
                            this.form.checkPass = true;
                            break;
                        }
                    }
                    if (this.form.checkPass === false) {
                        this.form.error.push("Password must contain at least one special character");
                        this.form.check = false;
                    }
                }
                else {
                    this.form.check = false;
                    this.form.error.push("password must start with a Capital Letter");

                }
            }
            else {
                this.form.check = false;
                this.form.error.push("password must be 8 atleast digits long ");
            }
        },
        checkConPassword() {
            if (this.form.password === this.form.Newpassword) {
                this.form.checkConPass = true;
            }
            else {
                this.form.check = false;
                this.form.error.push("Confrim Password does not match Password");

            }
        },
        checkEmailCred() {
            if (this.form.email.indexOf('@') != -1 && this.form.email.includes(".com") == true) {
                this.form.checkEmail = true;
            }
            else {
                this.form.check = false;
                this.form.error.push("Email missing format");
            }
        },
        checkData() {
            console.log("In function ", this.form);
            this.checkUserCred();
            this.checkPassCred();
            this.checkConPassword();
            this.checkEmailCred();

            if (this.form.checkUser === true && this.form.checkPass === true && this.form.checkConPass === true && this.form.checkEmail === true) {
                localStorage.setItem("Username", this.form.name);
                localStorage.setItem("Password", this.form.password);
                console.log("User Registered");
                alert("User Registered");
                router.push('/');
            }
            else {
                console.log("Error[] ", this.form.error);
                console.log("Check jis se div", this.form.check)
            }

        }

    }


}
</script>