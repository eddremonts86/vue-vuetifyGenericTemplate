<template>

    <v-card class="primary">
        <v-card-title class="blue darken-3">
            <slot name="header"></slot>
        </v-card-title>
        <v-card-text>
            <v-layout wrap>
                <v-flex xs6> <slot></slot></v-flex>
                <v-flex xs6 class="pt-10"> <slot name="content"></slot></v-flex>
            </v-layout>
        </v-card-text>
        <v-card-actions>
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

</style>