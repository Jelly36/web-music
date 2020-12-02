<template>
    <div class="rec-sheet">
        <div class="title">
            <span>推荐歌单</span>
            <span>更多</span>
        </div>
        <ul class="d-flex justify-space-between flex-row">
            <li class="d-flex flex-column">
                <a href="">
                    <img src="@/assets/images/bg.png" alt="">
                </a>
                <div class="desc d-flex flex-column">
                    <span>Big Girl Big</span>
                    <span>Bei Maejor</span>
                </div>
            </li>
            <li class="d-flex flex-column">
                <a href="">
                    <img src="@/assets/images/bg.png" alt="">
                </a>
                <div class="desc d-flex flex-column">
                    <span>Big Girl Big</span>
                    <span>Bei Maejor</span>
                </div>
            </li>
            <li class="d-flex flex-column">
                <a href="">
                    <img src="@/assets/images/bg.png" alt="">
                </a>
                <div class="desc d-flex flex-column">
                    <span>Big Girl Big</span>
                    <span>Bei Maejor</span>
                </div>
            </li>
            <li class="d-flex flex-column">
                <a href="">
                    <img src="@/assets/images/bg.png" alt="">
                </a>
                <div class="desc d-flex flex-column">
                    <span>Big Girl Big</span>
                    <span>Bei Maejor</span>
                </div>
            </li>
            <li class="d-flex flex-column">
                <a href="">
                    <img src="@/assets/images/bg.png" alt="">
                </a>
                <div class="desc d-flex flex-column">
                    <span>Big Girl Big</span>
                    <span>Bei Maejor</span>
                </div>
            </li>
            <li class="d-flex flex-column">
                <a href="">
                    <img src="@/assets/images/bg.png" alt="">
                </a>
                <div class="desc d-flex flex-column">
                    <span>Big Girl Big</span>
                    <span>Bei Maejor</span>
                </div>
            </li>
            <li class="d-flex flex-column">
                <a href="">
                    <img src="@/assets/images/bg.png" alt="">
                </a>
                <div class="desc d-flex flex-column">
                    <span>Big Girl Big</span>
                    <span>Bei Maejor</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {}

</script>
<style lang="scss" scoped>
    @import "@/assets/style/index.scss";

    .rec-sheet{
        padding-top: 30px;
        .title{
            height: 49px;
            line-height: 49px;
            span{
                display: block;
            }
            span:first-child{
                float: left;
                color: #fff ;
            }
            span:last-child{
                float: right;
                color: $color-text-lb;
                font-size: $font-size-medium;
            }
        }
        ul{
            margin-top: 10px;
            padding: 0;
            li{
                width: 20%;
                img{
                    display: block;
                    width: 100px;
                    height: 100px;
                    border-radius: 10px;
                }
                .desc{
                    span:first-child{
                        color: #fff;
                        margin-bottom: 3px;
                    }
                    span:last-child{
                        color: $color-text-g;
                        font-size: $font-size-small-ss
                    }
                }

            }
        }
    }
</style>
