<template>
  <div class="home">
      <div class="top-content">
          <div class="wrap-bg">

          </div>
          <div class="recently">
              <p>最近播放</p>
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
          </div>
            </div>
  </div>

</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {

  }
}
</script>

<style lang="scss">
  @import "@/assets/style/index.scss";
    .home{
        background-color: $color-background-bb;
        .top-content{
            display: flex;
            flex-direction: row;
            height: 360px;
            .wrap-bg{
                flex: 2;
                background: url('../assets/images/bg.png') no-repeat ;
                background-size: cover;
                height: 100%;

            }
            .recently{
                flex: 1;
            }
        }

    }
</style>
