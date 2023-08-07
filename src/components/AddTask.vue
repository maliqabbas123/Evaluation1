<template>
    <div class="flex flex-col items-center justify-center">
    <h2>AddTask</h2>
    <input class="border-2 bg-slate-200 p-3 m-4 rounded-3xl pl-5" type="text" name="title" id="title" 
    placeholder="Add Task Title" v-model="this.title">
    <input class="border-2 bg-slate-200 p-3 m-4 rounded-3xl pl-5" type="text" name="disc" id="disc" 
    placeholder="Add Discription" v-model="this.discription">
    <button class="border-green-600 bg-green-600 text-white rounded-2xl px-4 py-2" @click="addData()">Add</button>
    <!-- <p>Ane laga {{ data }}</p> -->
    
</div>
    
    
</template>

<script>
import { mapActions } from 'vuex';
// import store from '../store/index.js'

    export default {
    name: 'SignUp',
    data() {
        return {
           
            title: '',
            discription: ''

        }
    },
    methods:
    {

        ...mapActions({updateData:'addData'}),
        addData(){
            var obj = {
                Title: this.title,
                Disc: this.discription
            }
            this.updateData(obj);
        }
        
        
    },
    // computed: {
    //     ...mapGetters(
    //         { data : 'showData' })
    // }
}
</script>