<!--This is the Hotkey view.
      We store all the hotkeys in here.
      Todo: This is still work in progress.
-->
<template>
  <div class="clip">
    <section class="hotkeys">
      <div class="tabs">
        <span @click="openArtBoards">Art boards</span>
        <span @click="changeUrl">Art flow</span>
        <span @click="changeUrl">Director</span>
        <span @click="openArtStore">Art Store</span>
        <span class="active">HotKeys</span>
      </div>

      <!-- This is the Common hotkeys -->
      <span class="label-art label-art--large">Common</span>
      <div class="hotkeysPosition">
        <span class="label-art">Ctrl</span>
        <span class="combination">+</span>
        <span class="label-art">C</span>
        <p class="description">- Copy</p>
      </div>

      <div class="hotkeysPosition">
        <span class="label-art">Ctrl</span>
        <span class="combination">+</span>
        <span class="label-art">X</span>
        <p class="description">- Cut &nbsp;&nbsp;</p>
      </div>

      <div class="hotkeysPosition">
        <span class="label-art">Ctrl</span>
        <span class="combination">+</span>
        <span class="label-art">V</span>
        <p class="description">- Paste</p>
      </div>

      <div class="hotkeysPosition">
        <span class="label-art">Ctrl</span>
        <span class="combination">+</span>
        <span class="label-art">Z</span>
        <p class="description">- Undo</p>
      </div>

      <div class="hotkeysPosition">
        <span class="label-art">Ctrl</span>
        <span class="combination">+</span>
        <span class="label-art">Y</span>
        <p class="description">- Redo</p>
      </div>

    <!-- This is the Audio hotkeys -->
    <span class="label-art label-art--large">Audio</span>
    <div class="hotkeysPosition">
      <span class="label-art largeText">&lArr;</span>
      <p class="description">- Move playhead back&nbsp;&nbsp;&nbsp;</p>
    </div>

    <div class="hotkeysPosition">
      <span class="label-art largeText">&rArr;</span>
      <p class="description">- Move playhead forward</p>
    </div>

    <div class="hotkeysPosition">
      <span class="label-art largeText">&uArr;</span>
      <p class="description">- Volume Up</p>
    </div>

    <div class="hotkeysPosition">
      <span class="label-art largeText">&dArr;</span>
      <p class="description">- Volume Down</p>
    </div>
  <!--This is the Code projects hotkeys-->
  <span class="label-art label-art--large">Code projects</span>
    <div class="hotkeysPosition">
      <span class="label-art">Key</span>
      <span class="combination">+</span>
      <span class="label-art">Key</span>
      <p class="description"> Some text</p>
    </div>

    <div class="hotkeysPosition">
      <span class="label-art">Key</span>
      <span class="combination">+</span>
      <span class="label-art">Key</span>
    <p class="description"> Some text</p>
  </div>

  <!--This is the Spreadsheets hotkeys-->
  <span class="label-art label-art--large">Spreadsheet</span>
    <div class="hotkeysPosition">
      <span class="label-art">Key</span>
      <span class="combination">+</span>
      <span class="label-art">Key</span>
      <p class="description"> Some text</p>
    </div>

    <div class="hotkeysPosition">
      <span class="label-art">Key</span>
      <span class="combination">+</span>
      <span class="label-art">Key</span>
      <p class="description"> Some Text</p>
    </div>
    <!--This is the Video hotkeys-->
    <span class="label-art label-art--large">Video</span>
      <div class="hotkeysPosition">
        <span class="label-art">Key</span>
        <span class="combination">+</span>
        <span class="label-art">Key</span>
        <p class="description"> Some text</p>
      </div>

      <div class="hotkeysPosition">
        <span class="label-art">Key</span>
        <span class="combination">+</span>
        <span class="label-art">Key</span>
        <p class="description"> Some text</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'hotkeys',
  methods: {
    changeUrl () {
      window.location.href = '#/artflow'
    },
    openArtBoards() {
      window.location.href = '#/artboards'
    },
    openArtStore() {
      document.body.classList.add('artstore-open')
    },
    openHotkeys(){
      window.location.href = '#/hotkeys'
    }
  }
}
</script>

<style lang="scss">
.clip {
  max-height: 100vh;
  max-width: 100vw;
  overflow-y: auto;
}
.hotkeys {
  display: flex;
  flex-direction: column;
  padding: 25px;
  align-items: center;
  overflow: auto;
}
.label-art {
  margin-top: 25px;
  border-radius: 50px;
  color: #777;
  background: rgba(0,0,0,.1);
  font-size: 0.7em;
  font-weight: bold;
  text-transform: uppercase;
  align-self: center;
  padding: 4px 7px;
  user-select: none;

  &:first-child {
    margin-top: 0 !important;
  }

  &--large {
    margin-top: 75px;
    font-size: 1em;

    &:before {
      content: '';
      margin-top: -30px;
      position: absolute;
      z-index: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: rgba(163, 128, 128, 0.08);
    }
  }
}
.art {
  max-width: 150px;
  max-height: 150px;
}
.art-collection {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-right: -25px;

  > * {
    margin-top: 25px;
    margin-right: 25px;
    box-shadow: 2px 2px 21px rgba(0,0,0,0.2);
    transform: scale(1,1);
    transition: transform 0.2s;
  }

  > *:hover {
    transform: scale(1.1, 1.1)
  }
  video {
    max-width: 150px;
    max-height: 150px;
    float: left;
  }
  img {
    max-width: 100%;
    float: left;
  }
  .document img {
    margin-top: 10px;
    margin-left: 8px;
    max-width: 90%;
  }
}
.hotkeysPosition{
  margin-top: 3px;
  margin-bottom:  3px;
}
.largeText{
  font-size: large;
}
.description{
  display: inline;
}
</style>
