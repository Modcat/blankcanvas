<template>
  <div class="Database">
    <!-- Database sidebar -->
    <div class="database-mode">
      <input
        type="text"
        class="search"
        placeholder="search"
        style="margin-top:0px;"
      >
      <ul class="tree">
        <li @click="view = 'db-info'">
          Database Name
        </li>
        <li
          class="active"
          @click="view = 'table-info'"
        >
          Table Name
        </li>
        <li>Table Name</li>
        <li>Table Name</li>
      </ul>
    </div>
    
    <!-- Database connection info -->
    <section v-if="view === 'db-info'" class="db-info">
      <section class="document-info">
        <div class="input">
          <label class="tag">Nickname</label>
          <input type="text" style="padding-left:65px;">
        </div>
        <div class="row">
          <div class="input">
            <label class="tag">Host</label>
            <input type="text" style="padding-left:40px;">
          </div>
          <div class="input">
            <label class="tag">Port</label>
            <input type="text" style="padding-left:40px;">
          </div>
        </div>
        <div class="input">
          <label class="tag">User</label>
          <input type="text" style="padding-left:40px;">
        </div>
        <div class="input">
          <label class="tag">Password</label>
          <input type="password" style="padding-left:67px;">
        </div>
        <div class="input">
          <label class="tag">Database Name</label>
          <input type="text" style="padding-left:92px;">
        </div>
        <button style="margin-top: 15px;margin-bottom: 0px;">Connect</button>
      </section>
    </section>
    <!-- Database table info -->
    <div v-if="view === 'table-info'" class="table-info">
      <div style="text-align:center;">
        <div class="tabs">
          <span
            :class="{ 'active': subTab === 'schema' }"
            @click="subTab = 'schema'"
          >Schema</span>
          <span
            :class="{ 'active': subTab === 'data' }"
            @click="subTab = 'data'"
          >Data</span>
          <span>VR</span>
          <span>AR</span>
        </div>
      </div>
      <div
        v-if="subTab === 'schema'"
        class="schema"
      >
        <div style="margin-right:15px;">
          <h3>table info</h3>
          <input
            type="text"
            value="Database Name"
          >
          <h3>Columns</h3>
          <input
            type="text"
            class="search"
            placeholder="search"
          >
        </div>
        <div class="row row--wrap">
          <div
            v-for="(col,index) in [1,1,1,1,1,1,1,1]"
            :key="index"
            class="column"
          >
            <label>Column Name:</label>
            <input
              type="text"
              value="Col Name"
            >
            <label>Type:</label>
            <select
              name=""
              placeholder="DataType"
            >
              <option value="">
                Int
              </option>
              <option value="">
                Big Int
              </option>
              <option value="">
                Small Int
              </option>
              <option value="">
                Var Char
              </option>
              <option value="">
                Text
              </option>
              <option value="">
                Date
              </option>
            </select>
            <h5 class="label-art">
              Constraints
            </h5>
            <input
              type="text"
              value="Col Name"
            >
            <h5 class="label-art">
              Indexes
            </h5>
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
            <tr
              v-for="(row,index) in [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]"
              :key="index"
            >
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
</template>

<script>
import { HotTable } from '@handsontable/vue'

export default {
  name: 'Database',
  data() {
    return {
      view: 'db-info',
      subTab: 'schema'
    }
  }
}
</script>

<style lang="scss" scoped>
.Database {
  display: flex;
  flex-grow: 1;
  overflow-y: auto;
}
.db-info {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}
.document-info {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 35px auto 0 auto;
  background: #eee;
  padding: 25px;
  border-radius: 4px;

  > *:first-child {
    margin-top: 0 !important;
    padding-top: 0;
  }

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
    margin-top: 15px;
    margin-bottom: 0;
    text-transform: uppercase;
    font-size: 10px;
    user-select: none;
  }

  .input {
    position: relative;
    flex-grow: 1;
    margin-top: 15px;
  }

  .row {
    > *:first-child {
      margin-right: 10px;
    }
  }

  .tag {
    position: absolute;
    background: #aaa;
    border-radius: 2px;
    color: white;
    padding: 3px 5px;
    top: 3px;
    letter-spacing: 0.01em;
    left: 3px;
    font-size: 9px;
    padding-top: 4px;
    line-height: 1.4em;
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
}
.database-mode {
  box-sizing: border-box;
  background: rgba(227, 226, 226, 0.3);
  overflow-x: hidden;
  overflow-y: auto;
  padding-top: 15px;
  user-select: none;
  width: 18.5vw;
  transition: width 0.45s ease-in-out;
  border-right: 0.5px solid rgba(255,255,255,.45);

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
// .database-view {
//   display: flex;
//   flex-grow: 1;
//   overflow: auto;
//   // background: url('/static/images/heatmap.svg') no-repeat center center;
//   background-size: auto 100%;
//   h3 {
//     font-weight: 600;
//     text-transform: uppercase;
//     user-select: none;
//   }
//   .db-info {
//     align-self: center;
//     justify-self: center;
//     background: rgba(230, 230, 230, 0.45);
//     border-radius: 3px;
//     padding: 15px;
//     display: flex;
//     flex-direction: column;
//     .row {
//       margin-bottom: 10px;

//       * {
//         margin-right: 10px;

//         &:last-child {
//           margin-right: 0;
//         }
//       }
//     }
//     > input {
//       margin-bottom: 10px;
//     }
//   }
//   .table-info {
//     box-sizing: border-box;
//     padding-top: 15px;
//     text-align: left;
//     width: 100%;
//     height: 100vh;

//     > *:first-child {
//       margin-top: 0;
//     }
//   }
//   .row--wrap {
//     position: relative;
//     margin-right: -15px;
//     justify-content: space-between;
//   }
//   .schema {
//     padding-left: 15px;
//     > *:first-child {
//       margin-top: 0;
//     }

//     .search {
//       margin-bottom:15px;
//       max-width: 550px;
//       margin-left: auto;
//       margin-right: auto !important;
//     }
//   }
//   .column {
//     position: relative;
//     width: 20%;
//     flex-grow: 1;
//     background: rgba(230, 230, 230, 0.45);;
//     border-radius: 3px;
//     padding: 10px;
//     display: flex;
//     flex-direction: column;
//     margin-right: 15px;
//     margin-bottom: 15px;

//     label {
//       user-select: none;
//       margin-top: 10px;

//       &:first-child {
//         margin-top: 0;
//       }
//     }

//     .label-art {
//       margin-bottom: 0;
//     }

//     .label-art:before {
//       content: '';
//       display: block;
//       position: absolute;
//       left: 0;
//       right: 0;
//       margin-top: -15px;
//       height: 1px;
//       background: rgba(0,0,0,0.03);
//     }
//   }
//   // Table values
//   .table-contents {
//     margin-top: 15px;
//     min-width: 100%;
//     border-radius: 2px 2px 0 0;

//     thead {
//       background: rgba(180, 180, 180, 0.2);

//       th {
//         padding: 5px;
//       }
//     }

//     td {
//       padding: 5px;
//       background: rgba(255,255,255,0.45);
//     }
//   }
// }
</style>
