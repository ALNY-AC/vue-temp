<template>
  <div id="list">
    <el-card shadow="never">
      <el-form inline>
        <el-form-item>
          <el-input @keydown.enter.native="update" placeholder="搜索"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="update">搜索</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="list" v-loading="loading" border style="width: 100%">
        <el-table-column prop="p1" label="参数1"></el-table-column>
        <el-table-column prop="p2" label="参数2"></el-table-column>
        <el-table-column prop="p3" label="参数3"></el-table-column>
        <el-table-column prop="p4" label="参数4"></el-table-column>
        <el-table-column prop="p5" label="参数5"></el-table-column>
        <el-table-column prop="p6" label="参数6"></el-table-column>
        <el-table-column prop="p7" label="参数7"></el-table-column>
        <el-table-column prop="p8" label="参数8"></el-table-column>
        <el-table-column prop="p9" label="参数9"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text">查看</el-button>
            <el-button type="text">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination :current-page.sync="page" :page-sizes="[10, 20, 30, 40]" :page-size.sync="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>
    </el-card>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>