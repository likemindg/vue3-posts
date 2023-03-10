<template>
  <div>
    <h2>게시글 상세</h2>
    <hr class="my-4" />
    <p>{{ $route.params }}</p>
    <p>{{ $route.query.search }}</p>
    <p>{{ $route.hash }}</p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
