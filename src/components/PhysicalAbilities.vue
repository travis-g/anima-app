<script setup lang="ts">
import { Util } from '@/util';
import { Types } from '@/types';
const props = defineProps<{
  abilities: Types.PrimaryAbilityScores
}>()

</script>

<template>
  <table>
    <thead>
      <tr>
        <th></th>
        <th>Base</th>
        <th>Actual</th>
        <th>Bonus</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="abi in Types.AbilityClasses">
        <th>{{ Types.abilityClassAbbr(abi).toUpperCase() }}</th>
        <td><input class="bg-gray-100 w-12 " type="number" v-model.number="abilities[abi].base" min="1" max="20"></td>
        <td><input class="bg-gray-100 w-12 " type="number" :value="abilities[abi]?.base" min="1" max="20" disabled readonly>
        </td>
        <td><input class="bg-gray-100 w-12 " type="number"
            :value="Util.primaryAbilityScoreBonus(abilities[abi]?.base)" min="1" max="20" disabled readonly>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
