<template>
    <div class="card">

        <div class="card__info">
            
            <div class="card__path">

                <div class="card__carrier">
                    <img src="https://aviata.kz/static/airline-logos/80x80/KC.png" alt="" class="card__carrier-icon">
                    <p class="card__carrier-text">Air Astana</p>
                </div>

                <div class="card__date">
                    <p class="card__date-day">25 ноя, вс</p>
                    <p class="card__date-hour">23:25</p>
                </div>

                <!-- TODO: make as component -->
                <div class="path">
                    <div class="path__header">

                        <div class="path__city path__city_from">ALA</div>

                        <div class="path__hours">4 ч 20 м</div>

                        <div class="path__city path__city_to">TSE</div>

                    </div>
                    <div class="path__line">

                        <div class="path__line-dot"></div>
                        <div class="path__line-dot"></div>
                        <div class="path__line-dot"></div>

                    </div>

                    <div class="path__info">
                        <div class="path__info-text">через Шымкент, 1 ч 50 м</div>
                    </div>
                </div>
                <!-- component -->

                 <div class="card__date">
                    <p class="card__date-day">26 ноя, сб <span>+1</span></p>
                    <p class="card__date-hour">03:45</p>
                </div>

            </div>

            <div class="card__links">
                <p class="actiontext">Детали перелета</p>
                <p class="actiontext">Условия тарифа</p>

                <div class="card__detail">
                    <img src="@/assets/img/icons/circle.svg" alt="" class="card__detail-icon">
                    <p class="card__detail-text">невозвратный</p>
                </div>
            </div>

        </div>

        <div class="card__cost">
            <p class="card__cost-info">590 240 ₸</p>

            <btn  text="Выбрать" size="large"/>

            <p class="grey">Цена за всех пассажиров</p>

            <div class="card__cost-btns">
                <p>Нет багажа</p>

                <btn color="blue" text="+ Добавить багаж" size="xs" />
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name:'Card',
        props:{
            data:{
                type:Object,
                required:false,
                default:()=>{}
            }
        },
        data(){
            return{

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>