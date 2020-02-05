<template>
    <FlexboxLayout class="c-terminal">
        <FlexboxLayout class="c-terminal__header">
            <FlexboxLayout>
                <Button :class="['c-terminal__button', { 'c-terminal__button--active': tab === 'SERVER'}]" text="SERVER" @tap="tab = 'SERVER'"/>
                <Button :class="['c-terminal__button', { 'c-terminal__button--active': tab === 'GIT'}]" text="GIT" @tap="tab = 'GIT'"/>
                <Button :class="['c-terminal__button', { 'c-terminal__button--active': tab === 'TERMINAL'}]" text="TERMINAL" @tap="tab = 'TERMINAL'"/>
            </FlexboxLayout>
            <FlexboxLayout>
                <Button :class="['c-terminal__button', { 'c-terminal__button--active': tab === 'SERVER'}]" text="SERVER" @tap="tab = 'SERVER'"/>
                <Button :class="['c-terminal__button', { 'c-terminal__button--active': tab === 'GIT'}]" text="GIT" @tap="tab = 'GIT'"/>
                <Button :class="['c-terminal__button', { 'c-terminal__button--active': tab === 'TERMINAL'}]" text="TERMINAL" @tap="tab = 'TERMINAL'"/>
            </FlexboxLayout>
        </FlexboxLayout>
    </FlexboxLayout>
</template>

<script>
export default {
    name: 'Terminal',
    data() {
        return {
            tab: 'GIT',
            terminals: [],
            feathersIO: []
        }
    }
}
</script>

<style lang="scss">
.c-terminal {
  background: black;
  height: 300px;
  flex-direction: column;

  &__header {
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
  }
  &__button {
    width: auto;
    min-width: none;
    flex-shrink: 1;
    color: white;
    background: black;
    border-radius: 0;
    padding: 10px 25px;
    margin: 0;

    &--active {
        background: #232323;
    }
  }
}
</style>