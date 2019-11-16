<template>
  <div id="app">
    <div
      v-if="$route.name !== 'Tools' && $route.name !== 'Properties'"
      class="top-panel"
    >
      <div class="tabs">
        <nuxt-link to="/">
          Art boards
        </nuxt-link>
        <nuxt-link to="/artflow">
          Art flow
        </nuxt-link>
        <nuxt-link to="/director">
          Director
        </nuxt-link>
        <nuxt-link to="/artstore">
          Art Store
        </nuxt-link>
        <nuxt-link to="/hotkeys">
          HotKeys
        </nuxt-link>
        <nuxt-link to="/bounty">
          Bounty Board
        </nuxt-link>
        <nuxt-link to="/docs">
          Docs
        </nuxt-link>
        <nuxt-link to="/volenteer">
          volenteer
        </nuxt-link>
        <nuxt-link to="/admin">
          admin
        </nuxt-link>
      </div>
      <button @click="$store.dispatch('displayConsole', true)">Open Console</button>
    </div>
    <nuxt/>
    <Console/>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
