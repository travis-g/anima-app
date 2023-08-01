<script setup lang="ts">
import type { Types } from '@/types';


const props = defineProps<{
  character: Types.Character
}>()
</script>

<template>
  <textarea class="h-48 w-full p-1 leading-tight" v-model="character.notes"></textarea>
</template>

<style scoped lang="scss"></style>
