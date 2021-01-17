<template>
    <div class="search">

        <div class="search__header">

            <div class="search__mode" :class="type=='two-directions'?'search__mode_active':''" @click="changeMode('two-directions')">
                <p>туда и обратно</p>
            </div>

            <div class="search__mode" :class="type=='one-direction'?'search__mode_active':''"  @click="changeMode('one-direction')">
                <p>в одну сторону</p>
            </div>


        </div>

        <div class="search__form">

            <cinput value="Алматы, Казахстан" />
            <cinput value="Астана, Казахстан" />

            <cinput value="2018-11-08" type="date"/>
            <cinput value="2018-11-16" type="date"/>

            <cinput value="Молодежный тариф" />

            <btn text="Найти" />

        </div>

    </div>
</template>

<script>
    export default {
        name:'Search',
        data(){
            return{
                type:'two-directions',
            }
        },
        methods:{
            changeMode(type){
                this.type = type
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>