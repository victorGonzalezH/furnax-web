<template>
  <v-app>
    <v-app-bar color="deep-purple accent-4" dark app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list-item two-line>
        <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Profile </v-list-item-title>
          <v-list-item-subtitle> profile subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-treeview activatable open-all :items="items">
        <template slot="label" slot-scope="{ item }">
          <div @click="onClickTreeItem(item)">{{ item.name }}</div>
        </template>
      </v-treeview>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <div style="height: 100%">
          <v-tabs v-model="tab" right>
            <v-tab
              v-for="tab in tabs"
              :key="tab.name"
              @click="onClickTab(tab.path)"
            >
              {{ tab.name }}
            </v-tab>
          </v-tabs>
        <br/>
      <v-btn-toggle
          class="d-flex justify-end"
          v-model="selected_view"
          dense
        >
          <v-btn
           small
          >
            <!-- <v-icon>mdi-format-align-left</v-icon> -->
            Feed
          </v-btn>
          <v-btn
          small
          >
            List
          </v-btn>
          <v-btn
          small
          >
            WBS
          </v-btn>
          <v-btn
          small
          >
            Dashboard
          </v-btn>
          <v-btn
          small
          >
            Kanban
          </v-btn>
          <v-btn
          small
          >
            Gantt
          </v-btn>
          <v-btn
          small
          >
            Timeline
          </v-btn>
          <v-btn
          small
          >
            Roadmap
          </v-btn>
          <v-btn
          small
          >
            Honeycomb
          </v-btn>
          <v-btn
          small
          >
            Sheet
          </v-btn>
          <v-btn
          small
          >
            Reports
          </v-btn>
          <v-btn
          small
          >
            Network
          </v-btn>
          <v-btn
          small
          >
            Risks
          </v-btn>
          <v-btn
          small
          >
            Timesheet
          </v-btn>
        </v-btn-toggle>

          <router-view />
        </div>
      </v-container>
    </v-main>
    <v-footer app>
      <div>Footer</div>
    </v-footer>
  </v-app>
</template>

<script>
import Vue from "vue";
const component = Vue.component("main", {
  name: "Main",
  data: () => ({
    drawer: null,
    group: null,
    tab: null,
    tabs: [
      { name: "Overlook", path: "overlook" },
      { name: "Task master", path: "taskmaster" },
      { name: "Money", path: "money" },
      { name: "Task force", path: "taskforce" },
      { name: "Resources", path: "resources" },
      { name: "Inception", path: "inception" },
      { name: "Files", path: "files" },
      { name: "Ops", path: "ops" },
      { name: "Billing", path: "billing" },
    ],
    // items: ["web", "shopping", "videos", "images", "news"],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    items: [
      {
        id: 1,
        name: "Global (Everything) :",
        children: [
          {
            id: 2,
            name: "Station 1",
            children: [
              {
                id: 5,
                name: "Portafolio 1",
                children: [
                  {
                    id: 6,
                    name: "Programme 1",
                    children: [
                      { id: 7, name: "Project 1" },
                      { id: 8, name: "Project 2" },
                    ],
                  },
                  { id: 10, name: "Programme 2" },
                ],
              },
              { id: 9, name: "Portafolio 2" },
            ],
          },
          { id: 3, name: "Station 2" },
        ],
      },
    ],
    selected_view: undefined,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    onClickTreeItem(treeItem) {
      console.log(treeItem);
    },
    onClickTab(path) {
      console.log(path);
      this.$router.push(path);
    },
  },
});
export default component;
</script>

<style>
.v-tab {
  text-transform: none !important;
}
.v-btn {
  text-transform: none !important;
}
</style>
