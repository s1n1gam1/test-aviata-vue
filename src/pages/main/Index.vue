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

                    </div>

                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import Search from '../../components/common/Search'

    export default {
        name:'Mainpage',
        components:{
            Search,
        }
    }
</script>

<style lang="scss" scoped>

</style>