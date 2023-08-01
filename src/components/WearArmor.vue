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
        <td><input class="bg-gray-100 w-12" type="number" disabled readonly></td>
      </tr>
      <tr>
        <td>Strength</td>
        <td><input class="bg-gray-100 w-12" type="number"></td>
      </tr>
      <tr>
        <td>Sp.</td>
        <td><input class="bg-gray-100 w-12" type="number"></td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th class="small-caps">Final</th>
        <td><input class="bg-gray-100 w-12" type="number" disabled readonly></td>
      </tr>
    </tfoot>
  </table>
</template>

<style scoped lang="scss"></style>
