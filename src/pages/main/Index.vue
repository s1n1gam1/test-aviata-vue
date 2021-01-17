<template>
    <div class="mainpage">

        <div class="container">
            <div class="row">
                <div class="col-12">

                    <div class="mainpage__search">
                        <search />
                    </div>

                    <div class="mainpage__links">
                        <btn :icon="require('@/assets/img/icons/alarm.svg')" text="Отслеживать изменения цен" size="small" color="yellow" />
                        <btn :icon="require('@/assets/img/icons/data.svg')" text="Посмотреть цены на соседние даты (+- 3дня)" size="small" color="yellow" />
                    </div>

                    <div class="mainpage__content">

                        <div class="container">
                            <div class="row">
                                <div class="col-3 flex-row-start">
                                    <filter-component v-for="(filter, index) in filters" :title="filter.title" :list="filter.list" :key="index" />

                                    <p class="actiontext">Сбросить все фильтры</p>
                                </div>

                                <div class="col-9">

                                    <div class="mainpage__content-list">
                                        <card />
                                        <card />
                                        <card />
                                        <card />

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import Search from '../../components/common/Search'
    import FilterComponent from '../../components/common/Filter'
    import Card from '../../components/common/Card'

    export default {
        name:'Mainpage',
        components:{
            Search,
            FilterComponent,
            Card,
        },
        data(){
            return{
                filters:[
                    {
                        title:'Опции тарифа ',
                        list:[
                            {
                                text:'Только прямые',
                                value:'direct',
                            },
                            {
                                text:'Только с багажом',
                                value:'luggage',
                            },
                            {
                                text:'Только возвратные',
                                value:'returned',
                            },
                        ]
                    },
                    {
                        title:'Авиакомпании',
                        list:[
                            {
                                text:'Все',
                                value:'',
                            },
                            {
                                text:'Air Astana',
                                value:'',
                            },
                            {
                                text:'Fly Arystan',
                                value:'',
                            },
                            {
                                text:'SCAT Airlines',
                                value:'',
                            },
                            {
                                text:'Lufthansa',
                                value:'',
                            },
                            {
                                text:'Turkish Airlines',
                                value:'',
                            },
                            {
                                text:'China Southern Air',
                                value:'',
                            },
                        ]
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>