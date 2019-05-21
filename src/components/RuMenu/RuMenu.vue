<template>
  <div class="ru-menu">
    <el-menu unique-opened router background-color="#021e34" text-color="#fff" active-text-color="#fff">
      <div class="text-center">
        <img src="/images/logo.png" class="logo" alt="">
      </div>
      <div class="logo-title">
        <div style="color:#fff">山东第一幼儿园</div>
        <div style="color:#b2b2b2;font-size:10px">学校机构</div>
      </div>
      <el-menu-item index="/" :route="{path:'/'}">筛查统计</el-menu-item>
      <el-menu-item index="/login" :route="{path:'/login'}">退出登录</el-menu-item>
    </el-menu>
  </div>
</template>
<script src="./RuMenu.js"></script>
<style lang="scss" scoped>
@import "RuMenu.scss";
</style>