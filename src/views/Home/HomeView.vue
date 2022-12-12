<template>
  <div class="home">
    <NavbarWitems />
    <MenuHome />
  </div>
</template>

<script>
import MenuHome from '@/components/Layouts/MenuHome.vue';
import NavbarWitems from '@/components/Layouts/NavbarWitems.vue';

 

export default {
  name: 'HomeView',
  components: {
    NavbarWitems,
    MenuHome
}
}
</script>
