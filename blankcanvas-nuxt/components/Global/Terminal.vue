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
  }
};
</script>

<style lang="scss">
.c-terminal {
  background: black;
  flex-direction: column;
  min-height: 250px;

  &__header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

  &__button {
    color: white;
    background: black;
    border-radius: 0;
    padding: 10px 20px;
    margin: 0;

    &--active {
      background: #232323;
    }
  }
}
</style>
