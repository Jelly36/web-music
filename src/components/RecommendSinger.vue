<template>
    <div class="rec-sheet">
        <div class="title">
            <span>热门歌手</span>
            <span>更多</span>
        </div>
        <ul class="d-flex justify-space-between flex-row flex-wrap">
            <li class="d-flex flex-column" v-for="item in hotSinger" :key="item.id">
                <a href="">
                    <img :src="item.picUrl" alt="">
                </a>
                <div class="desc ">
                    <span>{{item.name}}</span>
                </div>
            </li>


        </ul>
    </div>
</template>
<script>
export default {
    props: {
        hotSinger: {
            type: Array,
            default(){
                return []
            }
        }
    }
}

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
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                }
                .desc{
                    text-align: center;
                    margin-top: 10px;
                    span{

                        color: #fff;

                    }
                }

            }
        }
    }
</style>
