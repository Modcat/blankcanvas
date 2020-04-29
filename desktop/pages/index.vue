<template>
  <FlexboxLayout>
    <Label text="start up screen"/>
    <button @click="fsload">loadfs</button>
  </FlexboxLayout>
</template>

<script>
export default {
  name: 'index',
  methods: {
    fsload() {
      try {
        // require('electron')
        
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="less">
main {
  flex-grow: 1;
}
</style>