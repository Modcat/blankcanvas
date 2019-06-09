<template>
  <div class="clip">
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
        <a href="#/environments?mode=graphics"><div
          class="art"
          style="width: 110px; height: 150px; background: white;"
        >
          <img
            src="/static/images/art-canvas.jpg"
            alt=""
          ></div>
        </a>
        <a href="#/environments?mode=graphics"><div
          class="art"
          style="width: 110px; height: 150px; background: white;"
        >
          <img
            src="/static/images/art-canvas.jpg"
            alt=""
          ></div>
        </a>
        <a href="#/environments?mode=graphics"><div
          class="art"
          style="width: 110px; height: 150px; background: white;"
        >
          <img
            src="/static/images/art-canvas.jpg"
            alt=""
          ></div>
        </a>
      </section>
      <span class="label-art">Videos Artboards</span>
      <section class="art-collection">
        <a
          class="art"
          href="#/environments?mode=video"
        >
          <img src="/static/video/honey-thumbnail.png">
        </a>
        <a
          class="art"
          href="#/environments?mode=video"
        >
          <img src="/static/video/honey-thumbnail.png">
        </a>
        <a href="#/environments?mode=video">
          <video
            class="art"
            src="/static/video/honey.mp4"
            autoplay
            loop="loop"
          />
        </a>
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
            style="width: 110px; background: white;"
          >
            <img
              src="/static/images/audio.jpg"
              alt=""
            >
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
          <div
            class="art"
            style="width: 100px; height: 100px; background: url(/static/images/database.jpg) no-repeat white;background-size: auto 100%;"
          />
        </a>
      </section>
      <span class="label-art">Code projects</span>
      <section class="art-collection">
        <a
          v-for="(writer,indexCode) in [1,1,1,1,1,1]"
          :key="indexCode"
          href="#/environments?mode=codeeditor"
        >
          <div
            class="art"
            style="width: 100px; height: 150px; background: url(/static/images/code.jpg) no-repeat white;background-size: auto 100%;"
          />
        </a>
      </section>
      <span class="label-art">Spreadsheet</span>
      <section class="art-collection">
        <a
          v-for="(writer,indexSpreadsheet) in [1,1,1,1,1,1]"
          :key="indexSpreadsheet"
          href="#/environments?mode=spreadsheet"
        >
          <div
            class="art"
            style="width: 100px; height: 150px; background: url(/static/images/excel.jpg) no-repeat white;background-size: auto 100%;"
          />
        </a>
      </section>
    </section>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Artboards',
  mounted() {

    // Github
    const simpleGit = require('simple-git')('/Users/Lawrence/Documents/blankcanvas/')
    // If it doesn't exists clone
    // simpleGit.clone('https://github.com/Modcat/blancanvas-project')
    simpleGit.cwd('/Users/Lawrence/Documents/blankcanvas/blancanvas-project')
    
  }
}
</script>

<style lang="scss" scoped>
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
.art {
  display: block;
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
</style>
