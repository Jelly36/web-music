<template>
    <div class="home">
        <div class="top-content">
            <div class="bg">
                <div class="wrap-bg">
                    <div class="carousel">
                        <v-carousel hide-delimiters height="200">
                            <v-carousel-item
                                    v-for="(item,i) in items"
                                    :key="i"
                                    :src="item.src"
                            ></v-carousel-item>
                        </v-carousel>
                    </div>
                </div>

            </div>
            <div class="recently d-none d-lg-flex d-xl-none flex-lg-column">
                <p class="title-rec">最近播放</p>
                <ul class="recent-wrapper">
                    <li>
                        <div>
                            <img src="@/assets/images/songimg.png" alt="">
                        </div>
                        <div>
                            <span class="song-name">
                                My Secret Life
                            </span>
                            <span class="song-count">Leonard</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="@/assets/images/songimg.png" alt="">
                        </div>
                        <div>
                            <span class="song-name">
                                My Secret Life
                            </span>
                            <span class="song-count">Leonard</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="@/assets/images/songimg.png" alt="">
                        </div>
                        <div>
                            <span class="song-name">
                                My Secret Life
                            </span>
                            <span class="song-count">Leonard</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="@/assets/images/songimg.png" alt="">
                        </div>
                        <div>
                            <span class="song-name">
                                My Secret Life
                            </span>
                            <span class="song-count">Leonard</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="@/assets/images/songimg.png" alt="">
                        </div>
                        <div>
                            <span class="song-name">
                                My Secret Life
                            </span>
                            <span class="song-count">Leonard</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
// @ is an alias to /src


export default {
    name: 'Home',
    components: {},
    data () {
        return {
            items: [
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                },
            ],
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/style/index.scss";
    .home {
        background-color: $color-background-bb;

        .top-content {
            display: flex;
            flex-direction: row;
            height: 460px;
            .bg{
                height: 100%;
                flex: 3;
                .wrap-bg {
                    background: url('../assets/images/bg.png') no-repeat;
                    background-size: cover;
                    height: 70%;
                }
                .carousel{
                    width: 40%;
                    img{
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                }
            }


            .recently {
                flex: 1;
                p.title-rec{
                    color: #fff;
                    margin: 16px 0 10px 30px;
                    font-size: $font-size-medium-x;
                }
                .recent-wrapper {
                    color: #fff;
                    width: 80%;
                    margin: 0 auto;
                    padding:20px 30px;
                    max-height: 100%;
                    background-color: #1F1C2B;
                    border-radius: 10px;
                    li {
                        display: flex;
                        margin: 16px 0;
                        position: relative;
                        div:first-child{
                            img{
                                display: block;
                                width: 45px;
                                height: 45px;
                                margin-right: 16px;
                                border-radius: 6px;
                            }
                        }
                        div:last-child{
                            display: flex;
                            flex-direction: column;
                            .song-name {
                                font-size: $font-size-medium;
                            }

                            .song-count {
                                color: $color-text-g;
                                margin-top: 4px;
                                font-size: $font-size-small-ss;
                            }
                        }
                    }
                }
                .more{
                    cursor: pointer;
                    margin-top: 20px;
                    color: #8DC9DB;
                    width: 100%;
                    font-size: $font-size-medium;
                    transition: 0.3s linear;
                    &:hover{
                        color: $color-text-b;
                    }
                }
            }
        }

    }
</style>
