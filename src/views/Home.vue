<template>
    <div class="home">
        <div class="top-content">
            <div class="bg">
                <Search></Search>
                <div class="carousel">
                    <v-carousel hide-delimiters height="100%">
                        <v-carousel-item
                                v-for="(item,i) in banner"
                                :key="i"
                                :src="item.imageUrl"
                        ></v-carousel-item>
                    </v-carousel>
                </div>
            </div>
            <div class="recently d-none d-lg-flex d-xl-none flex-lg-column" v-if="loginStatus">
                <template>
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
                </template>
            </div>
        </div>
        <div class="content">
            <RecommendSheet :sheet="playList"></RecommendSheet>
            <RecommendSinger :hotSinger="hotSinger"></RecommendSinger>
            <div class="wrap d-flex flex-row">
                <HotSongList></HotSongList>
                <HotVideo></HotVideo>
            </div>
        </div>
    </div>

</template>

<script>
// @ is an alias to /src
import RecommendSheet from "@/components/RecommendSheet";
import RecommendSinger from "@/components/RecommendSinger";
import HotSongList from "@/components/HotSongList";
import HotVideo from "@/components/HotVideo";
import Search from "@/components/Search"

import { getBanner, getHotSinger, getPlayList,getMv } from '@/assets/service/request'
export default {
    name: 'Home',
    components: {
        RecommendSheet,
        RecommendSinger,
        HotSongList,
        HotVideo,
        Search
    },
    data () {
        return {
            loginStatus: false,
            hotSinger: [],
            banner: [

            ],
            playList: []
        }
    },
    methods: {
        _getBanner() {
            getBanner().then(res => {
                if(res.code === 200) {
                    this.banner = res.banners.map(item => {
                        return {
                            imageUrl: item.imageUrl,
                            id: item.targetId,
                            url: item.url,
                            typeTitle: item.typeTitle,
                            titleColor: item.titleColor
                        }
                    })
                }
            });
        },
        _getHotSinger() {
            getHotSinger().then(res=> {
                this.hotSinger = res.artists
            })
        },
        _getPlayList(){
            getPlayList().then(res => {
                this.playList = res.playlists
            })
        },
        _getMv(){
            console.log('dfdf')
            getMv().then(res => {
                console.log(res,'dfdsf')
            })
        }
    },
    mounted() {
       this. _getBanner()
        this._getHotSinger()
        this._getPlayList()
        this._getMv()
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
                width: 600px;
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
