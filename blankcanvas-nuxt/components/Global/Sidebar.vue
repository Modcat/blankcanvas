<template>
    <aside :class="['c-aside', { 'c-aside--over': over }]" v-if="content">
        <input v-if="showSearch" type="c-aside__search" v-model="search">
        <div class="section"></div>
        <slot/>
    </aside>
</template>

<script>
export default {
    name: 'Sidebar',
    prop: {
        content: {
            type: [Object, Boolean],
            default: false
        },
        showSearch: {
            type: Boolean,
            default: true
        },
        over: {
            type: Boolean,
            default: true
        },
        callback: {
            type: [Function, Boolean],
            default: false
        }
    },
    data() {
        return {
            search: ''
        }
    },
    computed: {
        sections() {
            if (this.search.trim().length)
            {
                let searchedContent = JSON.parse(JSON.stringify(this.content))

                return searchedContent
            }
            else
            {
                return this.content
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.c-aside {
    box-sizing: border-box;
    // background: $active-option;
    overflow-x: hidden;
    overflow-y: auto;
    padding-top: 15px;
    user-select: none;
    width: 18.5vw;
    transition: width 0.45s ease-in-out;
    border-right: 0.5px solid rgba(255,255,255,.45);
    background: $sidebar-bg;
    border-right: 1px solid #d5d5d5
    
    &--over {
        z-index: 99;
        box-shadow: 1px 0px 10px rgba(0,0,0,0.2);
    }
    &__search {
        margin-left: 15px;
        width: calc(100% - 30px);
    }
    
    &__tree {
        list-style-type: none;
        padding: 10px 0 0 0;
        margin: 0;
        text-align: left;
        color: #666;
    
        li {
        position: relative;
        padding: 5px 15px;
        z-index: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        }
    
        li:before {
        content: '';
        display: block;
        position: absolute;
        left: -15px;
        right: -15px;
        top: 0;
        bottom: 0;
        // background: $active-option;
        z-index: -1;
        opacity: 0;
        transition: opacity 0.2s;
        }
    
        li.active:before {
        opacity: 1;
        }
    }
}
</style>