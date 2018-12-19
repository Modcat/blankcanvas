<template>
  <div @click="change" class="database">
    <aside>
      <input type="text" class="search" placeholder="search" style="margin-top:0px;">
      <ul class="tree">
        <li @click="view = 'db-info'">Database Name</li>
        <li @click="view = 'table-info'" class="active">Table Name</li>
        <li>Table Name</li>
        <li>Table Name</li>
      </ul>
    </aside>
    <div class="main">
      <div v-if="view === 'db-info'" class="db-info">
        <span class="label-art">Database</span>
        <div class="row" style="width: 250px;">
          <input type="text" style="width: 120%;" placeholder="Host">
          <input type="text" placeholder="Port">
        </div>
        <input type="text" placeholder="User">
        <input type="text" placeholder="password">
        <input type="text" placeholder="Database Name">
      </div>
      <div v-if="view === 'table-info'" class="table-info">
        <div style="text-align:center;">
          <div class="tabs">
            <span @click="subTab = 'schema'" :class="{ 'active': subTab === 'schema' }">Schema</span>
            <span @click="subTab = 'data'" :class="{ 'active': subTab === 'data' }">Data</span>
            <span>VR</span>
            <span>AR</span>
          </div>
        </div>
        <div v-if="subTab === 'schema'" class="schema">
          <div style="margin-right:15px;">
            <h3>table info</h3>
            <input type="text" value="Database Name">
            <h3>Columns</h3>
            <input type="text" class="search" placeholder="search">
          </div>
          <div class="row row--wrap">
            <div class="column" v-for="(col,index) in [1,1,1,1,1,1,1,1]" :key="index">
              <label>Column Name:</label>
              <input type="text" value="Col Name">
              <label>Type:</label>
              <select name="" placeholder="DataType">
                <option value="">Int</option>
                <option value="">Big Int</option>
                <option value="">Small Int</option>
                <option value="">Var Char</option>
                <option value="">Text</option>
                <option value="">Date</option>
              </select>
              <h5 class="label-art">Constraints</h5>
              <input type="text" value="Col Name">
              <h5 class="label-art">Indexes</h5>
            </div>
          </div>
        </div>
        <div v-if="subTab === 'data'">
          <table class="table-contents">
            <thead>
              <th>Column Name</th>
              <th>Column Name</th>
              <th>Column Name</th>
              <th>Column Name</th>
              <th>Column Name</th>
              <th>Column Name</th>
              <th>Column Name</th>
              <th>Column Name</th>
            </thead>
            <tbody>
              <tr v-for="(row,index) in [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]" :key="index">
                <td>Value</td>
                <td>Value</td>
                <td>Value</td>
                <td>Value</td>
                <td>Value</td>
                <td>Value</td>
                <td>Value</td>
                <td>Value</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Database',
  data () {
    return {
      view: 'db-info',
      subTab: 'schema'
    }
  },
  methods: {
    change () {
      window.modal.$shareStore.target = 'Database'
    }
  }
}
</script>

<style lang="scss" scoped>
.database {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
aside {
  box-sizing: border-box;
  min-width: 200px;
  background: rgba(180,180,180,0.3);
  resize: horizontal;
  overflow-x: hidden;
  overflow-y: auto;
  border-right: 1px solid rgba(0,0,0,0.06);
  padding-top: 15px;
  user-select: none;

  .search {
    margin-left: 15px;
    width: calc(100% - 30px);
  }

  .tree {
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
      background: rgba(255, 134, 34, 0.3);
      z-index: -1;
      opacity: 0;
      transition: opacity 0.2s;
    }

    li.active:before {
      opacity: 1;
    }
  }
}
.main {
  display: flex;
  flex-grow: 1;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  overflow: auto;
  background: url('/static/images/heatmap.svg') no-repeat center center;
  background-size: auto 100%;
}
h3 {
  font-weight: 600;
  text-transform: uppercase;
  user-select: none;
}
.db-info {
  background: rgba(255, 255, 255, 0.45);
  border-radius: 3px;
  padding: 15px;
  display: flex;
  flex-direction: column;
}
.table-info {
  box-sizing: border-box;
  padding-top: 15px;
  text-align: left;
  width: 100%;
  height: 100vh;

  > *:first-child {
    margin-top: 0;
  }
}
.row--wrap {
  position: relative;
  margin-right: -15px;
  justify-content: space-between;
}
.schema {
  padding-left: 15px;
  > *:first-child {
    margin-top: 0;
  }

  .search {
    margin-bottom:15px;
    max-width: 550px;
    margin-left: auto;
    margin-right: auto !important;
  }
}
.column {
  position: relative;
  width: 20%;
  flex-grow: 1;
  background: rgba(255, 255, 255, 0.45);
  border-radius: 3px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  margin-bottom: 15px;

  label {
    user-select: none;
    margin-top: 10px;

    &:first-child {
      margin-top: 0;
    }
  }

  .label-art {
    margin-bottom: 0;
  }

  .label-art:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin-top: -15px;
    height: 1px;
    background: rgba(0,0,0,0.03);
  }
}
// Table values
.table-contents {
  margin-top: 15px;
  min-width: 100%;
  border-radius: 2px 2px 0 0;

  thead {
    background: rgba(180, 180, 180, 0.2);

    th {
      padding: 5px;
    }
  }

  td {
    padding: 5px;
    background: rgba(255,255,255,0.45);
  }
}
</style>
