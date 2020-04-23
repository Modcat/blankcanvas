<template>
  <section id="xspreadsheet"/>
</template>

<script>
import Spreadsheet from "x-data-spreadsheet";

export default {
  name: 'SpreadsheetView',
  data() {
    return {
      spreadsheet: false
    }
  },
  mounted() {
    this.spreadsheet = new Spreadsheet("#xspreadsheet")
    .loadData({}) // load data
    .change(data => {
      // save data to db
    });
  
    // data validation
    this.spreadsheet.validate()
  }
}
</script>

<style lang="less">
  #xspreadsheet {
    
    .x-spreadsheet-toolbar,
    .x-spreadsheet-bottombar {
      width: 100vw !important;
    }

    .x-spreadsheet-icon .x-spreadsheet-icon-img {
      background: url('/assets/sprite.svg');
    }
  }
</style>
