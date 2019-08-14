<template>
  <header class="flex flex-row">
    <div
      class="flex items-center w-full p-4 h-32 font-mono shadow-lg hover:shadow-xl rounded-lg bg-white clip text text-6xl text-shadow transition-shadow uppercase"
    >
      <h1 class="black-blue bg-clip-text text-fill-transparent">
        {{ $store.state.name }}
      </h1>
    </div>
    <menu-button></menu-button>
  </header>
</template>

<script>
import MenuButton from './MenuButton'

export default {
  name: 'HeaderBar',
  components: {
    MenuButton
  }
}
</script>
