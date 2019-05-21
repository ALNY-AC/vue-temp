<template>
  <div id="index">
    <el-card>
      <div>
        <v-title>整体视力状况（筛查）</v-title>
        <el-button type="primary" round size="small">参检人数：465465人</el-button>
      </div>
      <v-sift-chart></v-sift-chart>
    </el-card>

    <v-class-list></v-class-list>

  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>