<!--This is the Hotkey view.
      We store all the hotkeys in here.
      Todo: This is still work in progress.
-->
<template>
  <div class="hotkeys">
    <!-- This is the Common hotkeys -->
    <span class="label-art label-art--large">Global</span>
    
    <div class="hotkeysPosition">
      <span class="label-art">Shift</span>
      <span class="combination">+</span>
      <span class="label-art">Spacebar</span>
      <p class="description">
        This hotkey will let you go to the previous environment
      </p>
    </div>

    <div class="hotkeysPosition">
      <span class="label-art">Ctrl</span>
      <span class="combination">+</span>
      <span class="label-art">C</span>
      <p class="description">
        Press this to copy the currently selected asset or assets to the clipboard
      </p>
    </div>

    <div class="hotkeysPosition">
      <span class="label-art">Ctrl</span>
      <span class="combination">+</span>
      <span class="label-art">X</span>
      <p class="description">
        Press this to cut the currently selected asset or assets into the clipboard
      </p>
    </div>

    <div class="hotkeysPosition">
      <span class="label-art">Ctrl</span>
      <span class="combination">+</span>
      <span class="label-art">V</span>
      <p class="description">
        Paste out the asset or assets to the artboard
      </p>
    </div>

    <div class="hotkeysPosition">
      <span class="label-art">Ctrl</span>
      <span class="combination">+</span>
      <span class="label-art">Z</span>
      <p class="description">
        Press to undo and step back in the document history
      </p>
    </div>

    <div class="hotkeysPosition">
      <span class="label-art">Ctrl</span>
      <span class="combination">+</span>
      <span class="label-art">Y</span>
      <p class="description">
        Press to redo and step forward in the document history
      </p>
    </div>

    <!-- This is the Audio hotkeys -->
    <span class="label-art label-art--large">Audio</span>
    <div class="hotkeysPosition">
      <span class="label-art largeText">&lArr;</span>
      <p class="description">
        - Move playhead back&nbsp;&nbsp;&nbsp;
      </p>
    </div>

    <div class="hotkeysPosition">
      <span class="label-art largeText">&rArr;</span>
      <p class="description">
        - Move playhead forward
      </p>
    </div>

    <div class="hotkeysPosition">
      <span class="label-art largeText">&uArr;</span>
      <p class="description">
        - Volume Up
      </p>
    </div>

    <div class="hotkeysPosition">
      <span class="label-art largeText">&dArr;</span>
      <p class="description">
        - Volume Down
      </p>
    </div>
    <!--This is the Code projects hotkeys-->
    <span class="label-art label-art--large">Code projects</span>
    <div class="hotkeysPosition">
      <span class="label-art">Key</span>
      <span class="combination">+</span>
      <span class="label-art">Key</span>
      <p class="description">
        Some text
      </p>
    </div>

    <div class="hotkeysPosition">
      <span class="label-art">Key</span>
      <span class="combination">+</span>
      <span class="label-art">Key</span>
      <p class="description">
        Some text
      </p>
    </div>

    <!--This is the Spreadsheets hotkeys-->
    <span class="label-art label-art--large">Spreadsheet</span>
    <div class="hotkeysPosition">
      <span class="label-art">Key</span>
      <span class="combination">+</span>
      <span class="label-art">Key</span>
      <p class="description">
        Some text
      </p>
    </div>

    <div class="hotkeysPosition">
      <span class="label-art">Key</span>
      <span class="combination">+</span>
      <span class="label-art">Key</span>
      <p class="description">
        Some Text
      </p>
    </div>
    <!--This is the Video hotkeys-->
    <span class="label-art label-art--large">Video</span>
    <div class="hotkeysPosition">
      <span class="label-art">Key</span>
      <span class="combination">+</span>
      <span class="label-art">Key</span>
      <p class="description">
        Some text
      </p>
    </div>

    <div class="hotkeysPosition">
      <span class="label-art">Key</span>
      <span class="combination">+</span>
      <span class="label-art">Key</span>
      <p class="description">
        Some text
      </p>
    </div>
    <div class="hotkeysPosition" />
  </div>
</template>

<script>
export default {
  name: 'Hotkeys',
  methods: {
    openArtflow() {
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
    },
    openBountyBoard() {
      window.location.href = '#/bounty'
    }
  }
}
</script>

<style lang="less" scoped>
.tabs {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0 0 0;
  width: 100%;
}
.label-art {
  margin-top: 30px;
}
.hotkeys {
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  overflow-x: hidden;
  overflow-y: auto;
  justify-content: center;

  .tabs,
  .hotkeysPosition {
    width: 100%;
  }
}
.hotkeysPosition {
  display: flex;
  width: 100%;
  padding-bottom: 15px;
  min-height: 20px;
  align-items: center;
  justify-content: center;
  .label-art {
    margin: 0;
    border-radius: 3px;
  }
}
.combination {
  margin: 0 5px;
}
.description {
  margin-left: 15px;
  width: 100%;
  max-width: 30%;
}
</style>
