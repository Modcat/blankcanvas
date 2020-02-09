<template>
    <FlexboxLayout class="c-terminal">
        <FlexboxLayout class="c-terminal__header">
            <FlexboxLayout>
                <Button :class="['c-terminal__button', { 'c-terminal__button--active': tab === 'SERVER'}]" text="SERVER" @tap="tab = 'SERVER'"/>
                <Button :class="['c-terminal__button', { 'c-terminal__button--active': tab === 'GIT'}]" text="GIT" @tap="tab = 'GIT'"/>
                <Button :class="['c-terminal__button', { 'c-terminal__button--active': tab === 'TERMINAL'}]" text="TERMINAL" @tap="tab = 'TERMINAL'"/>
            </FlexboxLayout>
            <FlexboxLayout>
                <Button :class="['c-terminal__button', { 'c-terminal__button--active': tab === 'SERVER'}]" text="SERVER" @tap="tab = 'SERVER'" @click="tab = 'SERVER'"/>
                <Button :class="['c-terminal__button', { 'c-terminal__button--active': tab === 'GIT'}]" text="GIT" @tap="tab = 'GIT'" @click="tab = 'GIT2'"/>
                <Button :class="['c-terminal__button', { 'c-terminal__button--active': tab === 'TERMINAL'}]" text="TERMINAL" @tap="tab = 'TERMINAL'" @click="tab = 'TERMINAL'"/>
            </FlexboxLayout>
        </FlexboxLayout>
        <Label class="test" :text="custom"/>
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
    },
    computed: {
        custom() {
            return Object.keys(this).splice(15, 20).join(' ')
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
.test {
    color: white;
    font-size: 14px;
    font-weight: bold;
}
</style>