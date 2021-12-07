<template>
  <div class="rank-wrapper pl-16 pr-16">
    <div class="title mt-6">
      <span class="title-name">飙升榜</span>
      <span class="time-update">更新时间: 2020-12-13</span>
    </div>
    <div class="btns">
      <button class="play">
        <i class="iconfont icon-suiji"></i>
        <span>播放全部</span>
      </button>
      <button>
        <i class="iconfont icon-suiji"></i>
        <span>添加</span>
      </button>
      <button>
        <i class="iconfont icon-suiji"></i>
        <span>收藏</span>
      </button>
    </div>
    <Rank></Rank>
    <!-- <v-data-table
                :headers="headers"
                :items="desserts"
                :page.sync="page"
                hide-default-footer
                :items-per-page="itemsPerPage"
                class="elevation-1"
                @page-count="pageCount = $event"
        >
            <template v-slot:item.img="{item}">
                    <img :src="item.img" alt="" class="img" >
            </template>
        </v-data-table>
        <div class="text-center pt-2">
            <v-pagination v-model="page" :length="pageCount" color="#1CC3D3"></v-pagination>
        </div> -->
  </div>
</template>
<script>
import Rank from "@/components/Rank";
export default {
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 8,
      headers: [
        {
          text: "序号",
          value: "rankid",
        },
        {
          value: "img",
        },
        { text: "歌曲", value: "song" },
        { text: "歌手", value: "singer" },
        { text: "专辑", value: "special" },
        { text: "时长", value: "time" },
      ],
      desserts: [
        {
          rankid: 1,
          img: "https://img2.kuwo.cn/star/albumcover/120/70/26/1416258977.jpg",
          song: "浪子闲话",
          singer: "花潼",
          special: "浪子闲话",
          carbs: "浪子闲话",
          time: "03:32",
        },
        {
          rankid: 2,
          img: "https://img2.kuwo.cn/star/albumcover/120/70/26/1416258977.jpg",
          song: "浪子闲话",
          singer: "花潼",
          special: "浪子闲话",
          carbs: "浪子闲话",
          time: "03:32",
        },
        {
          rankid: 3,
          img: "https://img2.kuwo.cn/star/albumcover/120/70/26/1416258977.jpg",
          song: "浪子闲话",
          singer: "花潼",
          special: "浪子闲话",
          carbs: "浪子闲话",
          time: "03:32",
        },
        {
          rankid: 4,
          img: "https://img2.kuwo.cn/star/albumcover/120/70/26/1416258977.jpg",
          song: "浪子闲话",
          singer: "花潼",
          special: "浪子闲话",
          carbs: "浪子闲话",
          time: "03:32",
        },
        {
          rankid: 5,
          song: "浪子闲话",
          singer: "花潼",
          special: "浪子闲话",
          carbs: "浪子闲话",
          time: "03:32",
        },
        {
          rankid: 6,
          song: "浪子闲话",
          singer: "花潼",
          special: "浪子闲话",
          carbs: "浪子闲话",
          time: "03:32",
        },
        {
          rankid: 7,
          song: "浪子闲话",
          singer: "花潼",
          special: "浪子闲话",
          carbs: "浪子闲话",
          time: "03:32",
        },
        {
          rankid: 8,
          song: "浪子闲话",
          singer: "花潼",
          special: "浪子闲话",
          carbs: "浪子闲话",
          time: "03:32",
        },
        {
          rankid: 9,
          song: "浪子闲话",
          singer: "花潼",
          special: "浪子闲话",
          carbs: "浪子闲话",
          time: "03:32",
        },
        {
          rankid: 10,
          song: "浪子闲话",
          singer: "花潼",
          special: "浪子闲话",
          carbs: "浪子闲话",
          time: "03:32",
        },
        {
          rankid: 11,
          song: "浪子闲话",
          singer: "花潼",
          special: "浪子闲话",
          carbs: "浪子闲话",
          time: "03:32",
        },
        {
          rankid: 12,
          song: "浪子闲话",
          singer: "花潼",
          special: "浪子闲话",
          carbs: "浪子闲话",
          time: "03:32",
        },
        {
          rankid: 13,
          song: "浪子闲话",
          singer: "花潼",
          special: "浪子闲话",
          carbs: "浪子闲话",
          time: "03:32",
        },
        {
          rankid: 14,
          song: "浪子闲话",
          singer: "花潼",
          special: "浪子闲话",
          carbs: "浪子闲话",
          time: "03:32",
        },
        {
          rankid: 15,
          song: "浪子闲话",
          singer: "花潼",
          special: "浪子闲话",
          carbs: "浪子闲话",
          time: "03:32",
        },
        {
          rankid: 16,
          song: "浪子闲话",
          singer: "花潼",
          special: "浪子闲话",
          carbs: "浪子闲话",
          time: "03:32",
        },
        {
          rankid: 17,
          song: "浪子闲话",
          singer: "花潼",
          special: "浪子闲话",
          carbs: "浪子闲话",
          time: "03:32",
        },
      ],
    };
  },
  components: { Rank },
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/index.scss";

p {
  margin: 0;
}
.rank-wrapper {
  .img {
    padding: 10px 0;
    display: block;
    width: 50px;
    height: 70px;
  }
  .title {
    display: inline-block;
    height: 60px;
    line-height: 60px;
    .title-name {
      font-size: 26px;
      font-weight: 800;
    }
    .time-update {
      font-size: $font-size-medium;
      height: 20px;
      line-height: 20px;
      margin-left: 10px;
      color: #999;
    }
  }
  .btns {
    margin-top: 23px;
    margin-bottom: 40px;
    display: flex;
    .play {
      width: 150px;
      background: #ffe12c;
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 30px;
      height: 40px;
      margin-right: 10px;
      text-align: center;
      border-radius: 22px;
      border: none;
      font-size: 16px;
      background: #f2f2f2;
      cursor: pointer;
      color: #333;
      .iconfont {
        font-size: 20px;
        margin-right: 5px;
      }
    }
  }
  .v-data-table__wrapper {
    tr:nth-child(even) {
      background-color: #fafafa !important;
    }
  }
}
</style>
