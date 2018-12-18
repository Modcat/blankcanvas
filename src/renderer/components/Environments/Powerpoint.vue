<template>
  <div @click="change" class="three-column">
    <section class="artboards">
      <span class="label-art label-art--large">Art Boards</span>
      <section class="art-collection">
        <a style="z-index:3;" href="#/Graphics"><div class="art" style="width: 65px; height: 150px; background: white;"></div></a>
        <a style="z-index:2;" href="#/"><div class="art" style="z-index: 1;width: 135px; height: 135px; background: white;"></div></a>
        <a style="z-index:1;" href="#/"><div class="art" style="z-index: 0;width: 100px; height: 67px; background: white;"></div></a>
      </section>
      <span class="label-art">Website Pages</span>
      <section class="art-collection">
        <a style="z-index:3;" href="#/Graphics"><div class="art" style="width: 100px; height: 150px; background: white;"></div></a>
        <a style="z-index:2;" href="#/"><div class="art" style="width: 100px; height: 150px; background: white;"></div></a>
        <a style="z-index:1;" href="#/"><div class="art" style="width: 100px; height: 150px; background: white;"></div></a>
      </section>
      <span class="label-art">Writer Art</span>
      <section class="art-collection">
        <a style="z-index:14;" href="#/markdownwriter"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
        <a style="z-index:13;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
        <a style="z-index:12;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
        <a style="z-index:11;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
        <a style="z-index:10;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
        <a style="z-index:9;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
        <a style="z-index:8;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
        <a style="z-index:7;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
        <a style="z-index:6;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
        <a style="z-index:5;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
        <a style="z-index:4;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
        <a style="z-index:3;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
        <a style="z-index:2;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
        <a style="z-index:1;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
      </section>
      <span class="label-art">Slides and presentations</span>
      <section class="art-collection">
        <a style="z-index:3;" href="#/powerpoint"><div class="art" style="width: 150px; height: 150px; background: white;"></div></a>
        <a style="z-index:2;" href="#/"><div class="art" style="width: 150px; height: 150px; background: white;"></div></a>
        <a style="z-index:1;" href="#/"><div class="art" style="width: 150px; height: 150px; background: white;"></div></a>
      </section>
      <span class="label-art label-art--large">Attached Files</span>
      <span class="label-art">Videos</span>
      <section class="art-collection">
        <a style="z-index:3;" href="#/video"><div class="art" style="width: 150px; height: 98px; background: white;"></div></a>
        <a style="z-index:2;" href="#/"><div class="art" style="width: 150px; height: 98px; background: white;"></div></a>
        <a style="z-index:1;" href="#/"><div class="art" style="width: 150px; height: 98px; background: white;"></div></a>
      </section>
      <span class="label-art">Databases</span>
      <section class="art-collection">
        <a style="z-index:3;" href="#/database"><div class="art" style="width: 100px; height: 150px; background: white;"></div></a>
        <a style="z-index:2;" href="#/"><div class="art" style="width: 100px; height: 150px; background: white;"></div></a>
        <a style="z-index:1;" href="#/"><div class="art" style="width: 100px; height: 150px; background: white;"></div></a>
      </section>
      <span class="label-art">Code projects</span>
      <section class="art-collection">
        <a style="z-index:3;" href="#/codeeditor"><div class="art" style="width: 100px; height: 150px; background: white;"></div></a>
        <a style="z-index:2;" href="#/"><div class="art" style="width: 100px; height: 150px; background: white;"></div></a>
        <a style="z-index:1;" href="#/"><div class="art" style="width: 100px; height: 150px; background: white;"></div></a>
      </section>
      <span class="label-art">Excel</span>
      <section class="art-collection">
        <a style="z-index:3;" href="#/excel"><div class="art" style="width: 135px; height: 135px; background: white;"></div></a>
        <a style="z-index:2;" href="#/"><div class="art" style="width: 135px; height: 135px; background: white;"></div></a>
        <a style="z-index:1;" href="#/"><div class="art" style="width: 135px; height: 135px; background: white;"></div></a>
      </section>
    </section>

    <!-- Slide for presentation -->

    <section class="slides">
      <span class="label-art label-art--large slide-thread">Slides</span>
      <section class="art-collection">
        <a style="z-index:17;" href="#/Graphics"><div class="art" style="width: 65px; height: 150px; background: white;"></div></a>
        <a style="z-index:16;" href="#/"><div class="art" style="z-index: 1;width: 135px; height: 135px; background: white;"></div></a>
        <a style="z-index:15;" href="#/"><div class="art" style="z-index: 0;width: 100px; height: 67px; background: white;"></div></a>
        <a style="z-index:14;" href="#/markdownwriter"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
        <a style="z-index:13;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
        <a style="z-index:12;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
        <a style="z-index:11;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
        <a style="z-index:10;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
        <a style="z-index:9;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
        <a style="z-index:8;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
        <a style="z-index:7;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
        <a style="z-index:6;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
        <a style="z-index:5;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
        <a style="z-index:4;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
        <a style="z-index:3;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
        <a style="z-index:2;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
        <a style="z-index:1;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
      </section>
    </section>

    <!-- Preview of slides -->

    <section class="preview">
      <span class="label-art label-art--large">Preview</span>
      <div class="preview-slide"></div>
      <div class="bottom-frame">
        <ul class="step-animations">
          <li class="active">Animation</li>
          <li>Animation</li>
          <li>Animation</li>
          <li>Animation</li>
          <li>Animation</li>
          <li>Animation</li>
          <li>Animation</li>
          <li>Animation</li>
          <li>Animation</li>
          <li>Animation</li>
          <li>Animation</li>
          <li>Animation</li>
          <li>Animation</li>
          <li>Animation</li>
          <li>Animation</li>
          <li>Animation</li>
          <li>Animation</li>
          <li>Animation</li>
          <li>Animation</li>
          <li>Animation</li>
          <li>Animation</li>
          <li>Animation</li>
          <li>Animation</li>
          <li>Animation</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Powerpoint',
  methods: {
    change () {
      window.modal.$shareStore.target = 'PowerPoint'
    }
  }
}
</script>

