<template>
    <Page>
        <FlexboxLayout class="c-main-layout">
          <Header/>
          <FlexboxLayout class="c-main">
            <Index/>
            <Button
              text="YO3"
            />
          </FlexboxLayout>
          <Terminal v-if="$store.state.console.displayConsole"/>
        </FlexboxLayout>
    </Page>
</template>

<script >
import Header from '../../../desktop-blankcanvas/components/global/Header'
import Index from '../../../desktop-blankcanvas/pages/index'
import Terminal from '../../../desktop-blankcanvas/components/global/Terminal'

export default {
  components: {
    Header,
    Index,
    Terminal
  },
  data() {
    return {}
  },
}
</script>

<style lang="less">
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
.c-label {
  color: #666;
  font-size: 14px;
  font-weight: bold;
}
</style>
