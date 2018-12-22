<template>
  <section @click="change" class="artboards">
    <div class="tabs">
      <span class="active">Art boards</span>
      <span @click="changeUrl">Art flow</span>
      <span @click="changeUrl">Director</span>
    </div>
    <div class="cards">
      <div class="card">
        <img src="/static/images/vr-logo.png" alt="">
        <span class="label-art">John</span>
      </div>
      <div class="card">
        <img src="/static/images/XBOX.png" alt="">
        <span class="label-art">Joane</span>
      </div>
      <div class="card">
        <img src="/static/images/Ubuntu.png" style="width:50px; margin: 0 auto;" alt="">
        <span class="label-art">Jamie</span>
      </div>
    </div>
    <span class="label-art">My Artboards</span>
    <section class="art-collection">
      <a href="#/Graphics"><div class="art" style="width: 110px; height: 150px; background: white;">
        <img src="/static/images/art-canvas.jpg" alt=""></div></a>
      <div class="art" style="width: 110px; height: 150px; background: white;">
        <img src="/static/images/art-canvas.jpg" alt="">
      </div>
      <div class="art" style="width: 110px; height: 150px; background: white;">
        <img src="/static/images/art-canvas.jpg" alt="">
      </div>
    </section>
    <span class="label-art">Website Pages</span>
    <section class="art-collection">
      <a v-for="(writer,indexWeb) in [1,1,1]" :key="indexWeb" href="#/web">
        <div  class="art" style="width: 150px; height: 120px; background: url(/static/images/webpage.jpg) no-repeat white;background-size: auto 100%;"/>
      </a>
    </section>
    <span class="label-art">3D VR</span>
    <section class="art-collection">
      <a v-for="(writer,index3dvr) in [1,1,1]" :key="index3dvr" href="#/3dvr">
        <div class="art" style="width: 150px; height: 120px; background: url(/static/images/vr.jpg) no-repeat white;background-size: auto 100%;"/>
      </a>
    </section>
    <span class="label-art">3D AR</span>
    <section class="art-collection">
      <a v-for="(writer,index3dar) in [1,1,1]" :key="index3dar" href="#/3dar">
        <div class="art" style="width: 150px; height: 120px; background: url(/static/images/vr.jpg) no-repeat white;background-size: auto 100%;"/>
      </a>
    </section>
    <span class="label-art">Writer Art</span>
    <section class="art-collection">
      <a v-for="(writer,indexWriter) in [1,1,1,1,1,1,1,1,1,1,1,1,1,1]" :key="indexWriter" href="#/markdownwriter">
        <div  class="art document" style="width: 110px; height: 150px; background: white;">
          <img src="/static/images/document.png" alt="">
        </div>
      </a>
    </section>
    <span class="label-art">Slides and presentations</span>
    <section class="art-collection">
      <a v-for="(writer,indexPP) in [1,1,1]" :key="indexPP" href="#/powerpoint">
        <div class="art" style="width: 150px;background: white;">
          <img src="/static/images/pp.png" alt="">
        </div>
      </a>
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
</template>

<script>
export default {
  name: 'Artboards',
  methods: {
    change () {
      window.modal.$shareStore.target = 'Artboard'
    },
    changeUrl () {
      window.location.href = '#/artflow'
    }
  }
}
</script>

<style lang="scss">
.artboards {
  display: flex;
  flex-direction: column;
  padding: 25px;
  align-items: center;
  overflow-x: hidden;
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

<style lang="scss" scoped>
.cards {
  display: flex;
  justify-content: center;
  .card {
    display: flex;
    flex-direction: column;
    margin: 25px 25px 25px 0;
    background: rgba(0,0,0,0.2);
    padding: 15px;
    border-radius: 3px;
    width: 120px;
    text-align: center;
    img {
      max-width: 100%;
      width: auto;
      height: auto;
      max-height: 150px;
    }
    span {
      color: white;
      a {
        text-decoration: none;
        color: inherit;
      }
    }
    &:nth-child(1) {
      background: #ffcf00;
    }
    &:nth-child(2) {
      background: #ff9641;
    }
    &:nth-child(3) {
      background: #e77ef3;
    }
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
