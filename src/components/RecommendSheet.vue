<template>
    <div class="rec-sheet">
        <div class="title">
            <span>推荐歌单</span>
            <span>更多</span>
        </div>
        <ul class="d-flex justify-space-between flex-row flex-wrap">
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
                font-size: $font-size-medium-x;
            }
            span:last-child{
                float: right;
                color: $color-text-lb;
                font-size: $font-size-medium;
                cursor: pointer;
                &:hover{
                    color: $color-text-b;
                }
            }
        }
        ul{
            margin-top: 10px;
            padding: 0;
            width: 100%;
            li{
                img{
                    display: block;
                    width: 150px;
                    height: 150px;
                    border-radius: 10px;
                }
                .desc{
                    margin-top: 10px;
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
