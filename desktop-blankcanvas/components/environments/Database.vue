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
