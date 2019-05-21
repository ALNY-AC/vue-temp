<template>
  <div id="report">
    <el-card>
      <div style="margin-bottom:20px">
        <el-button size="small" round type="primary" @click="$router.go(-1)">返回</el-button>
      </div>

      <v-title>樱花班</v-title>
      <div class="block-item success"></div><span>视力正常：20人</span>
      <div class="block-item error"></div><span>近视：10人</span>
      <div class="block-item warn"></div><span>其他：2人</span>

      <div class="table-box">
        <el-row style="margin-bottom:20px">
          <el-col :span="2" class="text-center">
            <span>
              姓名
            </span>
          </el-col>
          <el-col :span="5" class="text-center">
            <span>
              筛查结果
            </span>
          </el-col>
          <el-col :span="3" class="text-center">
            <span>
              检查时间
            </span>
          </el-col>
          <el-col :span="2" class="text-center">
            <span>
              操作
            </span>
          </el-col>
        </el-row>

        <el-row :gutter="20" :class="['table-stule',item]" type="flex" align="middle" v-for="(item,i) in list" :key="i">
          <el-col :span="2" class="text-center">
            <span>刘晓冉</span>
          </el-col>
          <el-col :span="5" class="text-center">
            <span>屈光过快、斜视</span>
          </el-col>
          <el-col :span="3" class="text-center">
            <span>2019-05-16</span>
          </el-col>
          <el-col :span="2" class="text-center">
            <el-button size="small" round type="primary" @click="$router.push('/class/report/info')">看报告</el-button>
          </el-col>
        </el-row>
      </div>

    </el-card>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>