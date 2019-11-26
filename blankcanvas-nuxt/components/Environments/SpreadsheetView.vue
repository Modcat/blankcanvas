<template>
  <section id="xspreadsheet"/>
</template>

<script>
import SpreadsheetJS from 'x-data-spreadsheet/dist/xspreadsheet.js'
import SpreadsheetCSS from 'x-data-spreadsheet/dist/xspreadsheet.css'

export default {
  name: 'Spreadsheet',
  data() {
    return {
      spreadsheet: false
    }
  },
  mounted() {
    this.spreadsheet = x.spreadsheet('#xspreadsheet')
    // Insert data
    .loadData({}) // load data
    // Events
    .change(data => {
      console.log('Save changes to spreadsheet')
    })
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
