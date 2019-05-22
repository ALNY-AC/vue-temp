<template>
  <div class="ol-menu">
    <el-menu unique-opened router>
      <div class="text-center">
        <img src="/images/logo.png" class="logo" alt="">
      </div>
      <div class="logo-title">
        <div style="color:#333">管理模板</div>
        <div style="color:#b2b2b2;font-size:10px">管理员</div>
      </div>
      <el-menu-item index="/" :route="{path:'/'}">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/login" :route="{path:'/login'}">
        <i class="el-icon-monitor"></i>
        <span slot="title">退出登录</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script src="./OlMenu.js"></script>
<style lang="scss" scoped>
@import "OlMenu.scss";
</style>