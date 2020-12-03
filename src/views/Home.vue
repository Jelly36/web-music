<template>
    <div class="home">
        <div class="top-content">
            <div class="bg">
                <Search></Search>
                <div class="carousel">
                    <v-carousel hide-delimiters height="100%">
                        <v-carousel-item
                                v-for="(item,i) in items"
                                :key="i"
                                :src="item.src"
                        ></v-carousel-item>
                    </v-carousel>
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
                <div class="more d-flex justify-center">查看更多</div>
            </div>
        </div>
        <div class="content">
            <RecommendSheet></RecommendSheet>
            <RecommendSinger></RecommendSinger>
            <div class="wrap d-flex flex-row">
                <HotSongList></HotSongList>
            </div>
        </div>
    </div>

</template>

<script>
// @ is an alias to /src
import RecommendSheet from "@/components/RecommendSheet";
import RecommendSinger from "@/components/RecommendSinger";
import HotSongList from "@/components/HotSongList";
import Search from "@/components/Search"
export default {
    name: 'Home',
    components: {
        RecommendSheet,
        RecommendSinger,
        HotSongList,
        Search
    },
    data () {
        return {
            items: [
                {
                    src: 'http://contentcms-bj.cdn.bcebos.com/cmspic/dadade34fa2d84dc362db5bd0feda6a1.jpeg?x-bce-process=image/crop,x_0,y_0,w_930,h_506',
                },
                {
                    src: 'http://contentcms-bj.cdn.bcebos.com/cmspic/0e04898c4e06e3e1756563489dd9797d.jpeg?x-bce-process=image/crop,x_0,y_0,w_930,h_506',
                },
                {
                    src: 'http://contentcms-bj.cdn.bcebos.com/cmspic/12de0a6dae19642e0e7cb27042717f52.jpeg?x-bce-process=image/crop,x_0,y_0,w_900,h_489',
                },
                {
                    src: 'http://contentcms-bj.cdn.bcebos.com/cmspic/e56920dbf4671a80927e562cf430eedf.jpeg?x-bce-process=image/crop,x_0,y_0,w_930,h_506',
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
                .carousel{
                    background-color: $color-background-bb;
                    width: 100%;
                    border-radius: 10px;
                    height: 80%;
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
        .content{
            padding: 0 42px;
        }
    }
</style>
