<template>
    <div class="checkbox">

        <input class="checkbox__input" type="checkbox">
        
        <div class="checkbox__approve">
            <img src="@/assets/img/icons/approve.svg" alt="" class="checkbox__approve-icon">
        </div>

        <p class="checkbox__text" v-if="text" v-html="text"></p>


    </div>
</template>

<script>
    export default {
        name:'Checkbox',
        data(){
            return{

            }
        },
        props:{
            text:{
                type:String,
                required:false,
                default:'',
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>