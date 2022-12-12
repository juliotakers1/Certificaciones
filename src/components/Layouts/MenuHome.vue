<template >
    <div class="row py-2"> <!--este es el row principal-->
    
    <!--este es el primer cuadro-->
    <div class="col-12 py-3 mb-2"></div> <!--este es el espacio de padding arriba abajo-->
    <div class="col-1 "></div><!--este es mi espacio a la izquierda-->
    <div class="col-md-4 mb-2" ><!--este es mi cuadro -->
    <router-link to="/certificacion" class="card-link text-white fw-bold fs-1 text-center" >
     <div class="card" id="c1">
      <div class="card-body text-center">
        <i class="fas fa-folder-plus mx-auto" id="icon"></i>
        
         <br>
        Nueva
      </div>
     </div>
    </router-link>
    </div>
    
    <!--este es el segudno cuadro-->
    <div class="col-2 "></div>
    <div class="col-md-4 mb-2" >
    <router-link to="/pendientes" class="card-link text-white fw-bold fs-1 text-center">
     <div class="card" id="c2">
      <div class="card-body text-center">
        <i class="fas fa-file-import mx-auto" id="icon"></i>
         <br>
         Pendientes
      </div>
     </div>
    </router-link>
    </div>
    
    <div class="col-12 py-2 mb-5"></div> <!--este es el espacio de padding arriba abajo-->
    <div class="col-1 "></div><!--este es mi espacio a la izquierda-->
    <div class="col-md-4 mb-2" ><!--este es mi cuadro -->
    <router-link to="/finalizadas" class="card-link text-white fw-bold fs-1 text-center">
     <div class="card" id="c4">
      <div class="card-body text-center">
        <i class="fas fa-file-upload mx-auto" id="icon"></i><br>
        Finalizadas
      </div>
     </div>
    </router-link>
    </div>
    
    
    <div class="col-2 "></div>
    <div class="col-md-4 mb-5">
    <router-link to="/reporte" class="card-link text-white fw-bold fs-1 col-12">
     <div class="card" id="c3">
      <div class="card-body text-center">
        <i class="fa-solid fa-square-poll-horizontal mx-auto" id="icon"></i><br>
        Reportes
      </div>
     </div>
    </router-link>
    </div>
     
    </div>
    </template>
    
    <script>
    import { useStore } from 'vuex'
    export default {
    setup() {
            const store = useStore()
            // const user = store.state.user.role
            // return {
            //     user
            // }
        },
    }
    </script>
    
     <style   >
     a{
       text-decoration: none;
     }
     #c1{
         background: #cddc39;
         width: 27rem;
         height:15rem;
         border-radius: 15px;
     }
     #c2{
         background: #4caf50;
         width: 27rem;
         height:15rem;
         border-radius: 15px;
     }
     #c3{
         background: #cddc39;
         width: 27rem;
         height:15rem;
         border-radius: 15px;
     }
     #c4{
         background: #4caf50;
         width: 27rem;
         height:15rem;
         border-radius: 15px;
     }
     #icon{
         height: 125px;
         width: 125px;
        color: white;
     }
     </style>