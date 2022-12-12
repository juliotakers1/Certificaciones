<template>
  <div> 
    <Navbar />
    <div class="container d-flex justify-content-center mt-5 ">
      <FormActiva :documento="documento" />
      
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Layouts/Navbar.vue';
import { ref } from 'vue';
import { useStore } from 'vuex';
import FormActiva from '@/components/FormActivas/FormActiva.vue';
export default {
    components: { Navbar, FormActiva, FormActiva },
    setup() {
      const store = useStore ()

      const documento = ref({
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
      })


      return {
        documento
      }
    }
}
</script>

<style>

</style>