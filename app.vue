<template>
  <div class="container">
    <h1>カウンターアプリ</h1>
    <p>{{ counter }}</p>
    <div class="button-group">
      <button @click="counterStore.countUp">+</button>
      <button @click="counterStore.countDown" :disabled="counter === 0">-</button> <!-- カウンターが0の時にボタンを無効化 -->
      <button @click="counterStore.Reset">Reset</button>
    </div>
  </div>
</template>

<script setup>
// useCounterStateでカウント数を取得して変数counterに入れる
// useCounterStateはカスタムコンポジション関数で、カウンターの状態と操作を管理するためのロジックを含む
const counterStore = useCounterState()
  const {counter} = counterStore
</script>

<style>

.container {
  text-align: center;
  margin-top: 50px;
}
.button-group button {
  margin: 5px;
  width: 60px;
  height: 40px;
}
</style>
