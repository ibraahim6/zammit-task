<template>
  <v-app-bar id="app-bar" absolute app color="#fff" flat height="75">
    <v-btn
      icon
      text
      color="primaryBlack"
      class="mr-3"
      elevation="0"
      small
      @click="$emit('changeDrawer', !drawer)"
    >
      <v-icon> mdi-menu </v-icon>
    </v-btn>

    <v-toolbar-title
      class="hidden-sm-and-down font-weight-bold"
      v-text="$route.name"
    />

    <v-spacer />

    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Ibrahim Ahmed</v-list-item-title>
          <v-list-item-subtitle>Admin</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-avatar>
          <img src="@/assets/ibrahim-admin.jpg" alt="ibrahihm" />
        </v-list-item-avatar>
      </v-list-item>
    </v-list>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",

  components: {},
  watch: {},
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    drawer: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {};
  },
  created() {},

  computed: {},

  methods: {},
};
</script>
