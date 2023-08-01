<script setup lang="ts">
import { useCharacterStore } from '@/stores/character';
import { ref } from 'vue';
import ArmorType from './components/ArmorType.vue';
import Armors from './components/Armors.vue';
import Attack from './components/Attack.vue';
import Block from './components/Block.vue';
import Coins from './components/Coins.vue';
import Dodge from './components/Dodge.vue';
import Fatigue from './components/Fatigue.vue';
import Initiative from './components/Initiative.vue';
import LifePoints from './components/LifePoints.vue';
import Movement from './components/Movement.vue';
import Notes from './components/Notes.vue';
import PhysicalAbilities from './components/PhysicalAbilities.vue';
import Player from './components/Player.vue';
import Resistances from './components/Resistances.vue';
import SecondaryAbilities from './components/SecondaryAbilities.vue';
import Weapons from './components/Weapons.vue';
import WearArmor from './components/WearArmor.vue';

const store = useCharacterStore()

const character = ref(store.character)
</script>

<template>
  <form class="form" action="" @submit="(e) => e.preventDefault()">
    <section class="flex flex-wrap items-start max-w-full">
      <fieldset class="panel border p-1 m-1 basis-3-5 grow w-full">
        <legend>Player</legend>
        <Player :character="character"></Player>
      </fieldset>
      <fieldset class="panel border p-1 m-1">
        <legend>Life Points</legend>
        <LifePoints :character="character"></LifePoints>
      </fieldset>
      <fieldset class="p-1 m-1">
        <Initiative :character="character"></Initiative>
      </fieldset>
      <fieldset class="panel border p-1 m-1" id="physical-abilities">
        <legend>Physical Abilities</legend>
        <PhysicalAbilities :abilities="character.physicalAbilities"></PhysicalAbilities>
      </fieldset>
      <fieldset class="panel border p-1 m-1">
        <legend>Fatigue</legend>
        <Fatigue :character="character"></Fatigue>
      </fieldset>
      <fieldset class="panel border p-1 m-1">
        <legend>Movement</legend>
        <Movement :character="character"></Movement>
      </fieldset>
      <fieldset class="panel border p-1 m-1">
        <legend>Wear Armor</legend>
        <WearArmor :character="character"></WearArmor>
      </fieldset>
      <fieldset class="border">
        <Armors :character="character"></Armors>
      </fieldset>
      <fieldset class="border">
        <ArmorType :character="character"></ArmorType>
      </fieldset>
      <fieldset class="panel border p-1 m-1">
        <legend>Attack</legend>
        <Attack :character="character"></Attack>
      </fieldset>
      <fieldset class="panel border p-1 m-1">
        <legend>Block</legend>
        <Block :character="character"></Block>
      </fieldset>
      <fieldset class="panel border p-1 m-1">
        <legend>Dodge</legend>
        <Dodge :character="character"></Dodge>
      </fieldset>
      <fieldset>
        <Weapons :character="character"></Weapons>
      </fieldset>
      <fieldset class="panel border p-1 m-1">
        <legend>Secondary Abilities</legend>
        <!--  v-if="Data.classRules.hasOwnProperty(character.charClass)" -->
        <SecondaryAbilities :character="character">
        </SecondaryAbilities>
      </fieldset>
    </section>
    <section class="flex flex-wrap">
      <fieldset class="panel border p-1 m-1" id="resistances">
        <legend>Resistances</legend>
        <Resistances :character="character"></Resistances>
      </fieldset>
      <fieldset class="panel border p-1 m-1" id="notes">
        <legend class="">Coins</legend>
        <Coins :character="character"></Coins>
      </fieldset>
      <fieldset class="panel border p-1 m-1 grow w-full" id="notes">
        <legend class="">Notes</legend>
        <Notes :character="character"></Notes>
      </fieldset>
    </section>
  </form>
</template>

<style scoped lang="scss">
.panel {
  white-space: nowrap;
  overflow-x: auto;
}

// .form {}

[title] {
  text-decoration: underline dotted;
}
</style>
