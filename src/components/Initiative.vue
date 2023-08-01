<script setup lang="ts">
import type { Types } from '@/types';
import { Util } from '@/util';

const props = defineProps<{
  character: Types.Character
}>()
</script>

<template>
  <table class="text-center text-sm">
    <thead class="small-caps">
      <tr>
        <th>Initiative</th>
        <td>Base</td>
        <td>Sp1</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th class="font-normal small-caps">Base</th>
        <!-- base of 20 for normal-sized characters -->
        <td><input class="bg-gray-100 w-12  text-center" type="number" readonly value="20"></td>
        <td><input class="bg-gray-100 w-12  text-center" type="number" readonly value="20"></td>
      </tr>
      <tr>
        <th class="font-normal small-caps">Armor</th>
        <td><input class="bg-gray-100 w-12  text-center" type="text" disabled readonly value="N/A"></td>
        <td><input class="bg-gray-100 w-12  text-center" type="number"></td>
      </tr>
      <tr>
        <th class="font-normal small-caps">Agility</th>
        <td><input class="bg-gray-100 w-12  text-center" type="number" :value="Util.primaryAbilityScoreBonus(character.physicalAbilities['agility']?.base)" disabled readonly></td>
        <td><input class="bg-gray-100 w-12  text-center" type="number" :value="Util.primaryAbilityScoreBonus(character.physicalAbilities['agility']?.base)" disabled readonly></td>
      </tr>
      <tr>
        <th class="font-normal small-caps">Dexterity</th>
        <td><input class="bg-gray-100 w-12  text-center" type="number" :value="Util.primaryAbilityScoreBonus(character.physicalAbilities['dexterity']?.base)" disabled readonly></td>
        <td><input class="bg-gray-100 w-12  text-center" type="number" :value="Util.primaryAbilityScoreBonus(character.physicalAbilities['dexterity']?.base)" disabled readonly></td>
      </tr>
      <tr>
        <th class="font-normal small-caps">Weapon</th>
        <td><input class="bg-gray-100 w-12  text-center" type="number" readonly value="20" title="Unarmed"></td>
        <td><input class="bg-gray-100 w-12  text-center" type="number"></td>
      </tr>
      <tr>
        <th class="font-normal small-caps">Class</th>
        <td><input class="bg-gray-100 w-12  text-center" type="number"></td>
        <td><input class="bg-gray-100 w-12  text-center" type="number"></td>
      </tr>
      <tr>
        <th class="font-normal small-caps">Special</th>
        <td><input class="bg-gray-100 w-12  text-center" type="number"></td>
        <td><input class="bg-gray-100 w-12  text-center" type="number"></td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th class="small-caps">Final</th>
        <td><input class="bg-gray-100 w-12  text-center" type="number"></td>
        <td><input class="bg-gray-100 w-12  text-center" type="number"></td>
      </tr>
    </tfoot>
  </table>
</template>
