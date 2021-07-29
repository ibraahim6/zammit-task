<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" md="11">
        <v-row class="my-2" align="center">
          <v-col cols="6" md="4">
            <h3>Product list ({{ products.length }} items)</h3>
          </v-col>
          <v-col cols="6" md="8">
            <div class="d-flex justify-end">
                <div v-if="$vuetify.breakpoint.mobile">
                    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">

                    <v-btn class="mx-1 text-capitalize" color="primaryBlack" outlined v-bind="attrs"
          v-on="on"> <v-icon>mdi-dots-horizontal</v-icon> </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title>Import</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Export</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
              <v-btn class="mx-1 text-capitalize" color="primary"> Add </v-btn>
                </div>
                <div v-else>
              <v-btn class="mx-1 text-capitalize" color="primaryBlack" text> Import </v-btn>
              <v-btn class="mx-1 text-capitalize" color="primaryBlack" text> Export </v-btn>
              <v-btn class="mx-1 text-capitalize" color="primary"> Add New Product </v-btn>
                </div>
              
              
            </div>
          </v-col>
        </v-row>
        <v-data-table
          :headers="headers"
          :items="products"
          :search="search"
          :loading="loadingTable"
          :hide-default-header="$vuetify.breakpoint.mobile"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :show-select="!$vuetify.breakpoint.mobile"
          loading-text="Loading... Please wait"
          class="elevation-0"
        >
          <template v-slot:body="props" v-if="$vuetify.breakpoint.mobile">
            <v-progress-linear
              indeterminate
              class="w-100"
              color="primary"
              height="3"
              v-if="loadingTable"
            ></v-progress-linear>
            <v-row>
              <v-col cols="12" class="d-flex justify-center align-center">
                <span v-if="loadingTable" class="my-2">Loading data...</span>
              </v-col>
            </v-row>
            <tbody class="w-100">
              <tr v-for="(item, idx) in props.items" :key="idx" class="w-100">
                <td class="" :colspan="headers.length">
                  <div class="d-flex">
                    <v-col cols="9" xs="9">
                      <div class="d-flex align-center my-4">
                        <v-list-item color="transparent">
                          <v-img
                            max-height="80"
                            max-width="80"
                            height="80"
                            width="80"
                            class="border-img mr-3"
                            lazy-src="https://www.incathlab.com/images/products/default_product.png"
                            :src="require(`@/assets/products/${item.img}`)"
                          ></v-img>
                          <v-list-item-content>
                            <v-list-item-title
                              v-text="item.name"
                            ></v-list-item-title>
                            <v-list-item-subtitle
                              v-text="item.type"
                            ></v-list-item-subtitle>
                            <div class="d-flex py-3">
                              <span class="mr-1"
                                >{{ item.stock }} in stock</span
                              >
                              •
                              <span class="ml-1">{{ item.price }} EGP</span>
                            </div>
                          </v-list-item-content>
                        </v-list-item>
                      </div>
                    </v-col>
                    <v-col cols="3" xs="3">
                      <div class="d-flex align-center my-5">
                        <v-chip
                          :color="
                            item.status == 'Active'
                              ? '#DAF0E1'
                              : item.status == 'Draft'
                              ? '#FFF8F2'
                              : '#EDEFF3'
                          "
                          text-color="#000"
                        >
                          {{ item.status }}
                        </v-chip>
                      </div>
                    </v-col>
                  </div>
                </td>
              </tr>
            </tbody>
          </template>
          <template v-slot:top>
            <v-col cols="12" md="12" class="d-flex align-center">
              <v-row align="center">
                <v-col cols="12" md="4" xs="12">
                  <v-text-field
                    v-model="search"
                    dense
                    placeholder="Search by product name, SKU or barcode"
                    outlined
                    prepend-inner-icon="mdi-magnify"
                    single-line
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="8" xs="12">
                  <v-row justify="space-between" align="center">
                    <v-col
                      cols="4"
                      md="3"
                      xs="4"
                      v-if="$vuetify.breakpoint.mobile"
                    >
                      <v-btn
                        color="primaryBlack"
                        outlined
                        class="text-capitalize px-10"
                      >
                        select
                      </v-btn>
                    </v-col>
                    <v-col cols="4" md="3" xs="4">
                      <v-btn
                        color="primaryBlack"
                        outlined
                        class="text-capitalize px-10"
                      >
                        filter
                      </v-btn>
                    </v-col>
                    <v-col cols="4" md="4" xs="4">
                      <v-select
                        class="top-12"
                        :items="headers"
                        item-text="text"
                        item-value="value"
                        v-model="sortBy"
                        label="Sort"
                        clearable
                        outlined
                        dense
                      >
                        <template v-slot:selection="{ item }">
                          <span
                            class="d-flex justify-center"
                            style="width: 100%"
                          >
                            {{ item.text }}
                          </span>
                        </template>
                      </v-select>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </template>
          <template v-slot:[`item.name`]="{ item }">
            <div class="d-flex align-center my-4">
              <!-- <v-list> -->
              <v-list-item color="transparent">
                <!-- <v-list-item-avatar size="80" tile> -->
                <v-img
                  max-height="80"
                  max-width="80"
                  height="80"
                  width="80"
                  class="border-img mr-3"
                  lazy-src="https://www.incathlab.com/images/products/default_product.png"
                  :src="require(`@/assets/products/${item.img}`)"
                ></v-img>
                <!-- </v-list-item-avatar> -->

                <v-list-item-content>
                  <v-list-item-title v-text="item.name"></v-list-item-title>
                  <v-list-item-subtitle
                    v-text="item.type"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <!-- </v-list> -->
              <!-- <v-img
                max-height="80"
                max-width="80"
                height="80"
                width="80"
                class="border-img mr-3"
                lazy-src="https://www.incathlab.com/images/products/default_product.png"
                :src="require(`@/assets/products/${item.img}`)"
              ></v-img>
              <span>{{ item.name }}</span> -->
            </div>
          </template>
          <template v-slot:[`item.price`]="{ item }">
            <span>{{ item.price }}</span> EGP
          </template>
          <template v-slot:[`item.status`]="{ item }">
            <v-chip
              :color="
                item.status == 'Active'
                  ? '#DAF0E1'
                  : item.status == 'Draft'
                  ? '#FFF8F2'
                  : '#EDEFF3'
              "
              text-color="#000"
            >
              {{ item.status }}
            </v-chip>
          </template>
          <template v-slot:[`item.stock`]="{ item }">
            <span>{{ item.stock }} in stock</span>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      search: "",
      loadingTable: true,
      sortBy: "id",
      sortDesc: false,
      headers: [
        { text: "Product", value: "name" },
        { text: "Status", value: "status" },
        { text: "Stock", value: "stock" },
        { text: "Price", value: "price" },
        { text: "Type", value: "type" },
      ],
      products: [],
      editedIndex: -1,
      editedItem: {},
      defaultItem: {},
    };
  },

  computed: {
    ...mapState({
      allProducts: (state) => state.Products.allProducts,
    }),
  },

  watch: {},

  created() {
    this.fetch();
  },

  methods: {
    fetch() {
      this.loadingTable = true;
      this.$store.dispatch("Products/getAllProducts").then(() => {
        this.loadingTable = false;
        this.products = this.allProducts.map((item) => {
          return {
            ...item,
            img: `${Math.floor(Math.random() * 15) + 1}.jpg`,
          };
        });
      });
    },
  },
};
</script>
<style lang="scss">
.border-img {
  border-radius: 5px;
  border: 1px solid grey;
}
.w-100 {
  width: 100%;
}
.top-12 {
  top: 12px;
}
</style>
