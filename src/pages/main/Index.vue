<template>
    <div class="mainpage">

        <div class="container">
            <div class="row">
                <div class="col-12">

                    <div class="mainpage__search">
                        <search />
                    </div>

                    <div class="mainpage__links">

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