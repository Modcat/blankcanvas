<template>
  <FlexboxLayout class="c-header">
    <SegmentedBar class="c-tabs">
      <SegmentedBarItem title="Artboards"/>
      <SegmentedBarItem title="Artflow"/>
      <SegmentedBarItem title="Director"/>
      <SegmentedBarItem title="Art Store"/>
      <SegmentedBarItem title="HotKeys"/>
      <SegmentedBarItem title="Bounty Board"/>
      <SegmentedBarItem title="Docs"/>
      <SegmentedBarItem title="Volenteer"/>
      <SegmentedBarItem title="Admin"/>
    </SegmentedBar>
  </FlexboxLayout>
</template>

<script>
export default {
    name: 'Header',
    methods: {
      showAlert() {
        alert('Hello world')
      }
    }
}
</script>

<style lang="scss">
.c-header {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  max-height: 95px;
  background: #eee;

  * {
    -webkit-app-region: none;
  }
  .c-tabs {
    display: flex;
    border-radius: 3px;
    font-weight: 600;
    font-size: 12px;
    background: white;

    SegmentedBarItem {
      margin-left: 1px;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      cursor: default;
      color: inherit;
      display: block;
      padding: 7px 13px 6px 13px;
      font-size: 10px;
      font-weight: bold;
    }
  }
}
@media screen and (max-width: 100000px) {
  .c-header {
    background: green;
  }
}
</style>