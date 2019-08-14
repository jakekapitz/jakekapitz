<template>
  <div>
    <button
      class="yellow-green md:w-16 md:h-16 lg:w-32 lg:h-32 mx-4 text-white rounded-lg shadow-lg hover:shadow-xl"
      @click="$store.commit('toggleDisplay')"
    >
      <fa :icon="['fal', 'bars']" size="4x" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'MenuButton'
}
</script>
