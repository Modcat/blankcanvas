<template>
    <Page>
        <FlexboxLayout class="c-main-layout">
          <Header/>
          <FlexboxLayout class="c-main">
            <Label title="Homepage"/>
          </FlexboxLayout>
          <Terminal v-if="$store.state.console.displayConsole"/>
        </FlexboxLayout>
    </Page>
</template>

<script >
import Header from '../../../blankcanvas-nuxt/components/Global/Header'
import Terminal from '../../../blankcanvas-nuxt/components/Global/Terminal'

export default {
  components: {
    Header,
    Terminal
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
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
</style>
