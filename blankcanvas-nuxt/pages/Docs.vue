<template>
  <section class="Docs">
    <aside>
      <h4>Development</h4>
      <ul>
        <li>Architecture</li>
        <li>Application State</li>
        <li>File Format's</li>
        <li>WebGL 2.0</li>
        <li>Connections</li>
        <li>Artboards</li>
        <li>Components</li>
        <li>Code</li>
        <li>Timeline</li>
        <li>Audio</li>
        <li>Spreadsheet</li>
        <li>Database</li>
        <li>Art Flow</li>
        <li>Director</li>
        <li>Ecommerce</li>
      </ul>
      <h4>Design UI/UX</h4>
      <ul>
        <li>UI Standards</li>
        <li>UX Standards</li>
        <li>Theming</li>
      </ul>
      <h4>Business</h4>
      <ul>
        <li>Terms &amp; Conditions</li>
        <li>Privacy Policy</li>
        <li>Code of Conduct</li>
        <li>License</li>
        <li>Attribution's</li>
      </ul>
    </aside>
    <section class="page">
      Documentation
      <hr>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Docs'
}
</script>

<style lang="scss" scoped>
.Docs {
  display: flex;
  flex-direction: row;
  width: 100vw;
  overflow: hidden;

  > * {
    display: flex;
    flex-direction: column;
    padding: 20px;
    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;
    user-select: none;
  }

  aside {
    width: 100%;
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

  hr {
    left: 0;
  }

  .page {
    max-width: 560px;
    margin: 0 auto;
  }
}
</style>
