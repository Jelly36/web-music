<template>
    <div class="video-wrap">
        <div class="title">
            <span>大家都在看</span>
        </div>
        <v-card
                class="mx-auto"
                max-width="500"
        >


            <v-container fluid>
                <v-row dense>
                    <v-col
                            v-for="card in cards"
                            :key="card.title"
                            :cols="card.flex"
                    >
                        <v-card>
                            <v-img
                                    :src="card.src"
                                    class="white--text align-end"
                                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                    height="160px"
                            >
                                <v-card-title v-text="card.title"></v-card-title>
                            </v-img>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </div>
</template>
<script>
    export default {
        data: () => ({
            cards: [
                { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6 },
                { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
                { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
                { title: 'Best hehei', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
            ],
        }),
    }

</script>
<style lang="scss" scoped>
    @import "@/assets/style/index.scss";

    .video-wrap {
        padding-top: 30px;

        .title {
            height: 49px;
            line-height: 49px;

            span {
                display: block;
                color: #fff;
                font-size: $font-size-medium-x;
            }
        }
    }
</style>
