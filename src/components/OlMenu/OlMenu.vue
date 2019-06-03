<template>
  <div class="ol-menu">
    <el-menu unique-opened router class="el-ol-menu" :collapse-transition="false" :collapse="collapse">

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