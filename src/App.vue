<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
      <a-row>
        <a-col :span="2">
          <h5 class="logo">Codebrains</h5>
        </a-col>

        <a-col :span="10">
          <a-menu
            v-model:selectedKeys="current"
            mode="horizontal"
            theme="dark"
            :style="{ lineHeight: '64px' }"
          >
            <a-menu-item key="home">
              <router-link to="/">Home</router-link>
            </a-menu-item>
            <a-menu-item key="about">
              <router-link to="/about">About</router-link>
            </a-menu-item>
            <a-menu-item key="contact">
              <router-link to="/contact">Contact</router-link>
            </a-menu-item>
          </a-menu>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <router-view />
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Company LLC ©2020 Created by Company
    </a-layout-footer>
  </a-layout>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class App extends Vue {
  current: Array<string> = ["mail"];
}
</script>
<style>
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  float: left;
  color: #fff;
  font-size: 18px;
}
</style>
