import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login_user: null,
    drawer: false,
    addresses: [],
    questions: [],
    question: [],
  },
  mutations: {
    deleteLoginUser (state) {
      state.login_user = null
    },
    setLoginUser (state, user) {
      state.login_user = user
    },
    toggleSideMenu (state) {
      state.drawer = !state.drawer
    },
    addAddress (state, { id, address }) {
      address.id = id
      state.addresses.push(address)
    },
    updateAddress (state, { id, address }) {
      const index = state.addresses.findIndex(address => address.id === id)
      state.addresses[index] = address
    },
    deleteAddress (state, { id }) {
      const index = state.addresses.findIndex(address => address.id === id)
      state.addresses.splice(index, 1)
    },
    fetchQuestions (state, { id, question } ) {
      question.id = id
      state.questions.push(question)
    },
    showQuestion (state, { id, question }) {
      // state.question.push(question)
      const index = state.questions.findIndex(question => question.id === id)
      state.questions[index] = question
    }
  },
  actions: {
    toggleSideMenu ({ commit }) {
      commit('toggleSideMenu')
    },
    setLoginUser ({commit}, user) {
      commit('setLoginUser', user)
    },
    deleteLoginUser ({commit}) {
      commit('deleteLoginUser')
    },
    login () {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(google_auth_provider)
    },
    logout () {
      firebase.auth().signOut()
    },
    fetchAddresses ({ getters, commit }) {
      firebase.firestore().collection(`users/${getters.uid}/addresses`).get().then(snapshot => {
        snapshot.forEach(doc => commit('addAddress', { id: doc.id, address: doc.data() }))
      })
    },
    addAddress ({ getters, commit }, address) {
      if (getters.uid) firebase.firestore().collection(`users/${getters.uid}/addresses`).add(address).then(doc => {
        commit('addAddress', { id: doc.id, address})
      })
    },
    updateAddress ({ getters, commit }, { id, address }) {
      if (getters.uid) {
        firebase.firestore().collection(`users/${getters.uid}/addresses`).doc(id).update(address).then(() => {
          commit('updateAddress', { id, address })
        })
      }
    },
    deleteAddress ({ getters, commit }, { id }) {
      if (getters.uid) {
        firebase.firestore().collection(`users/${getters.uid}/addresses`).doc(id).delete().then(() => {
          commit('deleteAddress', { id })
        })
      }
    },
    fetchQuestions ({ commit }) {
      firebase.firestore().collection(`categories/PI0ZJMdcbN1de70nwMyf/questions`).get().then(snapshot => {
        snapshot.forEach(doc => commit('fetchQuestions', { id: doc.id, question: doc.data() } ))
      })
    },
    showQuestion ({ commit }, id ) {
      firebase.firestore().collection(`categories/PI0ZJMdcbN1de70nwMyf/questions`).doc(id['id']).get().then(docSnapshot => {
        const question = docSnapshot[0].data()
        commit('showQuestion', { question })
      })
    },
  },
  getters: {
    userName: state => state.login_user ? state.login_user.displayName : '',
    photoURL: state => state.login_user ? state.login_user.photoURL : '',
    uid: state => state.login_user ? state.login_user.uid : null,
    getAddressById: state => id => state.addresses.find(address => address.id === id)
    // getQuestionById: state => id => state.questions.find(question => question.id === id)
  }
})
