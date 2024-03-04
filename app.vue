<template>
  <div>
    <p>{{ counter }}</p>
  </div>
</template>

<script setup>
// useCounterStateでカウント数を取得して変数counterに入れる
  const counter = useCounterState()
</script>
