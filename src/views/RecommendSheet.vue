<template>
  <div class="rank-wrapper pl-16 pr-16">
    <div class="title mt-6">
      <span class="description">心悦君兮君不知</span>
    </div>
    <div class="userInfo">
      <div class="user-avatar">
        <img
          src="https://img1.kuwo.cn/star/userhead/3/33/1581579475531_493211103.jpg"
          alt=""
        />
      </div>
      <div class="username">冲浪甜橙</div>
    </div>
    <div class="classify">
      <ul>
        <li>日语，</li>
        <li>影视，</li>
        <li>二次元</li>
      </ul>
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
      <button>
        <i class="iconfont icon-suiji"></i>
        <span>评论</span>
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
    return {};
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
  .title {
    display: inline-block;
    height: 60px;
    line-height: 60px;
    .description {
      font-size: 26px;
      font-weight: 800;
    }
  }
  .userInfo {
    .user-avatar {
      .img {
        padding: 10px 0;
        display: block;
        width: 50px;
        height: 70px;
      }
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
