<template>
  <div class="clip">
    <section class="artboards">
      <div class="tabs">
        <span class="active">Art boards</span>
        <span @click="changeUrl">Art flow</span>
        <span @click="changeUrl">Director</span>
      </div>
      <span class="label-art">Connected</span>
      <div class="cards" style="margin-bottom: 0px;">
        <div class="card">
          <img src="/static/images/vr-logo.png" alt="">
          <span class="label-art">John</span>
        </div>
        <div class="card">
          <img src="/static/images/XBOX.png" alt="">
          <span class="label-art">Joane</span>
        </div>
        <div class="card">
          <img src="/static/images/Ubuntu.png" alt="">
          <span class="label-art">Jamie</span>
        </div>
      </div>
      <span class="label-art">My Artboards</span>
      <section class="art-collection">
        <a href="#/Environments"><div class="art" style="width: 110px; height: 150px; background: white;">
          <img src="/static/images/art-canvas.jpg" alt=""></div></a>
        <div class="art" style="width: 110px; height: 150px; background: white;">
          <img src="/static/images/art-canvas.jpg" alt="">
        </div>
        <div class="art" style="width: 110px; height: 150px; background: white;">
          <img src="/static/images/art-canvas.jpg" alt="">
        </div>
      </section>
      <span class="label-art label-art--large">Attached Files</span>
      <span class="label-art">Videos</span>
      <section class="art-collection">
        <a class="art" href="#/video">
          <img src="/static/video/honey-thumbnail.png" />
        </a>
        <a class="art" href="#/video">
          <img src="/static/video/honey-thumbnail.png" />
        </a>
        <a href="#/video">
          <video class="art" src="/static/video/honey.mp4" autoplay loop="loop"></video>
        </a>
      </section>
      <span class="label-art">Audio</span>
      <section class="art-collection">
        <a v-for="(writer,indexAudio) in [1,1,1]" :key="indexAudio" href="#/audio">
          <div  class="art" style="width: 110px; background: white;">
            <img src="/static/images/audio.jpg" alt="">
          </div>
        </a>
      </section>
      <span class="label-art">Databases</span>
      <section class="art-collection">
        <a v-for="(writer,indexDB) in [1,1,1,1,1,1]" :key="indexDB" href="#/database">
          <div  class="art" style="width: 100px; height: 100px; background: url(/static/images/database.jpg) no-repeat white;background-size: auto 100%;"/>
        </a>
      </section>
      <span class="label-art">Code projects</span>
      <section class="art-collection">
        <a v-for="(writer,indexCode) in [1,1,1,1,1,1]" :key="indexCode" href="#/codeeditor">
          <div  class="art" style="width: 100px; height: 150px; background: url(/static/images/code.jpg) no-repeat white;background-size: auto 100%;"/>
        </a>
      </section>
      <span class="label-art">Spreadsheet</span>
      <section class="art-collection">
        <a v-for="(writer,indexSpreadsheet) in [1,1,1,1,1,1]" :key="indexSpreadsheet" href="#/excel">
          <div  class="art" style="width: 100px; height: 150px; background: url(/static/images/excel.jpg) no-repeat white;background-size: auto 100%;"/>
        </a>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Artboards',
  methods: {
    changeUrl () {
      window.location.href = '#/artflow'
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
.artboards {
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
</style>