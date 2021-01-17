<template>
    <button class="btn" :class="('btn_color_'+color) +' '+('btn_size_'+size) ">
        <img v-if="icon" :src="icon" alt="" class="btn__icon">
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
            size:{
                type:String,
                required:false,
                default:'normal',
            },
            icon:{
                type:Object,
                required:false,
                default:()=>{},
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>