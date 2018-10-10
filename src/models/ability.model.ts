import { IAttribute } from './attribute.model';

export interface IAbility {
  dname: string
  behavior: string
  dmgType: string
  bkbPierce: string
  desc: string
  mc?: string | string[]
  cd?: string | string[]
  img: string 
  attrib: IAttribute[]
}