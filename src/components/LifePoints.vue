<script setup lang="ts">
import { Types } from '@/types';
import { Util } from '@/util';
import { computed } from 'vue';

const props = defineProps<{
  character: Types.Character
}>()


const baseLifePoints = computed(() => {
  const lp = props.character.lifePoints
  const con = props.character.physicalAbilities.constitution.base
  return 20 + (con * 10) + Util.primaryAbilityScoreBonus(con)
})
const finalLifePoints = computed(() => {
  const lp = props.character.lifePoints
  return baseLifePoints.value + lp.class
})
</script>
<template>
  <table>
    <tbody>
      <tr>
        <td>Multiple No</td>
        <td><input class="bg-gray-100 w-16" type="number"></td>
      </tr>
      <tr>
        <td>Base</td>
        <td><input class="bg-gray-100 w-16" type="number" :value="baseLifePoints"></td>
      </tr>
      <tr>
        <td>Class</td>
        <td><input class="bg-gray-100 w-16" type="number" v-model="character.lifePoints.class"></td>
      </tr>
      <tr>
        <td>Multiples</td>
        <td><input class="bg-gray-100 w-16" type="number" v-model="character.lifePoints.multiples"></td>
      </tr>
    </tbody>
  </table>
  <table>
    <thead>
      <th class="small-caps">actual</th>
    </thead>
    <tbody class="text-xl">
      <tr>
        <td>❤️<input class="bg-gray-100 w-20 text-center" type="number" v-model="character.lifePoints.actual" min="0"> / {{ finalLifePoints }}</td>
      </tr>
    </tbody>
  </table>
</template>
