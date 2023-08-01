<script setup lang="ts">
import { Util } from '@/util';
import { Types } from '@/types';
import { computed } from 'vue';
const props = defineProps<{
  character: Types.Character
}>()

const presence = computed(() => Math.round(props.character.developmentPoints.total / 20) || 0)
</script>

<template>
  <table>
    <thead>
      <tr>
        <th></th>
        <th>Base</th>
        <th>Cha</th>
        <th>Bon</th>
        <th>Spe</th>
        <th>Final</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(resistance, type) in character.resistances" :key="type">
        <tr>
          <th>{{ Util.capitalize(type) }}</th>
          <td><input class="bg-gray-100 w-14  text-center" type="number" :value="presence"></td>
          <td><input class="bg-black w-14  text-center text-white uppercase" type="text" disabled readonly
              :value="resistance.characteristic ? Types.abilityClassAbbr(resistance.characteristic) : ''"></td>
          <td><input class="w-14  text-center" type="number" disabled readonly :class="resistance.characteristic ? 'bg-gray-100' : 'bg-black text-white'"
              :value="resistance.characteristic ? Util.primaryAbilityScoreBonus(character.physicalAbilities[resistance.characteristic].base) : null">
          </td>
          <td><input class="bg-gray-100 w-14  text-center" type="number" v-model.number.fill.0="resistance.special"></td>
          <td><input class="bg-gray-100 w-14  text-center" type="number" disabled readonly></td>
        </tr>
      </template>
    </tbody>
  </table>
</template>
