<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const toAbout = () => {
  router.push("/about");
};
</script>

<template>
  <div class="text" @click="toAbout">点击跳转 About</div>
  <van-button type="primary">主要按钮</van-button>
  <van-button type="success">成功按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
  <van-button type="danger">危险按钮</van-button>
</template>

<style lang="scss" scoped>
.text {
  font-size: 20px;
}
</style>
