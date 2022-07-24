<script setup>
import PreviewCardMobile from "./components/PreviewCardMobile.vue";
import PreviewCardDesktop from "./components/PreviewCardDesktop.vue";
import { useMq } from "vue3-mq";

const mq = useMq();
console.log(mq);
</script>

<template>
  <main>
    <PreviewCardMobile v-if="mq.mobile" />
    <PreviewCardDesktop v-if="mq.desktop" />
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
