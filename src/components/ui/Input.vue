<template>
    <div class="input">

        <input v-if="type=='text'" type="text" class="input__element input__text" :value="value">
        
        <input v-else-if="type=='date'" type="date" class="input__element input__date" :value="value">

        <select v-else-if="type=='select'" class="input__element input__select">
            <option value=""></option>
        </select>

    </div>
</template>

<script>
    export default {
        name:'Input',
        props:{
            type:{
                type:String,
                required:false,
                default:'text'
            },
            placeholder:{
                type:String,
                required:false,
                default:'Text'
            },
            value:{
                type:String,
                required:false,
                default:'Text'
            }

        }
    }
</script>

<style lang="scss" scoped>

</style>