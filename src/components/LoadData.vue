<template>
    <h1>Load Data</h1>
    <p>{{ data }}</p>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(
            { data : 'showData' })
    }
}

</script>