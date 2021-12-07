<template>
    <div class="rec-sheet">
        <div class="title">
            <span>大家都在听</span>
        </div>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-left">歌曲名</th>
                    <th class="text-left">歌手</th>
                    <th class="text-left">专辑</th>
                    <th class="text-left">时长</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in desserts" :key="index">
                    <td><a href="">{{ item.name }}</a></td>
                    <td><a href="">{{ item.singer }}</a></td>
                    <td>{{ item.special }}</td>
                    <td>{{ item.time }}</td>
                </tr>
                </tbody>
            </template>
        </v-simple-table>
    </div>
</template>
<script>
export default {
    data () {
        return {
            desserts: [
                {
                    name: 'Frozen Yogurt',
                    singer: 'Daisy',
                    special: 'HaHahaha',
                    time: '3:03'

                },
                {
                    name: 'Frozen Yogurt',
                    singer: 'Daisy',
                    special: 'HaHahaha',
                    time: '3:03'

                },
                {
                    name: 'Frozen Yogurt',
                    singer: 'Daisy',
                    special: 'HaHahaha',
                    time: '3:03'

                },
                {
                    name: 'Frozen Yogurt',
                    singer: 'Daisy',
                    special: 'HaHahaha',
                    time: '3:03'
                }
            ],
        }
    },
}

</script>
<style lang="scss" scoped>
    @import "@/assets/style/index.scss";

    .rec-sheet {
        padding-top: 30px;

        .title {
            height: 49px;
            line-height: 49px;

            span {
                display: block;
                color: #fff;
                font-size: $font-size-medium-x;
            }
        }
        .v-data-table{
            background-color: transparent !important;
            border-left: none;
            color: $color-text-lb;
            .v-data-table__wrapper{
                thead{
                    tr{
                        th{
                            color: #fff;
                            width: 160px;
                        }
                    }
                }
                tbody{
                    tr{
                        td{
                            a{
                                color: $color-text-lb;

                            }
                        }
                        &:hover{
                            background-color: transparent !important;
                        }
                    }
                }
            }
        }
    }
</style>
