<template>
    <div class="flex w-screen h-24 bg-green-600 justify-between items-center border-b-2 border-green-700" >
        <div class="ml-6">   <!-- logo -->
            <img class="h-16 w-16" src="../assets/user.png" alt="UserPng">
        </div>
        <div class="flex justify-center">
            <router-link to="/home/load" class=" text-white text-xl px-4 hover:underline">Home</router-link>
            <router-link to="/home/AddTask" class=" text-white text-xl px-4 hover:underline">Add Task</router-link> 
        </div>
        <div class="mr-6">
            <Button class="bg-white p-4 rounded-2xl font-medium" >LogOut</Button>
        </div>
    </div>
</template>