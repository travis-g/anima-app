import { Types } from "./types";

export module Data {
  export const classRules = {
    "Wizard": <Types.CharacterClassValues>{
      lifePointMultiple: 20,
      lifePointsRate: 5,
      initiativeRate: 5,
      martialKnowledgeRate: 10,
      innatePsychicPointsRateDelta: 1,
      innatePsychicPointsRateLevels: 3,
      abilityLimits: {
        combat: .5,
        supernatural: .6,
        psychic: .5
      },
      primaryCosts: {
        attack: 3,
        block: 3,
        dodge: 2,
        wearArmor: 3,
        ki: 3,
        zeon: 1,
        magicProjection: 2,
        summon: 2,
        control: 2,
        bind: 2,
        banish: 2,
        psychicProjection: 3
      },
      accumulationMultiple: 30,
      magicAccumulationMultiple: 50,
      psychicPoints: 20,
      secondaryCosts: {
        athletics: 2,
        social: 2,
        perceptive: 2,
        intellectual: 2,
        vigor: 3,
        subterfuge: 2,
        creative: 2
      },
      reducedSecondaryCosts: {
        magicAppraisal: 1
      },
      innateBonuses: {
        primaryMaximums: {},
        primaryRates: {
          zeon: 100
        },
        secondaryRates: {
          magicAppraisal: 10,
          occult: 5
        }
      }
    }
  };

  export const advantages: Types.Advantage[] = [
    {
      name: "The Gift",
      type: "common",
      effects: "The character can see and use magic. He also adds a special bonus of +10 to his MR, since his supernatural nature better resists mystical effects",
      cost: 2
    },
    {
      name: "Aptitude for Magic Development",
      type: "magic",
      effects: "A player can add 3 points to his character's Intelligence to determine the maximum potential of the spell. This bonus is not applied to any other ability &ndash; not even to calculate the character's level of magic.",
      cost: 1
    },
    {
      name: "Natural Knowledge of a Path",
      type: "magic",
      effects: "This Advantage grants innate knowledge of a Path at level 40 without investing Magic Level points. As it is innate knowledge, the wizard can continue to develop it beyond level 40 by spending new Magic Level points.",
      special: "This Advantage can be acquired again for different Paths.",
      cost: 1
    },
    {
      name: "Magic Nature",
      type: "gift",
      effects: "The character gains an innate bonus of +50 Zeon points per level, which is added to any other bonus obtained through his class. Spending two or three Creation Points in this advantage increases the value of the bonus to +100 and +150 Zeon points per level, respectively.",
      cost: [1, 2, 3]
    }
  ]

  export const disadvantages: Types.Disadvantage[] = [
    {
      name: "Free",
      type: "common",
      effects: "Adds 1, 2, or 3 extra creation points for fun.",
      benefit: [1, 2, 3]
    },
    {
      name: "Severe Phobia",
      type: "common",
      effects: "The character suffers the Fear State whenever he encounters the object of his phobia.",
      benefit: 1
    }
  ]

  export const culturalRoots: Types.CulturalRoots[] = [
    {
      name: "Alberia",
      entries: [
        {
          socialClass: ["low-class", "middle-class"],
          secondaries: {
            athleticism: 10,
            climb: 10,
            notice: 10,
            track: 10,
            animals: 10,
            herbalLore: 10,
            stealth: 10,
            trapLore: 10
          }
        },
        {
          socialClass: "nobility",
          secondaries: {
            athleticism: 10,
            climb: 10,
            notice: 10,
            music: 15,
            leadership: 15,
            persuasion: 10,
            history: { detail: "local", value: 10 }
          }
        }
      ]
    }
  ]
}
