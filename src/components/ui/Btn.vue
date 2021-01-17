<template>
    <button class="btn" :class="color=='primary'?'btn_color_primary':''">
        <p class="btn__text" v-html="text"></p>
    </button>
</template>

<script>
    export default {
        name:'Btn',
        props:{
            text:{
                type:String,
                required:false,
                default:"Text"
            },
            color:{
                type:String,
                required:false,
                default:"primary"
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>