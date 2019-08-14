<template>
  <div>
    <a
      href="#"
      class="yellow-green flex items-center justify-center md:w-16 md:h-16 lg:w-32 lg:h-32 mx-4 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
      @click.prevent="$store.commit('toggleDisplay')"
    >
      <transition name="fade" mode="out-in">
        <no-ssr>
          <fa
            v-if="this.$store.state.displayMenu"
            key="1"
            :icon="['fas', 'times']"
            size="4x"
          />
          <fa v-else key="2" :icon="['fas', 'bars']" size="4x" />
        </no-ssr>
      </transition>
    </a>
  </div>
</template>

<script>
export default {
  name: 'MenuButton'
}
</script>

<style>
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-leave-active {
  transition: transform 0.5s, opacity 0.5s;
}
.fade-enter {
  opacity: 0;
}
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: scale(4);
  opacity: 0;
}
</style>
