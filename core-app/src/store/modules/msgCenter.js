export default {
    namespaced: true,
    state: {
        atViewLayout: {
            label: '',
            puid: '',
            cid: '',
            pSchema: {},
            cSchema: {}
        }
    },
    getters: {
        getAtViewLayout: state => state.atViewLayout,
        getLabel: state => state.label,
        getPuid: state => state.atViewLayout.puid,
        getCid: state => state.atViewLayout.cid,
        getPSchema: state => state.atViewLayout.pSchema,
        getCSchema: state => state.atViewLayout.cSchema,
    },
    mutations: {
        setAtViewLayout(state, info) {
            state.atViewLayout = info;
        },
        setLabel(state, label) {
            state.atViewLayout.label = label;
        },
        setPuid(state, puid) {
            state.atViewLayout.puid = puid;
        },
        setCid(state, cid) {
            state.atViewLayout.cid = cid;
        },
        setPSchema(state, json) {
            state.atViewLayout.pSchema = json;
        },
        setCSchema(state, json) {
            state.atViewLayout.cSchema = json;
        },
        updateAtViewLayout(state, { key, val }) {
            state.atViewLayout.cSchema[key] = val;
        }
    },
    actions: {
        _setAtViewLayout({ commit }, info) {
            commit('setAtViewLayout', info)
        },
        _setLabel({ commit }, label) {
            commit('setLabel', label)
        },
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
        },
        _updateAtViewLayout({ commit }, { key, val }) {
            commit('updateAtViewLayout', { key, val })
        }
    }
}
