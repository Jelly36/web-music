<template>
    <v-navigation-drawer class="userInfo" color="#140B26">

        <v-list-item two-line :class="miniVariant && 'px-0'">
            <v-list-item-avatar>
                <img src="@/assets/images/avatar.png">
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>
                    <span class="userName">Daisy</span>
                </v-list-item-title>
                <v-list-item-subtitle>
                    <span class="mark">签到</span>
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <v-list class="list-wrapper">
            <v-list-item>
                <a href="">
                    <i class="iconfont icon-shouye"></i>
                    <span>音乐台</span>
                </a>
            </v-list-item>
            <v-list-item>
                <a href="">
                    <i class="iconfont icon-paihangbang"></i>
                    <span>排行榜</span>
                </a>
            </v-list-item>
            <v-list-item>
                <a href="">
                    <i class="iconfont icon-shipin"></i>
                    <span>MV</span>
                </a>
            </v-list-item>
            <v-list-item>
                <a href="">
                    <i class="iconfont icon-erji"></i>
                    <span>个人电台</span>
                </a>
            </v-list-item>
            <v-list-item>
                <a href="">
                    <i class="iconfont icon-xihuan"></i>
                    <span>我喜欢</span>
                </a>
            </v-list-item>
        </v-list>
        <div class="song-sheet">
            <span>我的歌单</span>
            <i class="iconfont icon-tianjia"></i>
        </div>
        <ul class="song-sheet-wrapper">
            <li>
        <span class="sheet-name">
          歌单一
        </span>
                <span class="song-count">标记标记标记</span>
            </li>
            <li>
        <span class="sheet-name">
          歌单二
        </span>
                <span class="song-count">
          标记标记标记
        </span>
            </li>
            <li>
        <span class="sheet-name">
          歌单三
        </span>
                <span class="song-count">
          标记标记标记
        </span>
            </li>
        </ul>
        <template v-slot:append>
            <div class="song-info">
                <div class="song-img">
                    <img src="@/assets/images/songimg.png" alt="">
                </div>
                <div class="song-detail">
        <span>
          大鱼-海棠
        </span>
                    <span>
          《大鱼海棠》印象曲
        </span>
                </div>
            </div>
        </template>

    </v-navigation-drawer>
</template>>
<script>

export default {
    name: 'Mine',
    data() {
        return {
            miniVariant: false
        }
    }
}
</script>
<style lang="scss">
    @import "@/assets/style/index.scss";

    .userInfo {
        height: 100%;
        background-color: $color-background;

        .list-wrapper {
            padding: 20px 56px;

            .v-list {

            }

            i {
                margin-right: 18px;
                font-size: $font-size-medium-x;


            }

            a {
                color: $color-text-g;
                letter-spacing: 2px;
                font-size: $font-size-medium;
            }
        }

        .song-sheet {
            color: $color-text-b;
            font-size: $font-size-medium;
            text-align: center;
            height: 50px;
            line-height: 50px;
            position: relative;

            span {
                position: relative;
                height: 100%;

                &::after {
                    content: '';
                    position: absolute;
                    right: 70px;
                    height: 1px;
                    width: 60px;
                    top: 50%;
                    background-color: $color-background-b
                }

                &::before {
                    content: '';
                    position: absolute;
                    left: 70px;
                    height: 1px;
                    width: 40px;
                    top: 50%;
                    background-color: $color-background-b
                }
            }

            i {
                position: absolute;
                right: 16%;
            }

        }

        .song-sheet-wrapper {
            color: #fff;
            padding-left: 76px;

            li {
                display: flex;
                flex-direction: column;
                margin: 16px 0;
                position: relative;
                padding: 0 20px;

                &:before {
                    content: '';
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background-color: $color-text-b;
                    position: absolute;
                    left: -2px;
                    top: 18%;
                }

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

        .song-info {
            padding: 0 20px;
            width: 100%;
            height: 65px;
            display: flex;
            background-color: $color-text-gg;
            flex-direction: row;

            .song-img {
                display: flex;
                align-items: center;
                justify-content: center;

                img {
                    display: block;
                    width: 45px;
                    height: 45px;
                    border-radius: 8px;
                }
            }

            .song-detail {
                display: flex;
                justify-content: center;
                flex-direction: column;
                margin-left: 16px;
                color: #fff;

                span:last-child {
                    font-size: $font-size-small-x;
                }
            }
        }
    }
</style>
