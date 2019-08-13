<template>
    <v-app id="sandbox">
        <v-navigation-drawer
                :clipped="primaryDrawer.clipped"
                :floating="primaryDrawer.floating"
                :mini-variant="primaryDrawer.mini"
                :permanent="primaryDrawer.type === 'permanent'"
                :temporary="primaryDrawer.type === 'temporary'"
                app
                overflow
                v-model="primaryDrawer.model"
        >
            <AppBar></AppBar>
        </v-navigation-drawer>

        <v-app-bar :clipped-left="primaryDrawer.clipped" app>
            <v-app-bar-nav-icon
                    @click.stop="primaryDrawer.model = !primaryDrawer.model"
                    v-if="primaryDrawer.type !== 'permanent'"
            ></v-app-bar-nav-icon>
            <v-toolbar-title>Welcome to Vuetify <small>by Edd Remonts</small></v-toolbar-title>
            <ToolBar></ToolBar>
        </v-app-bar>
        <v-content class="pa-12">
            <v-layout row wrap >
                <v-flex xs12>
                    <div class="pa-12">
                        <router-view />
                    </div>
                </v-flex>
            </v-layout>
        </v-content>
        <v-footer
                :inset="footer.inset"
                app
        >
            <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>
    import {mapGetters} from 'vuex'
    import AppBar from "@/components/appbar/appbar";
    import ToolBar from "@/components/toolbar/toolbar";

    export default {
        components: {ToolBar, AppBar},
        data: () => ({
            primaryDrawer: {},
            footer: {},
        }),
        computed: {
            ...mapGetters([
                'getVConfig'
            ]),
        },
        created() {
            this.init()
        },
        methods: {
            init() {
                this.$vuetify.theme.dark = this.getVConfig.theme ? this.getVConfig.theme : true;
                this.primaryDrawer = {
                    model: null,
                    type: this.getVConfig.primaryDrawer ? this.getVConfig.primaryDrawer.type : 'default (no property)',
                    clipped: this.getVConfig.primaryDrawer ? this.getVConfig.primaryDrawer.clipped : true,
                    floating: this.getVConfig.primaryDrawer ? this.getVConfig.primaryDrawer.floating : false,
                    mini: this.getVConfig.primaryDrawer ? this.getVConfig.primaryDrawer.mini : false,
                };
                this.footer = {
                    inset: this.getVConfig.footer ? this.getVConfig.footer.inset : false,
                }
            }
        },
        watch: {
            getVConfig(getVConfig) {
                return getVConfig
            }
        }
    }
</script>