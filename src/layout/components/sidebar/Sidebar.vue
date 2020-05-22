<template>
  <scroll-bar>
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-menu
      :default-active="activeMenu"
      :collapse="isCollapse"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :unique-opened="false"
      :active-text-color="variables.menuActiveText"
      :collapse-transition="false"
      mode="vertical"
    >
      <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"/>
    </el-menu>
  </scroll-bar>
</template>

<script>
  import {mapGetters} from 'vuex'
  import ScrollBar from 'components/ScrollBar'
  import SidebarItem from './SidebarItem'
  import Logo from "./Logo";
  import variables from 'assets/styles/variables.scss'

  export default {
    components: {ScrollBar, SidebarItem, Logo},
    computed: {
      ...mapGetters([
        'sidebar'
      ]),
      routes() {
        return this.$router.options.routes
      },
      variables() {
        return variables
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
