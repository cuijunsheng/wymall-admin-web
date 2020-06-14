<template>
  <scroll-bar>
    <logo v-if="showLogo" :collapse="isCollapse"/>
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item :routes="routes"></sidebar-item>
    </el-menu>
  </scroll-bar>
</template>

<script>
  import {mapGetters} from 'vuex'

  import ScrollBar from 'components/ScrollBar'
  import SidebarItem from './SidebarItem'
  import Logo from "./Logo";

  export default {
    components: {ScrollBar, SidebarItem, Logo},
    computed: {
      ...mapGetters([
        'sidebar',
        'routers'
      ]),
      routes() {
        return this.routers
      },
      isCollapse() {
        return !this.sidebar.opened
      },
      showLogo() {
        return this.$store.state.settings.sidebarLogo
      }
    }
  }
</script>

<style>

</style>
