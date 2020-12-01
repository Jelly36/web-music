<template>
    <div class="home">
        <div class="top-content">
            <div class="wrap-bg">

            </div>
            <div class="recently">
                <p class="title">最近播放</p>
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
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
// @ is an alias to /src


export default {
    name: 'Home',
    components: {}
}
</script>

<style lang="scss">
    @import "@/assets/style/index.scss";

    .home {
        background-color: $color-background-bb;

        .top-content {
            display: flex;
            flex-direction: row;
            height: 360px;

            .wrap-bg {
                flex: 3;
                background: url('../assets/images/bg.png') no-repeat;
                background-size: cover;
                height: 100%;
            }

            .recently {
                flex: 1;
                .recent-wrapper {
                    color: #fff;
                    width: 80%;
                    margin: 0 auto;
                    padding:30px;
                    background-color: #1F1C2B;
                    border-radius: 10px;
                    li {
                        display: flex;
                        margin: 16px 0;
                        position: relative;
                        padding: 0 20px;
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
                            .sheet-name {
                                font-size: $font-size-medium;
                                letter-spacing: 3px;
                            }

                            .song-count {
                                color: $color-text-g;
                                margin-top: 4px;
                                font-size: $font-size-small-ss;
                            }
                        }
                    }
                }
            }
        }

    }
</style>
