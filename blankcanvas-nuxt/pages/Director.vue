<template>
  <section class="Director">
    <aside>
      <h4>Outliner</h4>
    </aside>
    <div class="view-port">
      <h1 style="padding-left: 20px;">WebGL</h1>
      <div class="timeline">
        <h4>Timeline</h4>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Director'
}
</script>

<style lang="scss" scoped>
.Director {
  display: flex;
  flex-direction: row;
  width: 100vw;
  overflow: hidden;

  aside {
    padding: 15px;
    min-width: 170px;
    max-width: 170px;
    background: #f8f8f8;

    h4 {
      margin: 45px 0 0 0;
      padding: 0;

      &:first-child {
        margin-top: 5px;
      }
    }

    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;

      li {
        margin: 15px 0 0 0;
        padding: 0;
      }
    }
  }

  .view-port {
    overflow: hidden;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .timeline {
    width: 100%;
    overflow: auto;
    padding: 20px;
    background: #f5f5f5;
    min-height: 150px;
  }
}
</style>
