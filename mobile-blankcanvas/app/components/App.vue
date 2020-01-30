<template>
    <Page>
        <FlexboxLayout class="c-main-layout">
          <Header/>
          <FlexboxLayout class="c-main" />
          <FlexboxLayout class="c-console"/>
        </FlexboxLayout>
    </Page>
</template>

<script >
  import Header from '../../../blankcanvas-nuxt/components/Global/Header'

  export default {
    components: {
        Header
      },
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
.c-main-layout {
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: white;
}
.c-main {
  background: white;
  flex-grow: 1;
}
.c-console {
  background: darkslategray;
  height: 300px;
}
</style>
