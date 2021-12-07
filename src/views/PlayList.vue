<template>
    <div class="video-wrapper pl-16 pr-16">
        <div class="classify-head mt-2 mb-2">
            <span class="active">精选歌单</span>
            <span>最新</span>
            <span>最热</span>
        </div>
        <div class="list-out mb-16">
            <div class="album_item">
                <div class="pic_out">
                    <div class="cover_play"><span class="play icon_play"><i class="iconfont icon-icon_play_1"></i></span></div>
                    <img src="https://img1.kuwo.cn/star/userpl2015/15/39/1607657573778_448007115_500.jpg" alt="" class="cover pic" data-src="https://img1.kuwo.cn/wmvpic/324/78/3/4093527818.jpg" lazy="loaded">
                </div>
                <p class="name">
                    <span>The Lighthouse Keeper</span>
                </p>
                <p class="time">
                    <span>Sam Smith</span>
                </p>
            </div>
            <div class="album_item">
                <div class="pic_out">
                    <div class="cover_play"><span class="play icon_play"><i class="iconfont icon-icon_play_1"></i></span></div>
                    <img src="https://img1.kuwo.cn/star/userpl2015/15/39/1607657573778_448007115_500.jpg" alt="" class="cover pic" data-src="https://img1.kuwo.cn/wmvpic/324/78/3/4093527818.jpg" lazy="loaded">
                </div>
                <p class="name">
                    <span>The Lighthouse Keeper</span>
                </p>
                <p class="time">
                    <span>Sam Smith</span>
                </p>
            </div>
            <div class="album_item">
                <div class="pic_out">
                    <div class="cover_play"><span class="play icon_play"><i class="iconfont icon-icon_play_1"></i></span></div>
                    <img src="https://img1.kuwo.cn/star/userpl2015/15/39/1607657573778_448007115_500.jpg" alt="" class="cover pic" data-src="https://img1.kuwo.cn/wmvpic/324/78/3/4093527818.jpg" lazy="loaded">
                </div>
                <p class="name">
                    <span>The Lighthouse Keeper</span>
                </p>
                <p class="time">
                    <span>Sam Smith</span>
                </p>
            </div>
            <div class="album_item">
                <div class="pic_out">
                    <div class="cover_play"><span class="play icon_play"><i class="iconfont icon-icon_play_1"></i></span></div>
                    <img src="https://img1.kuwo.cn/star/userpl2015/15/39/1607657573778_448007115_500.jpg" alt="" class="cover pic" data-src="https://img1.kuwo.cn/wmvpic/324/78/3/4093527818.jpg" lazy="loaded">
                </div>
                <p class="name">
                    <span>The Lighthouse Keeper</span>
                </p>
                <p class="time">
                    <span>Sam Smith</span>
                </p>
            </div>
            <div class="album_item">
                <div class="pic_out">
                    <div class="cover_play"><span class="play icon_play"><i class="iconfont icon-icon_play_1"></i></span></div>
                    <img src="https://img1.kuwo.cn/star/userpl2015/15/39/1607657573778_448007115_500.jpg" alt="" class="cover pic" data-src="https://img1.kuwo.cn/wmvpic/324/78/3/4093527818.jpg" lazy="loaded">
                </div>
                <p class="name">
                    <span>The Lighthouse Keeper</span>
                </p>
                <p class="time">
                    <span>Sam Smith</span>
                </p>
            </div>
            <div class="album_item">
                <div class="pic_out">
                    <div class="cover_play"><span class="play icon_play"><i class="iconfont icon-icon_play_1"></i></span></div>
                    <img src="https://img1.kuwo.cn/star/userpl2015/15/39/1607657573778_448007115_500.jpg" alt="" class="cover pic" data-src="https://img1.kuwo.cn/wmvpic/324/78/3/4093527818.jpg" lazy="loaded">
                </div>
                <p class="name">
                    <span>The Lighthouse Keeper</span>
                </p>
                <p class="time">
                    <span>Sam Smith</span>
                </p>
            </div>
            <div class="album_item">
                <div class="pic_out">
                    <div class="cover_play"><span class="play icon_play"><i class="iconfont icon-icon_play_1"></i></span></div>
                    <img src="https://img1.kuwo.cn/star/userpl2015/15/39/1607657573778_448007115_500.jpg" alt="" class="cover pic" data-src="https://img1.kuwo.cn/wmvpic/324/78/3/4093527818.jpg" lazy="loaded">
                </div>
                <p class="name">
                    <span>The Lighthouse Keeper</span>
                </p>
                <p class="time">
                    <span>Sam Smith</span>
                </p>
            </div>

        </div>
    </div>
</template>
<style lang="scss" scoped>
    p{
        margin: 0;
    }
    .video-wrapper{
        .classify-head{
            height: 60px;
            line-height: 60px;
            span{
                margin-right: 50px;
                cursor: pointer;
            }
            .active{
                background: #ffe443;
                font-weight: 700;
                padding: 7px 14px;
                text-align: center;
                border-radius: 14px;
                cursor: pointer;
            }
        }
        .list-out{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-bottom: -26px;
            .album_item{
                width: 23%;
                margin-bottom: 26px;
                .pic_out{
                    position: relative;
                    padding-bottom: 100%;
                    overflow: hidden;
                    .cover_play{
                        ackground: transparent;
                        z-index: 3;
                        transition: all .2s ease-in-out;
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;

                    }
                    .pic{
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        top: 0;
                        left: 0;
                        transition: transform .75s cubic-bezier(0,1,.75,1);
                    }
                    .play_cnt{
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        padding: 3px 5px;
                        color: hsla(0,0%,100%,.8);
                        font-weight: 400;
                        font-size: 13px;
                        line-height: 18px;
                        z-index: 2;
                    }
                }
                .name{
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 25px;
                    margin-top: 12px;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }
                .count{
                    color: #999;
                    font-weight: 300;
                    margin-top: 8px;
                    margin-bottom: 26px;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }
            }
        }
    }
</style>
