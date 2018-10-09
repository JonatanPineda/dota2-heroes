import { camelizeKeys } from 'humps'
import { IHero } from '../models/hero'

const OPEN_DOTA_API = 'https://api.opendota.com/api'

class OpenDotaService {
  async getHeroes(): Promise<IHero[]> {
    const response = await fetch(`${OPEN_DOTA_API}/heroStats`)
    const json = await response.json()
    const camelizedJson = await camelizeKeys(json) as Array<any>
    const heroesAbilitiesAndTalents = await import('dotaconstants/build/hero_abilities.json')

    const heroesWithAbilitiesAndTalents = camelizedJson.map(
      hero => {
        const heroData = heroesAbilitiesAndTalents[hero.name]
        return {
          ...hero,
          abilities: heroData.abilities
        }
      }
    )

    return heroesWithAbilitiesAndTalents as IHero[]
  }
}

export default new OpenDotaService()