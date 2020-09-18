export default {
    namespaced: true,
    state: {
        puid: '',
        cid: ''
    },
    getters: {
        getPuid: state => state.puid,
        getCid: state => state.cid
    },
    mutations: {
        setPuid(state, puid) {
            state.puid = puid
        },
        setCid(state, cid) {
            state.cid = cid
        }
    },
    actions: {
        _setPuid({ state, commit }, puid) {
            state.puid !== puid && commit('setPuid', puid)
        },
        _setCid({ commit }, cid) {
            commit('setCid', cid)
        }
    }
}
