<template>
  <section id="Volenteer">
    <div class="clip">
      <div class="skills">
        <h2>Persons of Interest</h2>
        <p>Here are a list of skills we are looking for, from coders, marketers, designers and illustrators contribute to one of the largest and most exiting projects of our century. <strong>Please click the skills you have and then</strong></p>
        <hr>
        <ul class="skills-checklist">
          <li><input type="checkbox"/> WebGL 2.0</li>
          <li><input type="checkbox"/> Algorithim creators</li>
          <li><input type="checkbox"/> ThreeJS</li>
          <li><input type="checkbox"/> NUXT</li>
          <li><input type="checkbox"/> Vue</li>
          <li><input type="checkbox"/> Electron</li>
          <li><input type="checkbox"/> C, C#, C++ or Haxe</li>
          <li><input type="checkbox"/> OpenGL ES 3.0</li>
          <li><input type="checkbox"/> Secuirty</li>
          <li><input type="checkbox"/> Ecommerce</li>
          <li><input type="checkbox"/> Software Architects</li>
          <li><input type="checkbox"/> AR &amp; VR</li>
          <li><input type="checkbox"/> Illustrators</li>
          <li><input type="checkbox"/> UI &amp; UX</li>
          <li><input type="checkbox"/> HTML / CSS</li>
          <li><input type="checkbox"/> Code Reviewers</li>
          <li><input type="checkbox"/> Marketing</li>
          <li><input type="checkbox"/> Documentation writer</li>
          <li><input type="checkbox"/> Translators</li>
          <li><input type="checkbox"/> Q&amp;A's</li>
        </ul>
      </div>
      <!-- Form -->
      <section class="submission-form">
        <h3>Submit for volenteering</h3>
          <div class="row">
            <div class="input">
              <label class="tag">Email*</label>
              <input type="text" style="padding-left: 55px;">
            </div>
            <div class="input">
              <label class="tag">Bounty ID</label>
              <input type="text" style="padding-left: 70px;">
            </div>
          </div>
          <div class="row">
            <div class="agreement">
              <input type="checkbox">
              <span>By submitting you agree to the terms &amp; conditions below.</span>
            </div>
            <button style="margin: 15px 0 0 10px; height: 25px;">Submit</button>
          </div>
      </section>
      <!--  -->
      <h2 style="margin-top: 45px;">Terms and Conditions</h2>
      <hr>
      <h4>Mutual Agreement</h4>
      <p>As a volenteer you adhere to all licenses under this software, GPLv3, and will not produce any work of incompatible copyright's.</p>
      <h4>Monitary Reward &amp; Bounties</h4>
      <p>Note if you have completed a bounty *and the community has spotted the bounty you complete, you will recieve your funds. Refusal of payment will results in the funding of the community to further development. *Only upon the community or Blankcanvas has noticed you have completed the work and to community standards and guidelines, it is your sole duty to find any bounty and alert us.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Volenteer'
}
</script>

<style lang="scss" scoped>
#Volenteer {
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-height: calc(100vh - 50px);
  overflow-y: auto;
  overflow-x: hidden;

  * {
    user-select: none;
  }

  hr {
    left: 0;
  }
  
  .clip {
    width: 100vw;
    max-width: 1100px;
    margin: 0 auto;
    padding: 35px;
    flex-wrap: wrap;
  }

  .skills {
    overflow: hidden;
  }

  h2 {
    font-weight: normal;
    padding: 0;
    margin: 0;
  }

  hr {
    width: 100vw;
    max-width: 100%;
    margin: 15px 0 0;
  }

  p {
    font-size: 10px;
    line-height: 1.8em;
    max-width: 650px;
  }

  .skills-checklist {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 35px;
    padding: 0;

    li {
      display: flex;
      // flex-direction: column;
      width: 20%;
      align-items: center;
      margin-top: 10px;

      input {
        width: 8px;
        margin-right: 10px;
      }
    }
  }

  .submission-form {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background: #eee;
    padding: 25px;
    border-radius: 4px;
    box-sizing: border-box;
    margin: 0;

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
      width: 100%;
      margin: 0;
      text-transform: uppercase;
      font-size: 10px;
      user-select: none;
      padding: 0;
    }

    .row {
      width: 100%;

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

    .agreement {
      text-transform: uppercase;
      font-weight: bold;

      input {
        max-width: 9px;
        margin-right: 5px;
      }

      display: inline-flex;
      align-items: center;
      flex-grow: 1;
      
    }
  }

  h4 {
    margin-top: 10px;
    margin-bottom: 0;
  }
}
</style>
