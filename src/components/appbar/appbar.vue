<template>
    <div>

    <v-card-text :key="item.title" v-for="(item) in dashboardItems">
        <router-link
                :to="{path: item.href}"
                exact
                v-if="item.href != 'none'"
        >
           {{ item.title }}
        </router-link>
    </v-card-text>
    </div>
</template>

<script>
    export default {
        props: {},
        data() {
            return {
                panel:true,
                dashboardItems: [
                    {icon: "dashboard", title: "UI Configuration", active: true, href: "/visual_config"},
                    {icon: "dashboard", title: "UI Examples", active: true, href: "/it_example"},]
            }
        }
    };
</script>
