/<template>
    <div class="h-screen w-screen flex items-center justify-center bg-slate-100">
        <div class="flex items-center  h-3/4 w-7/12 border-2 border-grey divide-x divide-solid rounded-xl bg-white">
            <!-- justify-around -->
            <div class="flex items-center justify-center h-full w-2/5 ">
                <!-- border-2 -->
                <img class="h-40 w-40" src="../assets/user.png" alt="UserPng">
            </div>
            <div class="flex flex-col items-center justify-center h-full w-3/5">
                <!-- border-sky-950 border-2 -->
                <h2 class="p-2 font-semibold">Member LogIn</h2>
                <input class="border-2 bg-slate-200 p-3 m-4 rounded-3xl pl-5" type="text" name="username" id="Username" placeholder="Enter Username">
                <input class="border-2 bg-slate-200 p-3 mb-4 rounded-3xl pl-5" type="password" name="password" id="password" placeholder="Enter Password">
                <button class="border-2 bg-green-500 border-slate-700 px-14 py-2 rounded-3xl font-medium text-white hover:text-black hover:bg-white hover:border-green-500 hover:font-semibold" @click="checkUser()" >Login</button>
                <router-link class=" font-thin text-xs mt-2 text-slate-600 underline hover:text-green-700" to="/signup">Create your Account</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/router';

    export default {
        name: 'LogIn',
        components: {

        },
        data() {
            return {

            }
        },
        methods: {
            checkUser() {
                console.log("Check User")
                router.push('/home');
            }
        }
    }
</script>