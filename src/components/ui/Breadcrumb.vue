<template>
    <div class="breadcrumbs">

        <a v-for="(item,index) in list" :key="index"  :href="item.url" class="breadcrumbs__link">
            <div class="breadcrumbs__item" :class="index==activeIndex?'breadcrumbs__item_active':''">
                <p class="breadcrumbs__item-title" v-html="item.title"></p>
            </div>
        </a>

    </div>
</template>

<script>
    export default {
        name:'Breadcrumb',
        props:{
            list:{
                type:Array,
                required:false,
                default:()=>[]
            }
        },
        data(){
            return{
                activeIndex:0
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>