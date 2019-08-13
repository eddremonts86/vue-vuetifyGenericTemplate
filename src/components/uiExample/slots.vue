<template>

    <v-card class="primary">
        <v-card-title class="blue darken-3">
            <slot name="header"></slot>
        </v-card-title>
        <v-card-text class="white pa-5">
            <v-layout wrap>
                <v-flex xs3> <slot></slot></v-flex>
                <v-flex xs9 class="pt-10 text">
                    <slot name="content"></slot>
                </v-flex>
            </v-layout>
        </v-card-text>
        <v-card-actions class="grey darken-3">
            <v-spacer></v-spacer>
                <v-btn class="blue darken-3">
                    <slot name="footer"></slot>
                </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "slots"
    }
</script>
<style scoped>
    .text{
        color: #212121;
        font-size: 18px;
    }
</style>