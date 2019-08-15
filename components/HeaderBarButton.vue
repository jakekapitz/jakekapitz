<template>
  <div>
    <a
      href="#"
      class="yellow-green flex items-center justify-center w-24 h-24 md:w-32 md:h-32 mx-2 md:mx-4 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
      @click.prevent="$store.commit('toggleDisplay')"
    >
      <transition name="fade" mode="out-in">
        <no-ssr>
          <fa
            v-if="this.$store.state.displayMenu"
            key="1"
            :icon="['fas', 'times']"
            size="3x"
          />
          <fa v-else key="2" :icon="['fas', 'bars']" size="3x" />
        </no-ssr>
      </transition>
    </a>
  </div>
</template>

<script>
export default {
  name: 'HeaderBarButton'
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
