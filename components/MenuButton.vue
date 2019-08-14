<template>
  <div>
    <button
      class="yellow-green md:w-16 md:h-16 lg:w-32 lg:h-32 mx-4 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
      @click.prevent="$store.commit('toggleDisplay')"
    >
      <span class="md:w-8 md:h-8 lg:w-16 lg:h-16 text-white">
        <fa :icon="['fal', 'bars']" />
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'MenuButton'
}
</script>
