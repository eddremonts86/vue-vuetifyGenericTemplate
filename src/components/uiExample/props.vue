<template>
    <v-card class="primary">
        <v-card-title class="blue darken-3">
            I am a module using "Props"
        </v-card-title>
        <v-card-text>
            <v-card class="mx-auto mt-4">
                <v-toolbar
                        color="blue darken-4"
                        dark
                >
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>
                    <v-toolbar-title> {{msg}}</v-toolbar-title>

                </v-toolbar>
                <v-list three-line>
                    <template v-for="(item, index) in list">
                        <v-subheader
                                :key="item.header"
                                v-if="item.header"
                                v-text="item.header"
                        ></v-subheader>

                        <v-divider
                                :inset="item.inset"
                                :key="index"
                                v-else-if="item.divider"
                        ></v-divider>

                        <v-list-item
                                :key="item.title"
                                @click=""
                                v-else
                        >
                            <v-list-item-avatar>
                                <v-img :src="item.avatar"></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title v-html="item.title"></v-list-item-title>
                                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </template>
                </v-list>
            </v-card>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "props",
        props: [
            'msg', 'list'
        ]
    }
</script>

<style scoped>

</style>