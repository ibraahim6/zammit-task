<template>
  <v-app>
    <app-bar @changeDrawer="changeDrawer" :drawer="drawer" />
    <nav-drawer :drawer="drawer" />
    <v-main class="mt-2">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>

    <v-footer class="text-center justify-center" inset app>
      <span class="black--text">
        All Rights Reserved @<span class="primary--text">Zammit Shop</span>
        {{ new Date().getFullYear() }}
        </span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "MainLayout",
  components: {
    AppBar: () => import("../components/AppBar"),
    NavDrawer: () => import("../components/NavDrawer"),
  },
  data() {
    return {
      drawer: true,
    };
  },
  watch: {},
  created() {
  },
  computed: {},
  mounted() {},
  methods: {
    changeDrawer(data) {
      this.drawer = data;
    },
  },
};
</script>
<style lang="scss">
.theme--light.v-application {
  background: #f1f1f1 !important;
  color: rgba(0, 0, 0, 0.87);
}
.header-card {
  margin-top: -20px;
  margin-left: 15px;
  margin-right: 15px;
  padding: 15px;
  border-radius: 3px;
  position: relative;
  background: linear-gradient(
    32deg,
    var(--v-gradient1-base),
    var(--v-gradient2-base) 67%
  );
  color: #fff;
  box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14),
    0 7px 10px -5px rgba(156, 39, 176, 0.4);
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.border-radius-10 {
  border-radius: 10px !important;
}
</style>
