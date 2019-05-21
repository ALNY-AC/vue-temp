<template>
  <div class="v-class-list">

    <h3 style="color:#fff">各班级视力详情
      <span class="float-right">
        <div class="tool-box">
          <span>检查时间</span>
          <el-date-picker type="date" v-model="date" placeholder="选择日期">
          </el-date-picker>
        </div>
      </span>
    </h3>

    <el-row :gutter="31">
      <el-col :xl="4" :lg="6" :md="12" :sm="12" :xs="24" v-for="i in 8" :key="i">
        <el-card class="class-card" @click.native="$router.push('/class/report')">
          <v-title>樱花班</v-title>
          <div class="class-info">
            <span class="text-error">近视：10人</span>
            <span class="text-warn">其他：10人</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script src="./VClassList.js"></script>
<style lang="scss" scoped>
@import "VClassList.scss";
</style>