<script setup lang="ts">
import { Types } from '@/types';
import { computed, ref, watch } from 'vue';

const props = defineProps<{
  character: Types.Character
}>()

watch(props.character, async (data: Types.Character) => {
  document.title = data.name
})

const size = computed(() => {
  return props.character.physicalAbilities[Types.AbilityClasses.Constitution]?.base +
    props.character.physicalAbilities[Types.AbilityClasses.Strength]?.base
})

const nextLevel = computed(() => {
  const exp = props.character.experience.actual
  switch (exp) {
    default:
      return 0
  }
})
</script>

<template>
  <div class="flex">
    <label class="grow">Name <input class="bg-gray-100" type="text" v-model="character.name" /></label>
    <select name="class" class="bg-gray-100" v-model="character.charClass" placeholder="Class">
      <option disabled>Class</option>
      <template v-for="(i, v) in Types.Classes">
        <option>{{ i }}</option>
      </template>
    </select>
    <label><abbr title="Level">Lv</abbr> <input class="bg-gray-100 w-12" name="level" v-model.number="character.level"
        type="number" min="0"></label>
  </div>
  <div class="flex">
    <label>Race <input class="bg-gray-100 w-40" name="race" v-model="character.race"></label>
    <div>
      <label>Gender <input class="bg-gray-100 w-28" name="gender" v-model="character.gender"></label>
      <label>Age <input class="bg-gray-100 w-16" name="age" v-model.number="character.age" type="number" min="0"></label>
    </div>
  </div>
  <div class="flex">
    <label>Appearance
      <input class="bg-gray-100 w-12" name="appearance" type="number" min="1" max="10"
        v-model.number="character.appearance"></label>
    <label>
      Hair / Eyes <input class="bg-gray-100 w-20" type="text" name="hair" v-model="character.hair">/
      <input class="bg-gray-100 w-20" type="text" name="eyes" v-model="character.eyes">
    </label>
  </div>
  <div class="flex">
    <label>Size <input class="bg-gray-100 w-12" name="size" type="number" :value="size" min="2" max="22" disabled
        readonly></label>
    <label>Height / Weight <input class="bg-gray-100 w-16" name="height" type="text" v-model="character.height"> / <input
        class="bg-gray-100 w-16" name="weight" type="number" v-model.number="character.weight" min="0"></label>
  </div>
  <hr />
  <div class="flex">
    <label class="grow">Experience
      <input class="bg-gray-100 w-16" name="actual" type="number" v-model.number="character.experience.actual" min="0">
      <!-- / <input class="bg-gray-100 w-16" name="next" type="number" :value="nextLevel" disabled readonly> -->
    </label>
    <label><abbr title="Development Points">DP</abbr>
      <input class="bg-gray-100 w-16" name="developmentPoints" v-model.number.fill.0="character.developmentPoints.current"
        type="number" min="0">/<input class="bg-gray-100 w-16" name="developmentPointsMax"
        v-model.number.fill.0="character.developmentPoints.total" type="number">
    </label>
  </div>
</template>

<style lang="scss" scoped>
.columns-2 {
  columns: 2
}
</style>
