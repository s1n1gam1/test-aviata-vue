<template>
    <div class="filter">
        <p class="filter__title" v-if="title" v-html="title"></p>

        <div class="filter__list" v-if="list">
            <checkbox v-for="(item, index) in list" :key="index" :text="item.text" />
        </div>
    </div>
</template>

<script>
    export default {
        name:'FilterComponent',
        props:{
            title:{
                type:String,
                required:false,
                default:'',
            },
            list:{
                type:Array,
                required:false,
                default:()=>[],
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>