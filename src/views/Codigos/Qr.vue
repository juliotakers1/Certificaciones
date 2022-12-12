<template>
        <div>
            <Navbar />
            <div class="p-5 d-lg-flex justify-content-lg-center ">
            <div class="card  p-3" style="width: 80mm;">
                <div class="input-group mb-3">
                <span class="me-2 fw-bold">Paciente: </span>
                <p> Julio Vasquez</p>
                <!-- <input type="text" class="form-control" v-model="documento.nombre"> -->
                </div>

                <div class="input-group mb-3">
                <span class="me-2 fw-bold"  >Fecha Entrega:</span>
                <input type="date" class="form-control" >
                </div>
                

                <div class="d-flex justify-content-center">
                    <vue-qrcode v-bind:value="qrValue"  />
                </div>

                <div class="input-group mt-3 text-center">
                <p class="" style="font-size: 10px;"> <strong> NOTA:</strong> es obligatorio presentar esta contraseña para la entrega de la certificación. Si no la trae, favor de presentar documento de identificación</p>
                </div>

            </div>

            </div>
        </div>
</template>

<script>
import Navbar from '@/components/Layouts/Navbar.vue';

export default {
    components: { Navbar }
}
</script>

<style>

</style>