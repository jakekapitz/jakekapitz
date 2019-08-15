<template>
  <header class="flex flex-row items-center">
    <div
      class="flex items-center mx-2 md:mx-4 w-full h-24 md:h-32 shadow-lg hover:shadow-xl rounded-lg bg-white text-shadow transition-shadow uppercase"
    >
      <h1
        class="black-blue mx-2 md:mx-4 font-mono font-bold tracking-tighter text-5xl md:text-5xl bg-clip-text text-fill-transparent tracking-wide"
      >
        {{ $store.state.name }}
      </h1>
    </div>
    <header-bar-button></header-bar-button>
  </header>
</template>

<script>
import HeaderBarButton from './HeaderBarButton'

export default {
  name: 'HeaderBar',
  components: {
    HeaderBarButton
  }
}
</script>
