<script setup lang="ts">
import type { Types } from '@/types';

const props = defineProps<{
  character: Types.Character
}>()
</script>

<template>
  <template v-for="i in [0, 1, 2, 3]">
    <fieldset class="border p-1 m-1">
      <legend>Weapon <input class="bg-gray-100 w-40" type="text"></legend>
      <table class="text-center leading-none">
        <tbody>
          <tr class="font-narrow">
            <th>Atk</th>
            <th>Def</th>
            <th>Base Dmg</th>
            <th>Str. Bonus</th>
            <th>Final Dmg</th>
            <th>Special</th>
          </tr>
          <tr>
            <td><input class="bg-gray-100 w-16" type="number"></td>
            <td><input class="bg-gray-100 w-16" type="number"></td>
            <td><input class="bg-gray-100 w-20" type="number"></td>
            <td><input class="bg-gray-100 w-20" type="number" disabled readonly></td>
            <td><input class="bg-gray-100 w-20" type="number"></td>
            <td><input class="bg-gray-100 w-20" type="text"></td>
          </tr>
        </tbody>
      </table>
      <table class="w-full text-center leading-none">
        <tbody>
          <tr class="font-narrow">
            <th>Spd</th>
            <th>Fort</th>
            <th>Breakage</th>
            <th>Presence</th>
            <th>1&deg; Atk Type</th>
            <th>2&deg; Atk Type</th>
          </tr>
          <tr>
            <td><input class="bg-gray-100 w-16" type="number"></td>
            <td><input class="bg-gray-100 w-16" type="number"></td>
            <td><input class="bg-gray-100 w-16" type="number"></td>
            <td><input class="bg-gray-100 w-16" type="number"></td>
            <td><input class="bg-gray-100 w-20" type="text"></td>
            <td><input class="bg-gray-100 w-20" type="text"></td>
          </tr>
        </tbody>
      </table>
    </fieldset>
  </template>
</template>

<style scoped lang="scss">
th {
  font-weight: inherit;
}
</style>
