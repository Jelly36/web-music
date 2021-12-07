<template>
  <div class="rec-sheet">
    <div class="title">
      <span>推荐歌单</span>
      <span @click="getMore">更多</span>
    </div>
    <ul class="d-flex justify-space-between flex-row flex-wrap">
      <li class="d-flex flex-column" v-for="item in sheet" :key="item.id">
        <router-link tag="div" to="/recommendSheet">
          <img :src="item.coverImgUrl" alt="" />
          <div class="playConut">
            <i class="iconfont icon-icon_play"></i>
            <span>{{ item.playCount }}</span>
          </div>
        </router-link>
        <div class="desc d-flex flex-column">
          <span>{{ item.copywriter }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    getMore() {
      this.$router.push("/playlist");
    },
  },
  props: {
    sheet: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
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
    }
    span:first-child {
      float: left;
      color: #fff;
      font-size: $font-size-medium-x;
    }
    span:last-child {
      float: right;
      color: $color-text-lb;
      font-size: $font-size-medium;
      cursor: pointer;
      &:hover {
        color: $color-text-b;
      }
    }
  }
  ul {
    margin-top: 10px;
    padding: 0;
    width: 100%;
    li {
      a {
        position: relative;
        img {
          display: block;
          width: 220px;
          height: 220px;
          border-radius: 4px;
        }
        .playConut {
          position: absolute;
          top: 10px;
          left: 10px;
          i {
            font-size: 20px;
            color: #fff;
          }
          span {
            color: #fff;
            font-size: $font-size-small-ss;
            margin-left: 6px;
            display: inline-block;
          }
        }
      }

      .desc {
        width: 220px;
        margin-top: 10px;
        span:first-child {
          color: #fff;
          margin-bottom: 3px;
          /*height: 30px;*/
          padding: 10px 0;
        }
      }
    }
  }
}
</style>
