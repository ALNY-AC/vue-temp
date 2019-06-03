<template>
  <div class="default">
    <div class="menu-box">
      <div class="title" :style="{width:isCollapse?'64px':'auto'}">
        <!-- 管理系统 -->
      </div>
      <ol-menu :collapse="isCollapse"></ol-menu>
      <div class="switch" @click="isCollapse=!isCollapse" :style="{width:isCollapse?'64px':'auto'}">
        <i :class="{'el-icon-arrow-left':!isCollapse,'el-icon-arrow-right':isCollapse}"></i>
      </div>
    </div>
    <div class="view-box">
      <div class="head-box">
        <el-menu mode="horizontal" background-color="#fff" text-color="#333" active-text-color="#333">
          <el-submenu index="2-4">
            <template slot="title">管理员</template>
            <el-menu-item index="2-4-3">个人设置</el-menu-item>
            <el-menu-item index="2-4-3">退出登录</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div class="content-box">
        <nuxt class="nuxt" />
      </div>
      <!-- <div class="footer-box"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  middleware: "root",
  data() {
    return {
      isCollapse: true
    };
  },
  mounted() {},
  methods: {},
  watch: {
    $route(to) {},
    active(v) {}
  }
};
</script>
<style lang="scss" scoped>
@import "default.scss";
</style>
<style>
</style>
