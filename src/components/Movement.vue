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
        <td>Penalty</td>
        <td><input class="bg-gray-100 w-12" type="number"></td>
      </tr>
      <tr>
        <td>Bonus</td>
        <td><input class="bg-gray-100 w-12" type="number"></td>
      </tr>
      <tr>
        <th>Final</th>
        <td><input class="bg-gray-100 w-12" type="number" disabled readonly></td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>M/Turn</th>
        <td><input class="bg-gray-100 w-12" type="number" disabled readonly></td>
      </tr>
    </tfoot>
  </table>
</template>

<style scoped lang="scss"></style>
