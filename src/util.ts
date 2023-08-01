import { Types } from "./types"

export module Util {
  export function capitalize(str: string) {
    if (0 === str.length) return str
    const b = str.charAt(0).toUpperCase(), c = str.slice(1)
    return b + c
  }

  /**
   * Returns a primary ability score's bonus as derived from the score value, ex. 10 => 15.
   * @param baseScore A primary ability's score
   * @returns The score bonus derived from the ability score
   */
  export function primaryAbilityScoreBonus(baseScore: number): number {
    switch (true) {
      case baseScore <= 1:
        return -30
      case baseScore === 2:
        return -20
      case baseScore === 3:
        return -10
      case baseScore === 4:
        return -5
      case baseScore === 5:
        return 0
      case [6, 7].includes(baseScore):
        return 5
      case [8, 9].includes(baseScore):
        return 10
      case baseScore === 10:
        return 15
      case [11, 12].includes(baseScore):
        return 20
      case [13, 14].includes(baseScore):
        return 25
      case baseScore === 15:
        return 30
      case [16, 17].includes(baseScore):
        return 35
      case [18, 19].includes(baseScore):
        return 40
      case baseScore >= 20:
        return 45
    }
    return -30
  }

  export function secondaryFinalScore(character: Types.Character, ability: Types.SecondaryAbility) {
    let sum = 0
    const score = character.secondaryAbilities[ability]
    // if entirely unskilled, the base calculation is from -30
    if (score.base == 0) {
      sum = -30
    }
    sum += score.base
    sum += primaryAbilityScoreBonus(character.physicalAbilities[Types.SecondaryAbilitiesBasis[ability]].base)
    sum += score.special
    sum += score.class
    return sum
  }

  export const debounce = (func: Function, timeout = 500) => {
    let timer: ReturnType<typeof setTimeout>
    return function (this: any, ...args: any[]) {
      clearTimeout(timer)
      timer = setTimeout(() => func.apply(this, args), timeout)
    }
  }
}