<style lang="scss" scoped>
.three-column {
  display: flex;
  flex-direction: row;
  perspective: 1000px;
  max-height: 100vh;
  overflow: hidden;

  > * {
    max-height: 100vh;
    overflow: auto;
    box-sizing: border-box;
  }

  .artboards {
    width: 25%;
    padding-bottom: 50px;
  }
  .slides {
    text-align: center;
    width: 25%;
  }
  .slides {
    padding: 25px;
    background: rgba(255, 255, 255, 0.2);
  }
  .preview {
    padding: 25px 0 0 0;
    width: 50%;
    background: rgba(255, 255, 255, 0.4);
  }
}
.label-art {
  margin-bottom: 15px;
}
.label-art--large {
  margin-top: 25px;
  margin-bottom: 0;

  &:before {
    display: none !important;
  }
}
.art-collection {
  display: block;
  transform-style: preserve-3d;
  flex-wrap: nowrap;
  text-align: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    margin: 0;
    position: relative;
    margin-top: -30px;
    box-shadow: none;

    &:first-child {
      margin-top: 0 !important;
    }

    &:last-child .art {
      box-shadow: 22px 22px 14px rgba(0, 0, 0, 0.11);
    }
  }

  .art {
    position: relative;
    // margin: 0 auto;
    transform: rotateZ(50deg) scale(0.7,0.7);
    box-shadow: 42px 42px 21px rgba(0, 0, 0, 0.1);
    max-width: 100%;
    max-height: 100%;
  }
}
.slides::before {
  content: '';
  position: fixed;
  z-index: 0;
  top: 46px;
  width: 1px;
  bottom: 0;
  left: 37.4%;
  margin-left: -1px;
  background: rgba(0,0,0,0.07);
}
.slides .art-collection {
  width: 150px;
  margin: 0 auto;
}
.preview {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .label-art--large {
    margin-bottom: 0;
  }

  .preview-slide {
    background: rgba(255, 255, 255, .65);
    width: 80%;
    height: 0;
    padding-bottom: 45%;
    box-shadow: 1px 1px 12px rgba(0,0,0,0.1);
  }

  .bottom-frame {
    width: 100%;
    justify-content: flex-end;
    height: 45vh;
    background: rgba(255, 255, 255, 0.15);
    overflow-x: hidden;
    overflow-y: auto;
  }

  .step-animations {
    list-style-type: decimal;
    padding: 0 0 0 30px;
    margin: 0;
    color: #777;
    font-size: 13px;
    text-align: left;

    li {
      position: relative;
      padding: 10px 10px 12px 10px;
      white-space: nowrap;
      text-overflow: ellipsis;
      user-select: none;
      z-index: 2;

      &:before {
        content: '';
        display: block;
        position: absolute;
        left: -30px;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 0;
        opacity: 0;
        transition: opacity 0.2s;
        background: rgba(255, 134, 34, 0.45);
      }

      &.active:before {
        opacity: 1;
      }

      &:after {
        content: '';
        display: block;
        position: absolute;
        height: 2px;
        left: -30px;
        right: -10px;
        bottom: 0;
        background: rgba(0,0,0,0.03);
      }
    }
  }
}
</style>