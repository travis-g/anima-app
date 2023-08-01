<script setup lang="ts">
import type { Types } from '@/types';

const props = defineProps<{
  character: Types.Character
}>()
</script>

<template>
  <table class="panel m-1">
    <thead>
      <tr>
        <th>Armor</th>
        <td>For.</td>
        <td>Pres.</td>
        <td>Sp.</td>
        <td>Req.</td>
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
        </tr>
      </template>
    </tbody>
  </table>
</template>

<style scoped lang="scss"></style>
