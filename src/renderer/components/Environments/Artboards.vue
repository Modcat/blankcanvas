<template>
  <div class="clip">
    <!-- Document information -->
    <section class="document-info">
      <button  @click="$store.dispatch('saveDocument')">Document Information</button>
      <div class="expand">
        <div class="input">
          <label class="tag">File Path*</label>
          <input type="text" disabled :value="$store.state.yup" style="padding-left: 65px;">
        </div>
        <div class="input">
          <label class="tag">Github URL</label>
          <input type="text" style="padding-left: 70px;">
        </div>
        <h3>Database</h3>
        <section class="database-info">
          <div class="row">
            <div class="input">
              <label class="tag">Host</label>
              <input type="text" style="padding-left:40px;">
            </div>
            <div class="input">
              <label class="tag">Port</label>
              <input type="text" style="padding-left:40px;">
            </div>
          </div>
          <div class="input">
            <label class="tag">User</label>
            <input type="text" style="padding-left:40px;">
          </div>
          <div class="input">
            <label class="tag">Password</label>
            <input type="password" style="padding-left:67px;">
          </div>
          <div class="input">
            <label class="tag">Database Name</label>
            <input type="text" style="padding-left:92px;">
          </div>
        </section>
      </div>
    </section>
    
    <section class="artboards">
      <span class="label-art">Connected</span>
      <div
        class="cards"
        style="margin-bottom: 0px;"
      >
        <div class="card">
          <img
            src="/static/images/vr-logo.png"
            alt=""
          >
          <span class="label-art">John</span>
        </div>
        <div class="card">
          <img
            src="/static/images/XBOX.png"
            alt=""
          >
          <span class="label-art">Joane</span>
        </div>
        <div class="card">
          <img
            src="/static/images/Ubuntu.png"
            alt=""
          >
          <span class="label-art">Jamie</span>
        </div>
      </div>
      <span class="label-art">Graphics Artboards</span>
      <section class="art-collection">
        <a
          v-for="(graphic,indexGraphic) in [1,1,1]"
          :key="indexGraphic"
          href="#/environments?mode=graphics"
        >
          <div class="art" style="width: 110px; max-height: 220px; background: white;">
            <img src="/static/images/art-canvas.jpg">
            <label>Artboard</label>
          </div>
        </a>
      </section>
      <span class="label-art">Videos Artboards</span>
      <section class="art-collection">
        <a
          v-for="(video,indexVideo) in [1,1,1]"
          :key="indexVideo"
          class="art"
          href="#/environments?mode=video"
        >
          <div class="art">
            <img src="/static/video/honey-thumbnail.png">
            <label>Video.webm</label>
          </div>
        </a>
        <!-- <a href="#/environments?mode=video">
          <video
            class="art"
            src="/static/video/honey.mp4"
            autoplay
            loop="loop"
          />
        </a> -->
      </section>
      <span class="label-art label-art--large">Attached Files</span>
      <span class="label-art">Audio</span>
      <section class="art-collection">
        <a
          v-for="(writer,indexAudio) in [1,1,1]"
          :key="indexAudio"
          href="#/audio"
        >
          <a
            href="#/environments?mode=audio"
            class="art"
          >
            <div class="art">
              <img src="../../assets/images/audio-icon.svg" width="60" alt="database">
              <label>Audio File.wav</label>
          </div>
          </a>
        </a>
      </section>
      <span class="label-art">Databases</span>
      <section class="art-collection">
        <a
          v-for="(writer,indexDB) in [1,1,1,1,1,1]"
          :key="indexDB"
          href="#/environments?mode=database"
        >
          <div class="art">
            <img src="../../assets/images/database-icon.svg" width="60" alt="database">
            <label>Postgre DB</label>
          </div>
        </a>
      </section>
      <span class="label-art">Code projects</span>
      <section class="art-collection">
        <a
          v-for="(writer,indexCode) in [1,1,1,1,1,1]"
          :key="indexCode"
          href="#/environments?mode=codeeditor"
        >
          <div class="art">
              <img src="../../assets/images/writer-icon.svg" width="60" alt="code file">
              <label>Component.vue</label>
          </div>
        </a>
      </section>
      <span class="label-art">Spreadsheet</span>
      <section class="art-collection">
        <a
          v-for="(writer,indexSpreadsheet) in [1,1,1,1,1,1]"
          :key="indexSpreadsheet"
          href="#/environments?mode=spreadsheet"
        >
          <div class="art">
              <img src="../../assets/images/spreadsheet-icon.svg" width="60" alt="database">
              <label>Spreadsheet</label>
          </div>
        </a>
      </section>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

/* eslint-disable */
export default {
  name: 'Artboards',
  mounted() {
    // Github
    const simpleGit = require('simple-git')('/Users/Lawrence/Documents/blankcanvas/')
    // If it doesn't exists clone
    // simpleGit.clone('https://github.com/Modcat/blancanvas-project')
    simpleGit.cwd('/Users/Lawrence/Documents/blankcanvas/blancanvas-project')
    
  },
  methods: {
    ...mapActions([
      'ssd', // map `this.increment()` to `this.$store.dispatch('increment')`
    ]),
    // ssd() {
    //   console.log(this.$store.dispatch('ssd', 'YUP'), this.$store.state.yup)
    // }
  }
}
</script>

<style lang="scss" scoped>
.document-info {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 35px auto 0 auto;
  background: #eee;
  padding: 25px;
  border-radius: 4px;

  button {
    margin-bottom: 10px;
    background: white;
    box-shadow: none;
    outline: none;
    color: #444;
    align-self: center;
    justify-self: center;

    &:active {
      background: #777;
      color: white;
    }
  }

  h3 {
    margin-top: 15px;
    margin-bottom: 0;
    text-transform: uppercase;
    font-size: 10px;
    user-select: none;
  }

  .row {
    > *:first-child {
      margin-right: 10px;
    }

    .input {
      flex-grow: 1;
    }

  }

  .tag {
    position: relative;
    background: #aaa;
    border-radius: 2px;
    color: white;
    padding: 3px 5px;
    bottom: -19px;
    letter-spacing: 0.01em;
    left: 3px;
    font-size: 9px;
    line-height: 1em;
    text-transform: uppercase;
    font-weight: 600;
    user-select: none;
  }

  input {
    flex-grow: 1;
    width: 100%;
    background: white;
    box-shadow: none;
    color: #555;
  }
}
.clip {
  max-height: calc(100vh - 52px);
  max-width: 100vw;
  overflow-y: auto;
  overflow-x: hidden;
}
.artboards {
  display: flex;
  flex-direction: column;
  padding: 25px;
  align-items: center;
  overflow: auto;
  max-width: 100vw;
  overflow-x: hidden;
}
a {
  text-decoration: none;
  cursor: default;

  &:hover {
    .art {
      label {
        background: #eee;
      }
    }
  }
}
.art {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 150px;
  max-height: 150px;
  text-decoration: none;

  label {
    text-decoration: none;
    color: #333;
    max-width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 3px 10px;
    border-radius: 50px;
    margin-top: 15px;
    letter-spacing: 0.02em;
    font-size: 10px;
    transition: background-color 0.1s;
  }
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
</style>
