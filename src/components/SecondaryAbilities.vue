<script setup lang="ts">
import { Data } from '@/data';
import { Types } from '@/types';
import { Util } from '@/util';

const props = defineProps<{
  character: Types.Character
}>()

function secondaryAbilitiesCost(charClass: string, secondary: Types.SecondaryAbility, category: string) {
  const classValues = <Types.CharacterClassValues>((Data.classRules as any)[charClass])
  if (!classValues) {
    return 0
  }
  return classValues.reducedSecondaryCosts[secondary] ?? (classValues.secondaryCosts as any)[category]
}

</script>
<template>
  <table>
    <template v-for="(category, categoryName) in Types.SecondaryAbilitiesCategorized" :key="categoryName">
      <thead class="sticky top-0 bg-white">
        <tr>
          <th class="flex">
            <strong>{{ (Data.classRules as any)[character.charClass]?.secondaryCosts[categoryName] }}</strong>
            <span class="grow">{{ Util.capitalize(categoryName as string) }}</span>
          </th>
          <th>Base</th>
          <th>Bonus</th>
          <th>Spe</th>
          <th>Class</th>
          <th>Final</th>
        </tr>
      </thead>
      <tbody class="text-sm">
        <template v-for="(basis, ability) in category" :key="ability">
          <tr class="hover:bg-gray-100">
            <th class="flex font-normal">
              <!-- TODO: add class secondary costs -->
              <span>{{ "[" + secondaryAbilitiesCost(character.charClass, ability as Types.SecondaryAbility, categoryName as string) + "]" }}</span>
              <span class=" grow text-left">{{ Types.SecondaryAbilities[ability as Types.SecondaryAbility] }}</span>
              <strong class=" small-caps">{{ Types.abilityClassAbbr(basis) }}</strong>
            </th>
            <td><input class="w-12 bg-gray-100" type="number"
                v-model.number.fill.0="character.secondaryAbilities[ability as Types.SecondaryAbility].base">
            </td>
            <td>+<input class="w-12 bg-gray-100" type="number" :value="Util.primaryAbilityScoreBonus(character.physicalAbilities[basis].base)"
                disabled readonly :placeholder="Types.abilityClassAbbr(basis).toUpperCase()"></td>
            <td>+<input class="w-12 bg-gray-100" type="number"
                v-model.number.fill.0="character.secondaryAbilities[ability as Types.SecondaryAbility].special">
            </td>
            <td>+<input class="w-12 bg-gray-100" type="number"
                v-model.number.fill.0="character.secondaryAbilities[ability as Types.SecondaryAbility].class">
            </td>
            <td>=<input class="w-12 bg-gray-100" type="number" :value="Util.secondaryFinalScore(character, ability as Types.SecondaryAbility)"
                disabled readonly>
            </td>
          </tr>
        </template>
      </tbody>
    </template>
  </table>
</template>

<style scoped>
table {
  position: relative;
}

.grow {
  flex-grow: 1
}


</style>
