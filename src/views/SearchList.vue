<template>
    <div class="search-box">
        <div class="bg-wrapper">
            <SearchL class="search-cpt"></SearchL>
        </div>
        <div class="pl-16 pr-16 pb-16">
            <div class="list-classify mt-2 mb-2">
                <span class="result">搜索结果</span>
                <span>单曲</span>
                <span>专辑</span>
                <span>mv</span>
                <span>歌手</span>
            </div>
            <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :page.sync="page"
                    hide-default-footer
                    :items-per-page="itemsPerPage"
                    class="elevation-1"
                    @page-count="pageCount = $event"
            ></v-data-table>
            <div class="text-center pt-2">
                <v-pagination v-model="page" :length="pageCount" color="#1CC3D3"></v-pagination>
            </div>
        </div>

    </div>

</template>
<script>
    import SearchL from '@/components/SearchL'
    export default {
        name:"SearchList",
        data () {
            return {
                page: 1,
                pageCount: 0,
                itemsPerPage: 20,
                headers: [
                    {
                        text: '序号',
                        value: 'rankid',
                    },
                    { text: '歌曲', value: 'song' },
                    { text: '歌手', value: 'singer' },
                    { text: '专辑', value: 'special' },
                    { text: '时长', value: 'time' },
                ],
                desserts: [
                    {
                        rankid: 1,
                        song: '浪子闲话',
                        singer:'花潼',
                        special: '浪子闲话',
                        carbs: '浪子闲话',
                        time: '03:32',
                    },
                    {
                        rankid: 2,
                        song: '浪子闲话',
                        singer:'花潼',
                        special: '浪子闲话',
                        carbs: '浪子闲话',
                        time: '03:32',
                    },{
                        rankid: 3,
                        song: '浪子闲话',
                        singer:'花潼',
                        special: '浪子闲话',
                        carbs: '浪子闲话',
                        time: '03:32',
                    },{
                        rankid: 4,
                        song: '浪子闲话',
                        singer:'花潼',
                        special: '浪子闲话',
                        carbs: '浪子闲话',
                        time: '03:32',
                    },{
                        rankid: 5,
                        song: '浪子闲话',
                        singer:'花潼',
                        special: '浪子闲话',
                        carbs: '浪子闲话',
                        time: '03:32',
                    },{
                        rankid: 6,
                        song: '浪子闲话',
                        singer:'花潼',
                        special: '浪子闲话',
                        carbs: '浪子闲话',
                        time: '03:32'
                    },{
                        rankid: 7,
                        song: '浪子闲话',
                        singer:'花潼',
                        special: '浪子闲话',
                        carbs: '浪子闲话',
                        time: '03:32',
                    },
                    {
                        rankid: 8,
                        song: '浪子闲话',
                        singer:'花潼',
                        special: '浪子闲话',
                        carbs: '浪子闲话',
                        time: '03:32',
                    },{
                        rankid: 9,
                        song: '浪子闲话',
                        singer:'花潼',
                        special: '浪子闲话',
                        carbs: '浪子闲话',
                        time: '03:32',
                    },{
                        rankid: 10,
                        song: '浪子闲话',
                        singer:'花潼',
                        special: '浪子闲话',
                        carbs: '浪子闲话',
                        time: '03:32',
                    },{
                        rankid: 11,
                        song: '浪子闲话',
                        singer:'花潼',
                        special: '浪子闲话',
                        carbs: '浪子闲话',
                        time: '03:32',
                    },{
                        rankid: 12,
                        song: '浪子闲话',
                        singer:'花潼',
                        special: '浪子闲话',
                        carbs: '浪子闲话',
                        time: '03:32'
                    },
                    {
                        rankid: 13,
                        song: '浪子闲话',
                        singer:'花潼',
                        special: '浪子闲话',
                        carbs: '浪子闲话',
                        time: '03:32',
                    },{
                        rankid: 14,
                        song: '浪子闲话',
                        singer:'花潼',
                        special: '浪子闲话',
                        carbs: '浪子闲话',
                        time: '03:32',
                    },{
                        rankid: 15,
                        song: '浪子闲话',
                        singer:'花潼',
                        special: '浪子闲话',
                        carbs: '浪子闲话',
                        time: '03:32',
                    },{
                        rankid: 16,
                        song: '浪子闲话',
                        singer:'花潼',
                        special: '浪子闲话',
                        carbs: '浪子闲话',
                        time: '03:32',
                    },{
                        rankid: 17,
                        song: '浪子闲话',
                        singer:'花潼',
                        special: '浪子闲话',
                        carbs: '浪子闲话',
                        time: '03:32'
                    }





                ],
            }
        },
        components:{
            SearchL
        }
    }
</script>
<style lang="scss" scoped>
    @import "@/assets/style/index.scss";
    .search-box{
        .bg-wrapper{
            height: 260px;
            background-image: url("~@/assets/images/bg3.jpg");
            background-size: cover;
            position: relative;
            .search-cpt{
                position: absolute;
                left: 50%;
                top: 40%;
                transform: translateX(-50%);
            }
        }
        .list-classify{
            height: 60px;
            line-height: 60px;
            .result{
                font-size: $font-size-large-s;
                font-weight: bold;
            }
            span{
                margin-right: 50px;
            }
        }
    }
</style>
