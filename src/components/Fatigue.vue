<script setup lang="ts">
import type { Types } from '@/types';

const props = defineProps<{
  character: Types.Character
}>()
</script>

<template>
  <table>
    <tbody>
      <tr>
        <td>Base</td>
        <td><input class="bg-gray-100 w-12" type="number" v-model.number.fill.0="character.fatigue.base"></td>
      </tr>
      <tr>
        <td>Special</td>
        <td><input class="bg-gray-100 w-12" type="number" v-model.number.fill.0="character.fatigue.special"></td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Actual</td>
        <td><input class="bg-gray-100 w-12" type="number" disabled readonly></td>
      </tr>
    </tfoot>
  </table>
</template>

<style scoped lang="scss"></style>
