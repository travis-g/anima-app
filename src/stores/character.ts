import { defineStore } from "pinia";
import { reactive, watch, computed } from "vue";
import { Types } from "@/types"

export const useCharacterStore = defineStore('character', () => {
  const character: Types.Character = reactive({
    name: "",
    charClass: "",
    level: 0,
    age: 0,
    gender: "",
    race: "",
    hair: "",
    eyes: "",
    developmentPoints: {
      current: 0,
      total: 0
    },
    height: "",
    weight: 0,
    appearance: 0,
    experience: {
      actual: 0
    },
    socialClass: 0,
    // Vue sucks
    physicalAbilities: <Types.PrimaryAbilityScores>{
      agility: { base: 0 },
      constitution: { base: 0 },
      dexterity: { base: 0 },
      strength: { base: 0 },
      intelligence: { base: 0 },
      perception: { base: 0 },
      power: { base: 0 },
      willpower: { base: 0 },
    },
    // and gets worse
    secondaryAbilities: {
      acrobatics: { base: 0, special: 0, class: 0 },
      athleticism: { base: 0, special: 0, class: 0 },
      climb: { base: 0, special: 0, class: 0 },
      jump: { base: 0, special: 0, class: 0 },
      ride: { base: 0, special: 0, class: 0 },
      swim: { base: 0, special: 0, class: 0 },
      composure: { base: 0, special: 0, class: 0 },
      featsOfStrength: { base: 0, special: 0, class: 0 },
      withstandPain: { base: 0, special: 0, class: 0 },
      notice: { base: 0, special: 0, class: 0 },
      search: { base: 0, special: 0, class: 0 },
      track: { base: 0, special: 0, class: 0 },
      animals: { base: 0, special: 0, class: 0 },
      appraisal: { base: 0, special: 0, class: 0 },
      herbalLore: { base: 0, special: 0, class: 0 },
      history: { base: 0, special: 0, class: 0 },
      magicAppraisal: { base: 0, special: 0, class: 0 },
      medicine: { base: 0, special: 0, class: 0 },
      memorize: { base: 0, special: 0, class: 0 },
      navigation: { base: 0, special: 0, class: 0 },
      occult: { base: 0, special: 0, class: 0 },
      sciences: { base: 0, special: 0, class: 0 },
      intimidate: { base: 0, special: 0, class: 0 },
      leadership: { base: 0, special: 0, class: 0 },
      persuasion: { base: 0, special: 0, class: 0 },
      style: { base: 0, special: 0, class: 0 },
      disguise: { base: 0, special: 0, class: 0 },
      hide: { base: 0, special: 0, class: 0 },
      lockPicking: { base: 0, special: 0, class: 0 },
      poisons: { base: 0, special: 0, class: 0 },
      theft: { base: 0, special: 0, class: 0 },
      trapLore: { base: 0, special: 0, class: 0 },
      stealth: { base: 0, special: 0, class: 0 },
      art: { base: 0, special: 0, class: 0 },
      dance: { base: 0, special: 0, class: 0 },
      forging: { base: 0, special: 0, class: 0 },
      music: { base: 0, special: 0, class: 0 },
      sleightOfHand: { base: 0, special: 0, class: 0 },
      tattoos: { base: 0, special: 0, class: 0 },
      runes: { base: 0, special: 0, class: 0 },
      law: { base: 0, special: 0, class: 0 },
      trade: { base: 0, special: 0, class: 0 },
      animism: { base: 0, special: 0, class: 0 },
      alchemy: { base: 0, special: 0, class: 0 },
      etiquette: { base: 0, special: 0, class: 0 },
      streetwise: { base: 0, special: 0, class: 0 },
      lostLogias: { base: 0, special: 0, class: 0 },
      architecture: { base: 0, special: 0, class: 0 },
      piloting: { base: 0, special: 0, class: 0 },
      technomagic: { base: 0, special: 0, class: 0 },
      divineScience: { base: 0, special: 0, class: 0 },
      cooking: { base: 0, special: 0, class: 0 },
    },
    initiatives: {},
    lifePoints: {
      base: 0,
      class: 0,
      multiples: 1,
      actual: 0
    },
    fatigue: {
      base: 0,
      special: 0,
      actual: 0
    },
    magicAccumulation: {
      base: 0,
      multiples: 0,
      special: 0,
      current: 0,
    },
    zeon: {
      base: 0,
      special: 0,
    },
    pathLevel: {
      light: 0,
      darkness: 0,
      creation: 0,
      destruction: 0,
      fire: 0,
      water: 0,
      earth: 0,
      air: 0,
      essence: 0,
      illusion: 0,
      necromancy: 0,
    },
    resistances: <Types.Resistances>{
      base: {
        special: 0
      },
      physical: {
        characteristic: Types.AbilityClasses.Constitution,
        special: 0
      },
      disease: {
        characteristic: Types.AbilityClasses.Constitution,
        special: 0
      },
      poison: {
        characteristic: Types.AbilityClasses.Constitution,
        special: 0
      },
      magic: {
        characteristic: Types.AbilityClasses.Power,
        special: 0
      },
      psychic: {
        characteristic: Types.AbilityClasses.Willpower,
        special: 0
      }
    },
    creationPoints: {
      base: 3,
      bonus: 0,
    },
    weapons: <Types.WeaponStat[]>[],
    advantages: [],
    disadvantages: [],
    coins: {
      copper: 0,
      silver: 0,
      gold: 0
    },
    notes: ""
  })

  console.debug("initializing useCharacterStore")
  const data = localStorage.getItem("character")
  if (data) {
    const { name, charClass, level, age, gender, race, hair, eyes, developmentPoints, height, weight, appearance, experience, socialClass,
      physicalAbilities, secondaryAbilities, lifePoints, initiatives, fatigue, pathLevel, magicAccumulation, zeon, creationPoints, weapons, advantages, disadvantages, resistances, coins, notes
    } = JSON.parse(data)
    character.name = name
    character.charClass = charClass
    character.level = level
    character.age = age
    character.gender = gender
    character.race = race
    character.hair = hair
    character.eyes = eyes
    character.developmentPoints = {
      current: developmentPoints.current,
      total: developmentPoints.total
    }
    character.height = height
    character.weight = weight
    character.appearance = appearance
    character.experience = {
      actual: experience?.actual ?? 0,
    }
    character.socialClass = socialClass

    // primary
    character.physicalAbilities = {
      agility: physicalAbilities?.agility ?? { base: 0 },
      constitution: physicalAbilities?.constitution ?? { base: 0 },
      dexterity: physicalAbilities?.dexterity ?? { base: 0 },
      strength: physicalAbilities?.strength ?? { base: 0 },
      intelligence: physicalAbilities?.intelligence ?? { base: 0 },
      perception: physicalAbilities?.perception ?? { base: 0 },
      power: physicalAbilities?.power ?? { base: 0 },
      willpower: physicalAbilities?.willpower ?? { base: 0 },
    }
    // secondaries
    character.secondaryAbilities = {
      acrobatics: secondaryAbilities.acrobatics,
      athleticism: secondaryAbilities.athleticism,
      climb: secondaryAbilities.climb,
      jump: secondaryAbilities.jump,
      ride: secondaryAbilities.ride,
      swim: secondaryAbilities.swim,
      composure: secondaryAbilities.composure,
      featsOfStrength: secondaryAbilities.featsOfStrength,
      withstandPain: secondaryAbilities.withstandPain,
      notice: secondaryAbilities.notice,
      search: secondaryAbilities.search,
      track: secondaryAbilities.track,
      animals: secondaryAbilities.animals,
      appraisal: secondaryAbilities.appraisal,
      herbalLore: secondaryAbilities.herbalLore,
      history: secondaryAbilities.history,
      magicAppraisal: secondaryAbilities.magicAppraisal,
      medicine: secondaryAbilities.medicine,
      memorize: secondaryAbilities.memorize,
      navigation: secondaryAbilities.navigation,
      occult: secondaryAbilities.occult,
      sciences: secondaryAbilities.sciences,
      intimidate: secondaryAbilities.intimidate,
      leadership: secondaryAbilities.leadership,
      persuasion: secondaryAbilities.persuasion,
      style: secondaryAbilities.style,
      disguise: secondaryAbilities.disguise,
      hide: secondaryAbilities.hide,
      lockPicking: secondaryAbilities.lockPicking,
      poisons: secondaryAbilities.poisons,
      theft: secondaryAbilities.theft,
      trapLore: secondaryAbilities.trapLore,
      stealth: secondaryAbilities.stealth,
      art: secondaryAbilities.art,
      dance: secondaryAbilities.dance,
      forging: secondaryAbilities.forging,
      music: secondaryAbilities.music,
      sleightOfHand: secondaryAbilities.sleightOfHand,
      tattoos: secondaryAbilities.tattoos,
      runes: secondaryAbilities.runes,
      law: secondaryAbilities.law,
      animism: secondaryAbilities.animism,
      alchemy: secondaryAbilities.alchemy,
      trade: secondaryAbilities.trade,
      etiquette: secondaryAbilities.etiquette,
      streetwise: secondaryAbilities.streetwise,
      lostLogias: secondaryAbilities.lostLogias,
      piloting: secondaryAbilities.piloting,
      architecture: secondaryAbilities.architecture,
      technomagic: secondaryAbilities.technomagic,
      divineScience: secondaryAbilities.divineScience,
      cooking: secondaryAbilities.cooking,
    }

    character.lifePoints = {
      class: lifePoints?.class ?? 0,
      multiples: lifePoints?.multiples ?? 0,
      actual: lifePoints?.actual ?? 0
    }

    character.initiatives = initiatives

    character.fatigue.actual = fatigue?.actual ?? 0

    character.pathLevel = pathLevel
    character.magicAccumulation = magicAccumulation
    character.zeon = zeon
    character.creationPoints = creationPoints

    character.weapons = weapons

    character.advantages = advantages
    character.disadvantages = disadvantages
    character.resistances = <Types.Resistances>{
      base: {
        special: resistances?.base?.special ?? 0,
      },
      physical: {
        characteristic: Types.AbilityClasses.Constitution,
        special: resistances?.physical?.special ?? 0,
      },
      disease: {
        characteristic: Types.AbilityClasses.Constitution,
        special: resistances?.disease?.special ?? 0,
      },
      poison: {
        characteristic: Types.AbilityClasses.Constitution,
        special: resistances?.poison?.special ?? 0,
      },
      magic: {
        characteristic: Types.AbilityClasses.Power,
        special: resistances?.magic?.special ?? 0,
      },
      psychic: {
        characteristic: Types.AbilityClasses.Willpower,
        special: resistances?.psychic?.special ?? 0,
      },
    }

    character.coins = {
      copper: coins.copper ?? 0,
      silver: coins.silver ?? 0,
      gold: coins.gold ?? 0
    }

    character.notes = notes
    console.log(character)
  }


  // computed
  const size = computed(() => character.physicalAbilities.constitution.base + character.physicalAbilities.strength.base)
  const presence = computed(() => Math.round(character.developmentPoints.total / 20))

  watch(() => character, (state) => {
    console.debug("setting character")
    localStorage.setItem("character", JSON.stringify(state))
  }, { deep: true })

  return {
    character, size, presence
  }
})
