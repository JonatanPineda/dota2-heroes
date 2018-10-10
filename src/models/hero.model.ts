import { IAbility } from './ability.model'
import { ITalent } from './talent.model'

export interface IHero {
  id: number
  name: string
  localizedName: string
  attackType: string 
  roles: string[]
  img: string
  icon: string
  baseHealth: number
  baseHealthRegen: number
  baseMana: number
  baseManaRegen: number
  baseArmor: number
  baseMr: number
  baseAttackMin: number
  baseAttackMax: number
  baseStr: number
  baseAgi: number
  baseInt: number
  strGain: number
  agiGain: number
  intGain: number
  attackRange: number
  projectileSpeed: number
  attackRate: number
  moveSpeed: number
  turnRate: number
  cmEnabled: boolean
  legs: number
  proWin: number
  propPick: number
  heroId: number
  ['8Pick']: number
  ['8Win']: number
  ['7Pick']: number
  ['7Win']: number
  ['6Win']: number
  ['6Pick']: number
  ['5Win']: number
  ['5Pick']: number
  ['4Win']: number
  ['4Pick']: number
  ['3Win']: number
  ['3Pick']: number
  ['2Win']: number
  ['2Pick']: number
  ['1Win']: number
  ['1Pick']: number
  abilities: IAbility[]
  talents: ITalent[]
}
