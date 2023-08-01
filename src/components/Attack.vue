<script setup lang="ts">
import { Data } from '@/data';
import type { Types } from '@/types';
import { Util } from '@/util';
import { computed } from 'vue';

const props = defineProps<{
  character: Types.Character
}>()

const classBonus = computed(() => {
  return (Data.classRules as any)[props.character.charClass]?.attack ?? 0
})
</script>

<template>
  <table>
    <tbody>
      <tr>
        <td>Base</td>
        <td><input class="bg-gray-100 w-20" type="number" disabled readonly></td>
      </tr>
      <tr>
        <td>Dexterity</td>
        <td><input class="bg-gray-100 w-20" type="number" disabled readonly :value="Util.primaryAbilityScoreBonus(character.physicalAbilities.dexterity.base)"></td>
      </tr>
      <tr>
        <td>Class</td>
        <td><input class="bg-gray-100 w-20" type="number" :value="classBonus"></td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th class="small-caps font-bold">Final</th>
        <td><input class="bg-gray-100 w-20" type="number" disabled readonly></td>
      </tr>
    </tfoot>
  </table>
</template>

<style scoped lang="scss"></style>
