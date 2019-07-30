<template>
    <div class="visualConfiguration">
        <v-container fluid>
            <v-layout
                    align-center
                    justify-center
            >
                <v-flex xs10>
                    <v-card>
                        <v-card-text>
                            <v-layout
                                    wrap
                            >
                                <v-flex
                                        md6
                                        xs12
                                >
                                    <span>Scheme</span>
                                    <v-switch
                                            label="Dark"
                                            primary
                                            v-model="blackTheme"
                                            @change="changeTheme"
                                    ></v-switch>
                                </v-flex>
                                <v-flex
                                        md6
                                        xs12
                                >
                                    <span>Drawer</span>
                                    <v-radio-group
                                            column
                                            v-model="primaryDrawer.type"
                                    >
                                        <v-radio
                                                :key="drawer"
                                                :label="drawer"
                                                :value="drawer.toLowerCase()"
                                                primary
                                                v-for="drawer in drawers"
                                        ></v-radio>
                                    </v-radio-group>
                                    <v-switch
                                            label="Clipped"
                                            primary
                                            v-model="primaryDrawer.clipped"
                                    ></v-switch>
                                    <v-switch
                                            label="Floating"
                                            primary
                                            v-model="primaryDrawer.floating"
                                    ></v-switch>
                                    <v-switch
                                            label="Mini"
                                            primary
                                            v-model="primaryDrawer.mini"
                                    ></v-switch>
                                </v-flex>
                                <v-flex
                                        md6
                                        xs12
                                >
                                    <span>Footer</span>
                                    <v-switch
                                            label="Inset"
                                            primary
                                            v-model="footer.inset"
                                    ></v-switch>
                                </v-flex>
                            </v-layout>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn text>Cancel</v-btn>
                            <v-btn
                                    @click="saveConfig"
                                    class="primary"
                                    text
                            >Submit
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        props: {},
        data: () => ({
            drawers: ['Default (no property)', 'Permanent', 'Temporary'],
            primaryDrawer: {
                model: null,
                type: 'default (no property)',
                clipped: false,
                floating: false,
                mini: false,
            },
            footer: {
                inset: false,
            },
            blackTheme: true,
        }),
        methods: {
            saveConfig() {
                let config = {
                    primaryDrawer: this.primaryDrawer,
                    footer: this.footer,
                    theme: this.blackTheme
                };
               this.$store.dispatch('fetchVConfig' , config)
            },
            changeTheme(){
                this.$vuetify.theme.dark = this.blackTheme
            }
        }

    };
</script>
