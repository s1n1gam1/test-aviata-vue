<template>
    <div class="checkbox" :class="checked?'checkbox_active':''">

        <input class="checkbox__input" type="checkbox" v-model="checked">
        
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
                checked:false,
            }
        },
        props:{
            text:{
                type:String,
                required:false,
                default:'',
            },
            approved:{
                type:Boolean,
                required:false,
                default:false,
            },
            value:{
                type:String,
                required:false,
                default:''
            }
        },
        mounted(){
            if(this.approved){
                this.checked = true
            }
        },
        watch:{
            checked(val){

                this.$emit('onchange',{
                    key:this.value,
                    value:val,
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>