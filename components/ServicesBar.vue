<template>
  <div
    class="container mx-auto flex flex-row flex-no-wrap justify-around items-center w-full px-4 py-8"
  >
    <services-bar-button
      v-for="(service, ref) in $store.state.services"
      :key="ref"
      :service="service"
      class="cursor-pointer"
    ></services-bar-button>
  </div>
</template>

<script>
import ServicesBarButton from '~/components/ServicesBarButton'

export default {
  name: 'ServicesBar',
  components: {
    ServicesBarButton
  }
}
</script>
