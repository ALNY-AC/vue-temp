<template>
  <div id="Login">
    <div class="login-center">
      <div class="title">儿童365近视防控管理后台</div>
      <div class="forms">
        <el-input placeholder="账号" v-model="form.username" class="forms-bottom">
          <i slot="prefix" class="el-input__icon el-icon-user"></i>
        </el-input>
        <el-input placeholder="密码" v-model="form.password" class="forms-bottom">
          <i slot="prefix" class="el-input__icon el-icon-lock"></i>
        </el-input>
        <el-input placeholder="验证码" v-model="form.code" class="forms-bottom">
          <i slot="prefix" class="el-input__icon el-icon-key"></i>
          <template slot="append">验证码</template>
        </el-input>
        <el-button style="width:100%;margin-top:30px" type="success" @click="$router.push('/')" round>登录</el-button>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>