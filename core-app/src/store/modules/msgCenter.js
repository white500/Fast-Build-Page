export default {
    namespaced: true,
    state: {
        puid: '',
        cid: '',
        pSchema: {},
        cSchema: {},
    },
    getters: {
        getPuid: state => state.puid,
        getCid: state => state.cid,
        getPSchema: state => state.pSchema,
        getCSchema: state => state.cSchema,
    },
    mutations: {
        setPuid(state, puid) {
            state.puid = puid;
        },
        setCid(state, cid) {
            state.cid = cid;
        },
        setPSchema(state, json) {
            state.pSchema = json;
        },
        setCSchema(state, json) {
            state.cSchema = json;
        }
    },
    actions: {
        _setPuid({ commit }, puid) {
            commit('setPuid', puid)
        },
        _setCid({ commit }, cid) {
            commit('setCid', cid);
        },
        _setPSchema({ commit }, json) {
            commit('setPSchema', json);
        },
        _setCSchema({ commit }, json) {
            commit('setCSchema', json);
        }
    }
}
