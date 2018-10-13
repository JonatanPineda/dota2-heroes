import { camelizeKeys } from 'humps'
import { IHero } from '../models/hero.model'
import { IAbility } from '../models/ability.model'
import { ITalent} from '../models/talent.model'
import * as heroesAbilitiesAndTalents from 'dotaconstants/build/hero_abilities.json'
import * as abilities from 'dotaconstants/build/abilities.json'
import { Observable } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { map } from 'rxjs/operators'

export const OPEN_DOTA_URL = 'https://api.opendota.com'
export const OPEN_DOTA_API = `${OPEN_DOTA_URL}/api`

class OpenDotaService {
  public getHeroes(): Observable<IHero[]> {
    return ajax
      .getJSON(`${OPEN_DOTA_URL}/heroStats`)
      .pipe(
        map(heroes => camelizeKeys(heroes) as any[]),
        map(
          camelizedHeroes => {
            const heroesWithAbilitiesAndTalents = camelizedHeroes.map(
              hero => {
                const heroData = heroesAbilitiesAndTalents[hero.name]
                return {
                  ...hero,
                  img: `${OPEN_DOTA_URL}${hero.img}`,
                  icon: `${OPEN_DOTA_URL}${hero.icon}`,
                  abilities: heroData.abilities.map(
                    (ability: string) => {
                      const camelizedAbility =
                        camelizeKeys(abilities[ability]) as IAbility
                      return {
                        ...camelizedAbility,
                        img: `${OPEN_DOTA_URL}${camelizedAbility.img}`
                      }
                    }
                  ),
                  talents: heroData.talents.map(
                    (talent: ITalent) => {
                      const camelizedTalent = camelizeKeys(abilities[talent.name])
                      return {
                        ...camelizedTalent,
                        level: talent.level,
                        name: talent.name
                      }
                    }
                  )
                }
              }
            )

            return heroesWithAbilitiesAndTalents 
          }
        )
      )
  }


  /*async getHeroes(): Promise<IHero[]> { 
    const response = await fetch(`${OPEN_DOTA_API}/heroStats`)
    const json = await response.json()
    const camelizedJson = await camelizeKeys(json) as any[]

    const heroesWithAbilitiesAndTalents = camelizedJson.map(
      hero => {
        const heroData = heroesAbilitiesAndTalents[hero.name]
        return {
          ...hero,
          img: `${OPEN_DOTA_URL}${hero.img}`,
          icon: `${OPEN_DOTA_URL}${hero.icon}`,
          abilities: heroData.abilities.map(
            ability => {
              const camelized = camelizeKeys(abilities[ability]) 
              return {
                ...camelized,
                img: `${OPEN_DOTA_URL}${camelized.img}`
              }
            }
          ),
          talents: heroData.talents.map(
            talent => { 
              const camelized = camelizeKeys(abilities[talent.name])
              return {
                level: talent.level,
                ...camelized
              }
            }
          )
        }
      }
    ) as IHero[]

    return heroesWithAbilitiesAndTalents 
  }*/
}

export default new OpenDotaService()
