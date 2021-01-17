<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="header">

                    <div class="header__logo">
                        <img src="https://aviata.kz/static/images/new/aviata-header-logo.png" alt="" class="header__logo-icon">
                    </div>

                    <div class="header__center">
                        <p class="header__title">Поиск и бронирование билетов</p>

                        <breadcrumb :list="list" />
                    </div>

                    <div class="header__contacts">
                        <a href="tel:+77272255055" class="header__link">+7 (727) <span>22-55-055</span> </a>
                        <a href="tel:+77010653333" class="header__link">+7 (701) 065-33-33</a>
                        <a href="mailto:help@aviata.kz" class="header__link">help@aviata.kz</a>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import Breadcrumb from '../ui/Breadcrumb'

    export default {
        name:'AppHeader',
        components:{
            Breadcrumb,
        },
        data(){
            return {
                list:[
                    {
                        url:'#',
                        title:'Выбор варианта',
                    },
                    {
                        url:'#',
                        title:'Пассажиры',
                    },
                    {
                        url:'#',
                        title:'Способ оплаты',
                    },
                    {
                        url:'#',
                        title:'Подтверждение',
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>