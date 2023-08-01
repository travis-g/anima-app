<script setup lang="ts">
import type { Types } from '@/types';

const props = defineProps<{
  character: Types.Character
}>()
</script>

<template>
  <table class="panel m-1">
    <thead class="text-center">
      <tr>
        <th>Armor Type</th>
        <td>Cut</td>
        <td>Imp</td>
        <td>Thr</td>
        <td>Heat</td>
        <td>Ele</td>
        <td>Cold</td>
        <td>Ene</td>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="i in [0, 1, 2]">
        <tr>
          <td><input class="bg-gray-100 w-32" type="number"></td>
          <td><input class="bg-gray-100 w-12" type="number"></td>
          <td><input class="bg-gray-100 w-12" type="number"></td>
          <td><input class="bg-gray-100 w-12" type="number"></td>
          <td><input class="bg-gray-100 w-12" type="number"></td>
          <td><input class="bg-gray-100 w-12" type="number"></td>
          <td><input class="bg-gray-100 w-12" type="number"></td>
          <td><input class="bg-gray-100 w-12" type="number"></td>
          <td><input class="bg-gray-100 w-24" type="number"></td>
        </tr>
      </template>
    </tbody>
    <tfoot>
      <tr>
        <th class="small-caps">Final</th>
        <td><input class="bg-gray-100 w-12" type="number" disabled readonly></td>
        <td><input class="bg-gray-100 w-12" type="number" disabled readonly></td>
        <td><input class="bg-gray-100 w-12" type="number" disabled readonly></td>
        <td><input class="bg-gray-100 w-12" type="number" disabled readonly></td>
        <td><input class="bg-gray-100 w-12" type="number" disabled readonly></td>
        <td><input class="bg-gray-100 w-12" type="number" disabled readonly></td>
        <td><input class="bg-gray-100 w-12" type="number" disabled readonly></td>
        <td><input class="bg-gray-100 w-24" type="number" disabled readonly></td>
      </tr>
    </tfoot>
  </table>
</template>

<style scoped lang="scss"></style>
