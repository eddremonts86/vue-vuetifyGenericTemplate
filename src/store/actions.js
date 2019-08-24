export default {
    fetchVConfig(context, data) {
        context.commit("setVConfig", data);
    },
}