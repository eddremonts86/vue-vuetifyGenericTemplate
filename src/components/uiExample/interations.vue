<template>
    <v-card class="pa-5 ma-5">
        <v-layout row>
            <v-flex xs12>
                <h1 class="ml-6">IT presentation</h1>
                <v-divider></v-divider>
            </v-flex>
            <v-flex class="center pa-5" xs6>
                <prop :list="list" :msg="msg"></prop>
            </v-flex>

            <v-flex class="mt-5" xs6>
                <v-card>
                    <v-card-title class="blue darken-3">Module using "Slots"</v-card-title>
                    <v-card-text class="blue darken-1">
                        <div class="pa-1" v-for="item in list" :key="item.title" xs6>
                            <slots v-if="!item.divider && !item.header">
                                <template v-slot:header>
                                    {{item.title}}
                                    </template>
                                <template v-slot:content>
                                    <img :src="item.avatar" class="img_round"/>
                                    {{item.subtitle}}
                                    <v-card>
                                        <v-card-title>Some text</v-card-title>
                                        <v-card-text>Content</v-card-text>
                                    </v-card>
                                </template>
                                <template v-slot:footer>
                                    {{item.contact}}
                                </template>
                            </slots>
                        </div>
                    </v-card-text>
                </v-card>
            </v-flex>

        </v-layout>
    </v-card>
</template>

<script>
    import prop from "@/components/uiExample/props";
    import slots from "@/components/uiExample/slots";

    export default {
        name: "interations",
        components: {prop, slots},
        data() {
            return {
                msg: 'All our tasks',
                list: [
                    {header: 'Today'},
                    {
                        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                        title: 'Brunch this weekend?',
                        subtitle: "Ali Connors, I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
                         contact: 'Please contact me !!!'
                    },
                    {divider: true, inset: true},
                    {
                        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                        title: 'Summer BBQ 4',
                        subtitle: "to Alex, Scott, Jennifer, Wish I could come, but I'm out of town this weekend.",
                        contact: 'contact me !!!'
                    },
                    {divider: true, inset: true},
                    {
                        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                        title: 'Oui oui',
                        subtitle: "Sandra Adams, Do you have Paris recommendations? Have you ever been?",
                        contact: 'contact me !!!'
                    },
                    {divider: true, inset: true},
                    {
                        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                        title: 'Birthday gift',
                        subtitle: "Trevor Hansen, Have any ideas about what we should get Heidi for her birthday?",
                        contact: 'contact me !!!'
                    },
                    {divider: true, inset: true},
                    {
                        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                        title: 'Recipe to try',
                        subtitle: "Britta Holt, We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
                        contact: 'contact'
                    },
                ],
            }
        }
    }
</script>

<style scoped>
    .img_round {
        margin: 10px;
        border-radius: 100%;
        width: 92px;
        height: 92px;
    }
</style>