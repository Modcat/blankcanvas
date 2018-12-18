<template>
  <div @click="change" ref="spreadsheet" class="spreadsheet">
    <table class="table-contents">
      <thead ref="header">
        <td class="index" />
        <th v-for="(row,indexHead) in [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]" :key="indexHead" />
      </thead>
      <tbody>
        <tr v-for="(row,index) in [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]" :key="index">
          <td class="index" v-html="index" />
          <td class="cell" v-for="(row,indexCell) in [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]" :key="indexCell" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Excel',
  methods: {
    change () {
      window.modal.$shareStore.target = 'Excel'
    }
  },
  mounted () {
    this.$refs.spreadsheet.addEventListener('scroll', (e) => {
      let scrollLeft = e.target.scrollLeft
      this.$refs.header.style.marginLeft = `${scrollLeft * -1}px`
    })

    this.$refs.spreadsheet.addEventListener('click', (e) => {
      if (e.target.className.match('cell')) {
        e.target.classList.add('active')
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.spreadsheet {
  max-width: 100vw;
  max-height: 100vh;
  overflow: auto;
}
.table-contents {
  margin: 0;
  min-width: 100%;
  border-radius: 2px 2px 0 0;

  thead {
    position: absolute;
    counter-reset: th;
    color: white;
    z-index: 99;
    // backdrop-filter: blur(3px);

    th {
      min-width: 90px;
      min-width: 90px;
      padding: 5px;
      background: rgba(120, 120, 120, 0.55);
    }

    .index {
      background: transparent !important;
      min-width: 10px !important;
    }

    th:before {
      counter-increment: th;
      content: counter(th, upper-alpha);
      display: block;
    }
  }

  td {
    min-width: 90px;
    padding: 5px;
    background: rgba(255,255,255,0.45);

    &.index {
      text-align: center;
      min-width: auto;
      background: rgba(180, 180, 180, 0.45);
      color: white;
      font-weight: bold;
    }

    &.cell {
      position: relative;

      &.active:before {
        content: '';
        display: block;
        position: absolute;
        top: -3px;
        right: -3px;
        left: -3px;
        bottom: -3px;
        border: 3px solid lightblue;
        z-index: 5;
      }
    }
  }
}
</style>
