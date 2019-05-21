<template>
  <div class="default">
    <div class="menu-box">
      <ru-menu></ru-menu>
    </div>
    <div class="view-box">
      <div class="head-box">
        <div class="float-right">
          <el-menu mode="horizontal" background-color="#021e34" text-color="#fff" active-text-color="#fff">
            <el-submenu index="2-4">
              <template slot="title">医院管理员</template>
              <el-menu-item index="2-4-3">设置</el-menu-item>
              <el-menu-item index="2-4-3">退出登录</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>

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
