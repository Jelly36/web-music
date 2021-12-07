<template>
    <v-bottom-navigation
            fixed
            height="65px"
    >
        <div class="play-module">
            <div class="d-flex flex-column center-content">
                <div class="text-center wrap-btn justify-center">
                    <span>
                        <i class="iconfont icon-suiji"></i>
                    </span>
                    <span style="transform:rotate(180deg)">
                         <i class="iconfont icon-xiayishou"></i>
                    </span>
                    <span>
                         <i class="iconfont icon-zanting"></i>
                    </span>
                    <span>
                        <i class="iconfont icon-xiayishou"></i>
                    </span>
                    <span>
                        <i class="iconfont icon-xunhuanbofang"></i>
                    </span>
                </div>
                <div class="text-center pl-16 pr-16 d-flex align-center progress">
                    <span>01:55</span>
                    <v-progress-linear value="15"></v-progress-linear>
                    <span>03:07</span>
                </div>
            </div>
        </div>
    </v-bottom-navigation>
</template>
<script>
    export default {
        data() {
            return {}
        },
    }
</script>
<style scoped lang="scss">
    @import "@/assets/style/index.scss";

    .v-bottom-navigation {
        background-color: #1B1A2C !important;
        padding-left: 256px !important;

        .play-module {
            width: 60%;
            margin: 0 auto;
            /*background-color: #fff;*/
            .center-content{
                height: 100%;
            }
            .wrap-btn{
                flex: 1;
                align-content: center;
                span{
                    height: 100%;
                    display: inline-block;
                    margin-left: 30px;
                    i{
                        color: $color-text-g;
                    }
                }
            }
            .progress{
                flex: 1;
            }
        }
    }
</style>
