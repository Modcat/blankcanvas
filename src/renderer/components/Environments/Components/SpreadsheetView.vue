<template>
  <section id="xspreadsheet"/>
</template>

<script>
import SpreadsheetJS from 'x-data-spreadsheet/dist/xspreadsheet.js'
import SpreadsheetCSS from 'x-data-spreadsheet/dist/xspreadsheet.css'

export default {
  name: 'Spreadsheet',
  mounted() {
    x.spreadsheet('#xspreadsheet');
  }
}
</script>

<style lang="scss" scoped>
#viewer {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>
