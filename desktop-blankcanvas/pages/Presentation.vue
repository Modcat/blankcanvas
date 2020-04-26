<template>
  <div class="Presentation">
    <div class="left-draw draw">
      <!-- Presentation -->
      <div :class="['presenation', { 'on': mode === 'presentation' }]">
        <section class="artboards">
          <span class="label-art label-art--large">Art Boards</span>
          <section class="art-collection">
            <a
              style="z-index:3;"
              href="#/Graphics"
            ><div
              class="art"
              style="width: 65px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:2;"
              href="#/"
            ><div
              class="art"
              style="z-index: 1;width: 135px; height: 135px; background: white;"
            /></a>
            <a
              style="z-index:1;"
              href="#/"
            ><div
              class="art"
              style="z-index: 0;width: 100px; height: 67px; background: white;"
            /></a>
          </section>
          <span class="label-art">Website Pages</span>
          <section class="art-collection">
            <a
              style="z-index:3;"
              href="#/Graphics"
            ><div
              class="art"
              style="width: 100px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:2;"
              href="#/"
            ><div
              class="art"
              style="width: 100px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:1;"
              href="#/"
            ><div
              class="art"
              style="width: 100px; height: 150px; background: white;"
            /></a>
          </section>
          <span class="label-art">Writer Art</span>
          <section class="art-collection">
            <a
              style="z-index:14;"
              href="#/markdownwriter"
            ><div
              class="art"
              style="width: 110px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:13;"
              href="#/"
            ><div
              class="art"
              style="width: 110px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:12;"
              href="#/"
            ><div
              class="art"
              style="width: 110px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:11;"
              href="#/"
            ><div
              class="art"
              style="width: 110px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:10;"
              href="#/"
            ><div
              class="art"
              style="width: 110px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:9;"
              href="#/"
            ><div
              class="art"
              style="width: 110px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:8;"
              href="#/"
            ><div
              class="art"
              style="width: 110px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:7;"
              href="#/"
            ><div
              class="art"
              style="width: 110px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:6;"
              href="#/"
            ><div
              class="art"
              style="width: 110px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:5;"
              href="#/"
            ><div
              class="art"
              style="width: 110px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:4;"
              href="#/"
            ><div
              class="art"
              style="width: 110px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:3;"
              href="#/"
            ><div
              class="art"
              style="width: 110px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:2;"
              href="#/"
            ><div
              class="art"
              style="width: 110px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:1;"
              href="#/"
            ><div
              class="art"
              style="width: 110px; height: 150px; background: white;"
            /></a>
          </section>
          <span class="label-art">Slides and presentations</span>
          <section class="art-collection">
            <a
              style="z-index:3;"
              href="#/powerpoint"
            ><div
              class="art"
              style="width: 150px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:2;"
              href="#/"
            ><div
              class="art"
              style="width: 150px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:1;"
              href="#/"
            ><div
              class="art"
              style="width: 150px; height: 150px; background: white;"
            /></a>
          </section>
          <span class="label-art label-art--large">Attached Files</span>
          <span class="label-art">Videos</span>
          <section class="art-collection">
            <a
              style="z-index:3;"
              href="#/video"
            ><div
              class="art"
              style="width: 150px; height: 98px; background: white;"
            /></a>
            <a
              style="z-index:2;"
              href="#/"
            ><div
              class="art"
              style="width: 150px; height: 98px; background: white;"
            /></a>
            <a
              style="z-index:1;"
              href="#/"
            ><div
              class="art"
              style="width: 150px; height: 98px; background: white;"
            /></a>
          </section>
          <span class="label-art">Databases</span>
          <section class="art-collection">
            <a
              style="z-index:3;"
              href="#/database"
            ><div
              class="art"
              style="width: 100px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:2;"
              href="#/"
            ><div
              class="art"
              style="width: 100px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:1;"
              href="#/"
            ><div
              class="art"
              style="width: 100px; height: 150px; background: white;"
            /></a>
          </section>
          <span class="label-art">Code projects</span>
          <section class="art-collection">
            <a
              style="z-index:3;"
              href="#/codeeditor"
            ><div
              class="art"
              style="width: 100px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:2;"
              href="#/"
            ><div
              class="art"
              style="width: 100px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:1;"
              href="#/"
            ><div
              class="art"
              style="width: 100px; height: 150px; background: white;"
            /></a>
          </section>
          <span class="label-art">Excel</span>
          <section class="art-collection">
            <a
              style="z-index:3;"
              href="#/excel"
            ><div
              class="art"
              style="width: 135px; height: 135px; background: white;"
            /></a>
            <a
              style="z-index:2;"
              href="#/"
            ><div
              class="art"
              style="width: 135px; height: 135px; background: white;"
            /></a>
            <a
              style="z-index:1;"
              href="#/"
            ><div
              class="art"
              style="width: 135px; height: 135px; background: white;"
            /></a>
          </section>
        </section>

        <!-- Slide for presentation -->

        <section class="slides">
          <span class="label-art label-art--large slide-thread">Slides</span>
          <section class="art-collection">
            <a
              style="z-index:17;"
              href="#/Graphics"
            ><div
              class="art"
              style="width: 65px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:16;"
              href="#/"
            ><div
              class="art"
              style="z-index: 1;width: 135px; height: 135px; background: white;"
            /></a>
            <a
              style="z-index:15;"
              href="#/"
            ><div
              class="art"
              style="z-index: 0;width: 100px; height: 67px; background: white;"
            /></a>
            <a
              style="z-index:14;"
              href="#/markdownwriter"
            ><div
              class="art"
              style="width: 110px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:13;"
              href="#/"
            ><div
              class="art"
              style="width: 110px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:12;"
              href="#/"
            ><div
              class="art"
              style="width: 110px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:11;"
              href="#/"
            ><div
              class="art"
              style="width: 110px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:10;"
              href="#/"
            ><div
              class="art"
              style="width: 110px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:9;"
              href="#/"
            ><div
              class="art"
              style="width: 110px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:8;"
              href="#/"
            ><div
              class="art"
              style="width: 110px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:7;"
              href="#/"
            ><div
              class="art"
              style="width: 110px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:6;"
              href="#/"
            ><div
              class="art"
              style="width: 110px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:5;"
              href="#/"
            ><div
              class="art"
              style="width: 110px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:4;"
              href="#/"
            ><div
              class="art"
              style="width: 110px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:3;"
              href="#/"
            ><div
              class="art"
              style="width: 110px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:2;"
              href="#/"
            ><div
              class="art"
              style="width: 110px; height: 150px; background: white;"
            /></a>
            <a
              style="z-index:1;"
              href="#/"
            ><div
              class="art"
              style="width: 110px; height: 150px; background: white;"
            /></a>
          </section>
        </section>
      </div>
    <!-- Graphics, Presentation or Code -->
      <div
        v-if="mode.match(/graphics|code|presentation/ig)"
        :class="['document', { 'last-canvas': linkedCanvas }]"
      >
        <a
          href="#/audio"
          class="audio"
        />
        <a
          href="#/database"
          class="database"
        />
        <a
          href="#/excel"
          class="excel"
        />
        <a
          href="#/video"
          class="video"
        />
        <a
          href="#/codeeditor"
          class="code"
        />
        <div
          class="linked-canvas"
          @click="linkedCanvas = true"
        />
        <div id="mainCanvas">
          <img
            class="desktop"
            src="/static/images/art-canvas.svg"
            alt="Vector Graphics"
          >
          <img
            class="mobile"
            src="/static/images/art-canvas-600.svg"
            alt="Vector Graphics"
          >
          <!-- <div id="webglCanvas"/> -->
        </div>
      </div>
      <div
        v-if="mode === 'graphics'"
        :class="['document', 'doc2', { linkedCanvas }]"
      >
        <a
          href="#/audio"
          class="audio"
        />
        <a
          href="#/database"
          class="database"
        />
        <a
          href="#/excel"
          class="excel"
        />
        <a
          href="#/video"
          class="video"
        />
        <a
          href="#/codeeditor"
          class="code"
        />
        <div
          class="linked-canvas"
          @click="linkedCanvas = false"
        />
        <div id="mainCanvas">
          <img
            src="/static/images/art-canvas.svg"
            alt="Vector Graphics"
          >
        </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Presentation'
}
</script>