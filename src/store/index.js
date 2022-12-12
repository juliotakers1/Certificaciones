import { createStore } from 'vuex'

export default createStore({
  state: {
    documentos:[],
    documento:{
      fecha:'',
      registro:'',
      nombre:'',
      edad:'',
      genero:'',
      nacimiento:'',
      residencia:'',
      ingreso:'',
      consulta:'',
      solicitante:'',
      telefono:''
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
