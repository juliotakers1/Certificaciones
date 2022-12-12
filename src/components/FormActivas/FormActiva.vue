<template>
  <div>
    <form class="mx-auto card p-5 m-3 shadow-lg">
        <div class="row">

        
          <div class="mb-3 col-6">
            <label  class="form-label">Fecha:</label>
            <input type="date" class="form-control"  v-model="documento.fecha">
          </div>
          <div class="mb-3 col-6">
            <label  class="form-label">Registro:</label>
            <input type="text" class="form-control"  v-model="documento.registro">
          </div>
          <div class="mb-3 col-12">
            <label  class="form-label">Nombre:</label>
            <input type="text" class="form-control"  v-model="documento.nombre">
          </div>
          <div class="mb-3">
            <label  class="form-label">Edad:</label>
            <input type="text" class="form-control"  v-model="documento.edad">
          </div>
          <div class="mb-3">
            <label  class="form-label">Género:</label>
            <select class="form-select" aria-label="Default select example" v-model="documento.genero">
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                
            </select>
          </div>
          <div class="mb-3">
            <label  class="form-label">Municipio Nacimiento:</label>
            <input type="text" class="form-control"  v-model="documento.nacimiento">
          </div>
          <div class="mb-3">
            <label  class="form-label">Residencia:</label>
            <input type="text" class="form-control"  v-model="documento.residencia">
          </div>
          <div class="mb-3">
            <label  class="form-label">Ingreso a:</label>
            <input type="text" class="form-control"  v-model="documento.ingreso">
          </div>
          <div class="mb-3">
            <label  class="form-label">Consulto Por:</label>
            <input type="text" class="form-control"  v-model="documento.consulta">
          </div>
          <div class="mb-3">
            <label  class="form-label">Solicitante:</label>
            <input type="text" class="form-control"  v-model="documento.solicitante">
          </div>
          <div class="mb-3">
            <label  class="form-label">Teléfono:</label>
            <input type="text" class="form-control"  v-model="documento.telefono">
          </div>
          
          
        </div>
          
        <div class="d-grid gap-2 d-lg-flex justify-content-lg-end">
          <button type="submit" class="btn btn-primary">Guardar</button>
        </div>
          
      </form>

      
  </div>
</template>

<script>
import VueQrcode from 'vue-qrcode'
import {ref} from 'vue'
export default {
  components:{
    VueQrcode
  },
props: {
    documento: Object
},
setup(props) {
  props.documento.nombre = 'Julio Vasquez'
  const qrValue =  props.documento.nombre
  return {
    qrValue
  }
}
}
</script>

<style>

</style>