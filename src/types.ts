export module Types {

  export interface Character {
    name: string;
    charClass: string;
    level: number;
    age: number;
    gender: string;
    race: string;
    hair: string;
    eyes: string;
    developmentPoints: {
      current: number;
      total: number;
    };
    height: string;
    weight: number;
    appearance: number;
    experience: {
      actual: number;
    };
    socialClass: number;
    physicalAbilities: {
      agility: PrimaryAbilityScore;
      constitution: PrimaryAbilityScore;
      dexterity: PrimaryAbilityScore;
      strength: PrimaryAbilityScore;
      intelligence: PrimaryAbilityScore;
      perception: PrimaryAbilityScore;
      power: PrimaryAbilityScore;
      willpower: PrimaryAbilityScore;
    }
    secondaryAbilities: {
      acrobatics: SecondaryAbilityScore;
      athleticism: SecondaryAbilityScore;
      climb: SecondaryAbilityScore;
      jump: SecondaryAbilityScore;
      ride: SecondaryAbilityScore;
      swim: SecondaryAbilityScore;
      composure: SecondaryAbilityScore;
      featsOfStrength: SecondaryAbilityScore;
      withstandPain: SecondaryAbilityScore;
      notice: SecondaryAbilityScore;
      search: SecondaryAbilityScore;
      track: SecondaryAbilityScore;
      animals: SecondaryAbilityScore;
      appraisal: SecondaryAbilityScore;
      herbalLore: SecondaryAbilityScore;
      history: SecondaryAbilityScore;
      magicAppraisal: SecondaryAbilityScore;
      medicine: SecondaryAbilityScore;
      memorize: SecondaryAbilityScore;
      navigation: SecondaryAbilityScore;
      occult: SecondaryAbilityScore;
      sciences: SecondaryAbilityScore;
      intimidate: SecondaryAbilityScore;
      leadership: SecondaryAbilityScore;
      persuasion: SecondaryAbilityScore;
      style: SecondaryAbilityScore;
      disguise: SecondaryAbilityScore;
      hide: SecondaryAbilityScore;
      lockPicking: SecondaryAbilityScore;
      poisons: SecondaryAbilityScore;
      theft: SecondaryAbilityScore;
      trapLore: SecondaryAbilityScore;
      stealth: SecondaryAbilityScore;
      art: SecondaryAbilityScore;
      dance: SecondaryAbilityScore;
      forging: SecondaryAbilityScore;
      music: SecondaryAbilityScore;
      sleightOfHand: SecondaryAbilityScore;
      tattoos: SecondaryAbilityScore;
      runes: SecondaryAbilityScore;
      law: SecondaryAbilityScore;
      trade: SecondaryAbilityScore;
      alchemy: SecondaryAbilityScore;
      etiquette: SecondaryAbilityScore;
      streetwise: SecondaryAbilityScore;
      lostLogias: SecondaryAbilityScore;
      animism: SecondaryAbilityScore;
      piloting: SecondaryAbilityScore;
      architecture: SecondaryAbilityScore;
      technomagic: SecondaryAbilityScore;
      divineScience: SecondaryAbilityScore;
      cooking: SecondaryAbilityScore;
    }
    lifePoints: {
      // base: number
      class: number
      multiples: number
      actual: number
    }
    fatigue: {
      base: number
      special: number
      actual: number
    }
    initiatives: {}
    magicAccumulation: {
      base: number
      multiples: number
      special: number
    }
    zeon: {
      base: number
      special: number
    }
    pathLevel: {
      light: number
      darkness: number
      creation: number
      destruction: number
      fire: number
      water: number
      earth: number
      air: number
      essence: number
      illusion: number
      necromancy: number
    },
    resistances: Resistances
    creationPoints: {
      base: number
      bonus: number
    }
    weapons: WeaponStat[]
    advantages: Advantage[]
    disadvantages: Disadvantage[]

    coins: {
      copper: number
      silver: number
      gold: number
    }
    notes: string
  }

  export enum AbilityClasses {
    Agility = "agility",
    Constitution = "constitution",
    Dexterity = "dexterity",
    Strength = "strength",
    Intelligence = "intelligence",
    Perception = "perception",
    Power = "power",
    Willpower = "willpower"
  }

  export type AbilityClass = "agility" | "constitution" | "dexterity" | "strength" | "intelligence" | "perception" | "power" | "willpower"

  export function abilityClassAbbr(ability: AbilityClass): string {
    switch (ability) {
      case AbilityClasses.Agility:
        return "agi"
      case AbilityClasses.Constitution:
        return "con"
      case AbilityClasses.Dexterity:
        return "dex"
      case AbilityClasses.Strength:
        return "str"
      case AbilityClasses.Intelligence:
        return "int"
      case AbilityClasses.Perception:
        return "per"
      case AbilityClasses.Power:
        return "pow"
      case AbilityClasses.Willpower:
        return "wp"
      default:
        throw new Error("unknown AbilityClass: " + ability)
    }
  }

  export type PrimaryAbilityScores = {
    agility: PrimaryAbilityScore
    constitution: PrimaryAbilityScore
    dexterity: PrimaryAbilityScore
    strength: PrimaryAbilityScore
    intelligence: PrimaryAbilityScore
    perception: PrimaryAbilityScore
    power: PrimaryAbilityScore
    willpower: PrimaryAbilityScore
  }

  export type PrimaryAbilityScore = {
    base: number
  }


  export enum Classes {
    AcrobaticWarrior = "Acrobatic Warrior",
    Assassin = "Assassin",
    DarkPaladin = "Dark Paladin",
    Illusionist = "Illusionist",
    Mentalist = "Mentalist",
    Paladin = "Paladin",
    Ranger = "Ranger",
    Shadow = "Shadow",
    Summoner = "Summoner",
    Tao = "Tao",
    Technician = "Technician",
    Thief = "Thief",
    Warlock = "Warlock",
    Warrior = "Warrior",
    WarriorMentalist = "Warrior Mentalist",
    WarriorSummoner = "Warrior Summoner",
    Weaponsmaster = "Weaponsmaster",
    Wizard = "Wizard",
    WizardMentalist = "Wizard Mentalist",
  }

  export type SecondaryAbilityScore = {
    base: number
    special: number
    class: number
  }

  export const SecondaryAbilitiesCategorized: { [category: string]: { [ability: string]: AbilityClass } } = {
    athletics: {
      acrobatics: AbilityClasses.Agility,
      athleticism: AbilityClasses.Agility,
      climb: AbilityClasses.Agility,
      jump: AbilityClasses.Strength,
      ride: AbilityClasses.Agility,
      swim: AbilityClasses.Agility,
      piloting: AbilityClasses.Dexterity,
    },
    vigor: {
      composure: AbilityClasses.Willpower,
      featsOfStrength: AbilityClasses.Strength,
      withstandPain: AbilityClasses.Willpower,
    },
    perceptive: {
      notice: AbilityClasses.Perception,
      search: AbilityClasses.Perception,
      track: AbilityClasses.Perception,
    },
    intellectual: {
      animals: AbilityClasses.Intelligence,
      appraisal: AbilityClasses.Intelligence,
      herbalLore: AbilityClasses.Intelligence,
      history: AbilityClasses.Intelligence,
      magicAppraisal: AbilityClasses.Power,
      medicine: AbilityClasses.Intelligence,
      memorize: AbilityClasses.Intelligence,
      navigation: AbilityClasses.Intelligence,
      occult: AbilityClasses.Intelligence,
      sciences: AbilityClasses.Intelligence,
      architecture: AbilityClasses.Intelligence,
      law: AbilityClasses.Intelligence,
      streetwise: AbilityClasses.Intelligence,
      // divineScience: AbilityClasses.Intellligence,
      // technomagic: AbilityClasses.Intelligence,
      // lostLogias: AbilityClasses.Intelligence
    },
    social: {
      intimidate: AbilityClasses.Willpower,
      leadership: AbilityClasses.Power,
      persuasion: AbilityClasses.Intelligence,
      style: AbilityClasses.Power,
      trade: AbilityClasses.Intelligence,
      etiquette: AbilityClasses.Power,
    },
    subterfuge: {
      disguise: AbilityClasses.Dexterity,
      hide: AbilityClasses.Perception,
      lockPicking: AbilityClasses.Dexterity,
      poisons: AbilityClasses.Intelligence,
      theft: AbilityClasses.Dexterity,
      stealth: AbilityClasses.Agility,
      trapLore: AbilityClasses.Perception,
    },
    creative: {
      art: AbilityClasses.Power,
      dance: AbilityClasses.Agility,
      forging: AbilityClasses.Dexterity,
      music: AbilityClasses.Power,
      sleightOfHand: AbilityClasses.Dexterity,
      runes: AbilityClasses.Dexterity,
      cooking: AbilityClasses.Power,
      alchemy: AbilityClasses.Intelligence,
      animism: AbilityClasses.Power
    }
  }
  export type SecondaryAbilityCategories = keyof typeof SecondaryAbilitiesCategorized

  export const SecondaryAbilitiesBasis: { [ability: string]: AbilityClass } = Object.keys(SecondaryAbilitiesCategorized).reduce((result, category) => {
    const abilities = SecondaryAbilitiesCategorized[category]
    Object.keys(abilities).forEach((ability) => {
      result[ability] = abilities[ability]
    })
    return result
  }, {} as { [ability: string]: AbilityClass })


  export enum SecondaryAbilities {
    acrobatics = "Acrobatics",
    athleticism = "Athleticism",
    climb = "Climb",
    jump = "Jump",
    ride = "Ride",
    swim = "Swim",
    composure = "Composure",
    featsOfStrength = "Feats of Str",
    withstandPain = "Withst. Pain",
    notice = "Notice",
    search = "Search",
    track = "Track",
    animals = "Animals",
    appraisal = "Appraisal",
    herbalLore = "Herbal Lore",
    history = "History",
    magicAppraisal = "M. Appraisal",
    medicine = "Medicine",
    memorize = "Memorize",
    navigation = "Navigation",
    occult = "Occult",
    sciences = "Sciences",
    intimidate = "Intimidate",
    leadership = "Leadership",
    persuasion = "Persuasion",
    style = "Style",
    disguise = "Disguise",
    hide = "Hide",
    lockPicking = "Lock Picking",
    poisons = "Poisons",
    theft = "Theft",
    trapLore = "Trap Lore",
    stealth = "Stealth",
    art = "Art",
    dance = "Dance",
    forging = "Forging",
    music = "Music",
    sleightOfHand = "Sl. of Hand",
    tattoos = "Tattoos",
    runes = "Runes",
    law = "Law",
    trade = "Trade",
    animism = "Animism",
    alchemy = "Alchemy",
    cooking = "Cooking",
    lostLogias = "Lost Logias",
    technomagic = "Technomagic",
    divineScience = "Divine Science",
    streetwise = "Streetwise",
    etiquette = "Etiquette",
    architecture = "Architecture",
    piloting = "Piloting",
  }
  export type SecondaryAbility = keyof typeof SecondaryAbilities

  export type CharacterClassValues = {
    lifePointMultiple: number
    lifePointsRate: number
    initiativeRate: number
    martialKnowledgeRate: number
    innatePsychicPointsRateDelta: number
    innatePsychicPointsRateLevels: number
    abilityLimits: {
      combat: number
      supernatural: number
      psychic: number
    }
    primaryCosts: {
      attack: number
      block: number
      dodge: number
      wearArmor: number
      ki: number
      zeon: number
      magicProjection: number
      summon: number
      control: number
      bind: number
      banish: number
      psychicProjection: number
    }
    accumulationMultiple: number
    magicAccumulationMultiple: number
    psychicPoints: number
    secondaryCosts: {
      athletics: number
      social: number
      perceptive: number
      intellectual: number
      vigor: number
      subterfuge: number
      creative: number
    }
    reducedSecondaryCosts: {
      [secondary: string]: number
    }
    innateBonuses: {
      primaryRates: {
        [primary: string]: number
      }
      primaryMaximums: {
        [primary: string]: number
      }
      secondaryRates: {
        [secondary: string]: number
      }
    }
  }

  export type Spell = {
    path: MagicPath
    level: number
    cost: number
    freeAccess?: {
      min: number
      max: number
    }
    action: "active" | "passive"
    effect?: string
    addedEffect?: string
    maintenance: false | {
      rate: number
      daily?: true
    }
    maximumZeon: {
      multiplier: 10 | 20 | 30 | 40 | 50
    }
    type: SpellTypes | SpellTypes[]
  }

  export type SpellTypes = "attack" | "automatic" | "defense" | "detection" | "effect" | "spiritual"

  export enum MagicPath {
    Light = "light",
    Darkness = "darkness",
    Creation = "creation",
    Destruction = "destruction",
    Fire = "fire",
    Water = "water",
    Earth = "earth",
    Air = "air",
    Essence = "essence",
    Illusion = "illusion",
    Necromancy = "necromancy",
  }

  export type WeaponStat = {
    name: string
    weaponType: WeaponType | WeaponType[]
    damage: number
    speed: number
    requiredStrength: null | number | number[]
    fortitude: null | number
    breakage: null | number
    presence?: number
    primaryAttackType: AttackType
    secondaryAttackType?: AttackType
    specialRules: string
  }

  export type WeaponType = "short arm" | "axe" | "mace" | "sword" | "two-handed" | "pole" | "cord" | "mixed-class"

  export type AttackType = "cut" | "impact" | "thrust" | "heat" | "cold" | "electricity" | "energy"

  export type Aspect = {
    name: string
    description?: string
    type: "common" | "magic" | "psychic" | "gift"
    effects: string
    restriction?: string
    special?: string
  }
  export type AspectValue = 1 | 2 | 3

  export type Advantage = Aspect & {
    cost: AspectValue | AspectValue[]
  }
  export type Disadvantage = Aspect & {
    benefit: AspectValue | AspectValue[]
  }

  export type Resistance = {
    characteristic?: AbilityClass
    // bonus?: number // comes from primary abi modifier
    special?: number
  }

  export type Resistances = {
    base: Resistance
    physical: Resistance
    disease: Resistance
    poison: Resistance
    magic: Resistance
    psychic: Resistance
  }

  export type SocialClass = "low-class" | "middle-class" | "nobility"

  export type Principality = {
    name: string
    capital: string
    population: number
    mainEthnicGroups: { [name: string]: { percentage: number } }
    government: string
    languages: string[]
    religion: string[]
    technology: 1 | 2 | 3 | 4 | 5
    denomym: string
    flag: {
      description: string
    }
    names: {
      masculine: string[]
      feminine: string[]
      lastNames: string[]
    }
  }

  export type CulturalRoots = {
    name: string
    entries: CulturalRoot[]
  }

  export type CulturalRoot = {
    socialClass: SocialClass | SocialClass[]
    secondaries: {
      [key in keyof typeof SecondaryAbilities]?: number | {
        detail: string
        value: number
      }
    }
  }
}
