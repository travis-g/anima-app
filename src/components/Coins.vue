<script setup lang="ts">
import { Types } from '@/types';

const props = defineProps<{
  character: Types.Character
}>()
</script>

<template>
  <table>
    <tbody>
      <tr>
        <th>Gold</th>
        <td><input class="bg-gray-100 w-20  text-right" type="number" min="0" v-model="character.coins.gold"></td>
        <td class="text-right">{{ Math.floor((character.coins.copper / 1000) + (character.coins.silver / 10) +
          character.coins.gold) }}</td>
      </tr>
      <tr>
        <th>Silver</th>
        <td><input class="bg-gray-100 w-20  text-right" type="number" min="0" v-model="character.coins.silver"></td>
        <td class="text-right">{{ Math.floor((character.coins.copper / 10) + character.coins.silver + (character.coins.gold
          * 100)) }}</td>
      </tr>
      <tr>
        <th>Copper</th>
        <td><input class="bg-gray-100 w-20  text-right" type="number" min="0" v-model="character.coins.copper"></td>
        <td class="text-right">{{ Math.floor(character.coins.copper + (character.coins.silver * 10) +
          (character.coins.gold * 1000)) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss"></style>
