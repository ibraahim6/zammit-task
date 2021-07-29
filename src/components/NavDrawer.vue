<template>
  <v-navigation-drawer
    id="nav-drawer"
    v-model="isDrawer"
    app
    dark
    color="primaryBlack"
    width="260"
  >
      <v-list dense nav>
          <v-list-item>
            <v-list-item-avatar>
              <img
                src="@/assets/fuel-logo.jpg"
                alt="fuel"
              >
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Fuel</v-list-item-title>
              <v-list-item-subtitle>Free Trial Plan</v-list-item-subtitle>
            </v-list-item-content>
            
          </v-list-item>
        </v-list>
    <v-list class="nav-list" dense>
      <template v-for="item in items">
        <!-- if the item have childrens -->
        <v-list-group
          class="my-2 mx-2 list-style"
          v-if="item.children"
          :key="item.text"
          v-model="item.model"
          append-icon=""
          :prepend-icon="item['list-icon']"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <div v-for="(child, i) in item.children" :key="i">
            <v-list-item
              exact
              exact-active-class="active-class"
              active-class="active-class"
              class="my-2 mx-1 px-4 list-style"
              link
              router
              :to="child.route"
            >
              
              <v-list-item-content>
                <v-list-item-title class="pl-52">
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list-group>
        <div v-else :key="item.text">
          <v-list-item
            class="my-2 mx-2 px-4 list-style"
            exact
            exact-active-class="active-class"
            active-class="active-class"
            link
            router
            :to="item.to"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavDrawer",

  components: {},

  props: {
    value: {
      type: Boolean,
      default: false
    },
    drawer: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    drawer(val) {
      this.isDrawer = val;
    }
  },
  created() {
  },
  data() {
    return {
      isDrawer: this.drawer,
      items: [
        {
          icon: "mdi-home",
          text: "Home",
          to: "/",
        },
        {
          icon: "mdi-clipboard-text",
          text: "Orders",
          to: "",
        },
        {
          "list-icon": "mdi-cube",
          icon: "mdi-chevron-up",
          "icon-alt": "mdi-chevron-down",
          text: "Products",
          model: false,
          children: [
            {
              icon: "",
              text: "All Products",
              route: "/all-products",
            },
            {
              icon: "",
              text: "Inventory",
              route: "",
            },

            {
              icon: "",
              text: "Collections",
              route: "",
            }
          ]
        },
        {
          text: "Customers",
          icon: "mdi-account-group",
          to: "",
        },
        {
          text: "Analytics",
          icon: "mdi-google-analytics",
          to: "",
        },

        {
          text: "Discounts",
          icon: "mdi-sale",
          to: ""
        },

        {
          text: "Website Builder",
          icon: "mdi-monitor-edit",
          to: "",
        },
        {
          text: "Marketing",
          icon: "mdi-account-voice",
          to: ""
        },
      ]
    };
  },

  computed: {},

  methods: {
  }
};
</script>
<style lang="scss">
.v-list .v-list-item--active {
    color: #fff !important;
}
.active-class {
  background-color: #404c60;
  color: #fff !important;
}
.list-style {
  border-radius: 3px;
}
.pl-52 {
  padding-left: 52px;
}
</style>
