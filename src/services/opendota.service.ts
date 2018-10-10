import { camelizeKeys } from 'humps'
import { IHero } from '../models/hero.model'

export const OPEN_DOTA_URL = 'https://api.opendota.com'
export const OPEN_DOTA_API = `${OPEN_DOTA_URL}/api`

class OpenDotaService {
  async getHeroes(): Promise<IHero[]> { 
    const response = await fetch(`${OPEN_DOTA_API}/heroStats`)
    const json = await response.json()
    const camelizedJson = await camelizeKeys(json) as any[]
    const heroesAbilitiesAndTalents = await import('dotaconstants/build/hero_abilities.json')
    const abilities = await import('dotaconstants/build/abilities.json')

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
  }
}

export default new OpenDotaService()