<template>
  <div class="default">
    <div class="menu-box">
      <ol-menu></ol-menu>
    </div>
    <div class="view-box">
      <div class="head-box">
        <el-menu mode="horizontal" background-color="#fff" text-color="#333" active-text-color="#333">
          <el-submenu index="2-4">
            <template slot="title">代码狮</template>
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
    return {};
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
