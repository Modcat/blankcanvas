<template>
  <FlexboxLayout class="c-terminal">
    <FlexboxLayout class="c-terminal__header">
      <FlexboxLayout>
        <Button
          :class="[
            'c-button c-terminal__button',
            { 'c-terminal__button--active': tab === 'SERVER' }
          ]"
          text="SERVER"
          @tap="tab = 'SERVER'"
          @click="tab = 'SERVER'"
        />
        <Button
          :class="[
            'c-button c-terminal__button',
            { 'c-terminal__button--active': tab === 'GIT' }
          ]"
          text="GIT"
          @tap="tab = 'GIT'"
          @click="tab = 'GIT'"
        />
        <Button
          :class="[
            'c-button c-terminal__button',
            { 'c-terminal__button--active': tab === 'TERMINAL' }
          ]"
          text="TERMINAL"
          @tap="tab = 'TERMINAL'"
          @click="tab = 'TERMINAL'"
        />
      </FlexboxLayout>
      <FlexboxLayout>
        <Button
          :class="[
            'c-button c-terminal__button',
            { 'c-terminal__button--active': tab === 'SERVER' }
          ]"
          text="SERVER"
          @tap="tab = 'SERVER'"
          @click="tab = 'SERVER'"
        />
        <Button
          :class="[
            'c-button c-terminal__button',
            { 'c-terminal__button--active': tab === 'GIT' }
          ]"
          text="GIT"
          @tap="tab = 'GIT'"
          @click="tab = 'GIT'"
        />
        <Button
          :class="[
            'c-button c-terminal__button',
            { 'c-terminal__button--active': tab === 'TERMINAL' }
          ]"
          text="TERMINAL"
          @tap="tab = 'TERMINAL'"
          @click="tab = 'TERMINAL'"
        />
      </FlexboxLayout>
    </FlexboxLayout>
  </FlexboxLayout>
</template>

<script>
export default {
  name: "Terminal",
  data() {
    return {
      tab: "GIT",
      terminals: [],
      feathersIO: []
    };
  },
  computed: {
    custom() {
      return 'store'
    }
  }
};
</script>

<style lang="scss">
.c-terminal {
  background: black;
  height: 300px;
  flex-direction: column;

  &__header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

  &__button {
    color: white;
    background: black;
    border-radius: 0;
    padding: 8px 20px;
    margin: 0;
    height: 60px;

    &--active {
      background: #232323;
    }
  }
}

.test {
  color: white;
  font-size: 14px;
  font-weight: bold;
}
</style>
