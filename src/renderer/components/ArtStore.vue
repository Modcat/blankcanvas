<template>
  <div class="art-store">
    <div class="main-hero color-shift">
      <div class="track"></div>
      <aside></aside>
    </div>
    <div class="row">
      <div class="illusration color-shift">
        <input type="range" min="0" max="360"/>
        <aside></aside>
      </div>
      <div class="video color-shift">
        <input type="range" min="0" max="360"/>
        <aside></aside>
      </div>
      <div class="code color-shift">
        <input type="range" min="0" max="360"/>
        <aside></aside>
      </div>
    </div>
    <div class="creative-code">
      <aside></aside>
      <div class="preview"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtStore'
}
</script>

<style lang="scss" scoped>
.art-store {
  display: none;
}
</style>
