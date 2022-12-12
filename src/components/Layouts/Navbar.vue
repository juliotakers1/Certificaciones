<template>
  <nav class="navbar navbar-expand-lg barra shadow-lg d-flex justify-content-between">
    <div>
    <router-link to="/" class="navbar-brand rounded-pill ms-3">
       <img src="@/assets/images/logo.png" alt="" width="50"  > 
    </router-link>
  </div>

  <div >
    <router-link class="btn item    fw-bold" id="rla"  to="/certificacion">
        <span class="material-symbols-outlined me-1">
        library_add
        </span>NUEVA
    </router-link>
  </div>

  <div >
    <router-link class="btn  item    fw-bold" id="rla" to="/pendientes">
        <span class="material-symbols-outlined me-1">
        pending_actions
        </span>PENDIENTES
    </router-link>
  </div>

  <div>
    <router-link class="btn  item    fw-bold" id="rla" to="/finalizadas">
        <span class="material-symbols-outlined me-1">
        fact_check
        </span>FINALIZADAS
    </router-link>
  </div>

  <div>
    <router-link class="btn  item    fw-bold" id="rla" to="/reporte">
        <span class="material-symbols-outlined me-1">
        lab_profile
        </span>REPORTES
    </router-link>
  </div>

   
   
  <div>
    <button class="btn btn-success rounded-pill me-2 sal"     @click="cerrarSesion">
        <span class="material-symbols-outlined">
        logout
        </span>
    </button>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.barra{
    background: #009933;
}
.item{
    background: #009933;
    color: white;
}
.item:hover{
    background: #066927;
    color: yellow;
}
.sal:hover{
    background: #d00c0c;
    color: yellow;
}
</style>