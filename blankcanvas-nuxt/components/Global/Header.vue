<template>
  <FlexboxLayout class="c-header">
    <SegmentedBar class="c-tabs">
      <SegmentedBarItem
        title="Artboards"
        @click="changeRoute('index')"
        @tap="changeRoute('index')"
      />
      <SegmentedBarItem
        title="Artflow"
        @click="changeRoute('artflow')"
        @tap="changeRoute('artflow')"
      />
      <SegmentedBarItem
        title="Director"
        @click="changeRoute('director')"
        @tap="changeRoute('director')"
      />
      <SegmentedBarItem
        title="Art Store"
        @click="changeRoute('artstore')"
        @tap="changeRoute('artstore')"
      />
      <SegmentedBarItem
        title="HotKeys"
        @click="changeRoute('hotkeys')"
        @tap="changeRoute('hotkeys')"
      />
      <SegmentedBarItem
        title="Bounty Board"
        @click="changeRoute('bounty')"
        @tap="changeRoute('bounty')"
      />
      <SegmentedBarItem
        title="Docs"
        @click="changeRoute('docs')"
        @tap="changeRoute('docs')"
      />
      <SegmentedBarItem
        title="Volenteer"
        @click="changeRoute('volenteer')"
        @tap="changeRoute('volenteer')"
      />
      <SegmentedBarItem
        title="Admin"
        @click="changeRoute('admin')"
        @tap="changeRoute('admin')"
      />
    </SegmentedBar>
    <Button
      class="c-button c-button--white"
      text="_<"
      @tap="openConsole()"
      @click="openConsole()"
    />
  </FlexboxLayout>
</template>

<script>
export default {
  name: "Header",
  methods: {
    openConsole() {
      this.$store.dispatch("console/displayConsole", true);
    },
    changeRoute(route = "/", query = {}, params = {}) {
      this.$router.push({ name: route, query, params });
    }
  }
};
</script>

<style lang="scss">
.c-header {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #eee;

  * {
    -webkit-app-region: none;
  }

  > * {
    margin-left: 15px;
  }

  .c-tabs {
    display: flex;
    border-radius: 3px;
    font-weight: 600;
    font-size: 12px;
    background: white;

    SegmentedBarItem {
      margin-left: 1px;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      cursor: default;
      color: inherit;
      display: block;
      padding: 7px 13px 6px 13px;
      font-size: 10px;
      font-weight: bold;
    }

    SegmentedBarItem {
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
  }
}

@media screen and (max-width: 100000px) {
  .c-header {
    background: #f4f4f4;
  }
}
</style>
