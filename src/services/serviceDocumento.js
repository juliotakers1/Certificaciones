import axios from 'axios'

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
}

let urlBase = 'https://apilabo.herokuapp.com/'

export default {
    getDocumento(){
        return axios.get(urlBase + 'documento')
    },
    getDocumentoById(id){
        return axios.get(urlBase + 'documento/' + id, headers)
    },
    addDocumento(payload){
        return axios.post(urlBase + 'documento/', payload, headers)
    },
    updateDocumento(id, payload){
        return axios.put(urlBase + 'documento/_id/' + id, payload, headers)

    },
    deleteDocumento(id){
        return axios.delete(urlBase + 'documento/_id/' + id, headers)
    }
}