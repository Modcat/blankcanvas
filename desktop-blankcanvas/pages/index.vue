<template>
  <!-- <FlexboxLayout>
    <Label text="start up screen"/>
  </FlexboxLayout> -->
  <SpreadsheetView class="is-web-view"/>
</template>

<script>
import SpreadsheetView from '../components/environments/SpreadsheetView'

export default {
  name: 'spreadsheetEnvironment',
  components: {
    SpreadsheetView
  }
}
</script>

<style lang="less">
main {
  flex-grow: 1;
}
</style>