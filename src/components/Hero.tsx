import * as React from 'react'
import styled, { ITheme } from '../styled'
import { darken } from 'polished'
import { Themed } from 'react-emotion'
import { IHero } from '../models/hero.model';
import { Container } from 'semantic-ui-react'

const attrs = {
  str: '#f44336',
  agi: '#39d402',
  int: '#01a9f4'
}

const Wrapper = styled('div')`
  position: relative;
`

const HeroInfobox = styled('div')`
  position: relative;
  background: rgba(0, 0, 0, 0.9);
  overflow: hidden;
  border-radius: 8px;
  color: ${props => darken(0.25, '#fefefe')};
`

const HeroInfoboxBlurBackground = styled('img')`
  position: absolute;
  top: -12.5%;
  left: -12.5%;
  width: 125%;
  height: 125%;
  filter: blur(25px);
  object-fit: cover;
  opacity: 0.35;
  background-repeat: no-repeat;
  z-index: 1;
`

const HeroInfoboxInner = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 3rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 125px inset;
  z-index: 2;

  @media (min-width: ${props => '992px'}) {
    flex-direction: row;
  }
`

const HeroInfoboxImage = styled('img')`
  display: block;
  flex-shrink: 0;
  width: 180px;
  height: 128px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 12px 32px;
  object-fit: cover;
  border-radius: 16px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.3);
  border-image: initial;
`

const HeroInfoboxHeading = styled('div')`
  flex: 1 1 100%;
  margin: 1.5rem 0 0;
  text-align: center;

  @media (min-width: ${props => '992px'}) {
    margin: 0 1.5rem;
    text-align: left;
  }
`

const HeroName = styled('h1')`
  margin: 0;
  color: ${props => '#fefefe'};
  font-weight: 500;
`

const HeroDetails = styled('p')`
  margin: 0.5rem 0 0;
  color: ${props => '#fefefe'};
  font-size: 0.8rem;
  letter-spacing: 1px;
  text-transform: uppercase;

  & span {
    color: ${props => darken(0.25, '#fefefe')};
  }
`

const HeroStats = styled('div')`
  display: block;
  max-width: 340px;
  margin: 1.5rem 0 0;
  background: rgba(0, 0, 0, 0.45);
  border-radius: 8px;
  padding: 12px;

  @media (min-width: ${props => '992px'}) {
    margin: 0;
    flex: 1 0 340px;
  }
`

const HeroStatsInner = styled('div')`
  display: flex;
`

interface IStatAttributeProps {
  attr: 'str' | 'agi' | 'int'
  isPrimaryAttr?: boolean
}

const StatAttribute = styled('div')`
  display: flex;
  align-items: center;
  flex: 1 1 0;
  padding: 0 1rem;
  font-size: 0.8rem;
  color: ${(props: Themed<IStatAttributeProps, ITheme>) =>
    props.isPrimaryAttr && attrs[props.attr]};
`

interface IBulletProps {
  attr: 'str' | 'agi' | 'int'
}

const Bullet = styled('div')`
  flex-shrink: 0;
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 8px;
  border-radius: 50%;
  background-color: ${(props: Themed<IBulletProps, ITheme>) => attrs[props.attr]};
`

interface IProps {
  hero: IHero
}

class Hero extends React.Component<IProps> {
  public render() {
    const { hero } = this.props
    return (
      <Container
        style={{
          paddingTop: '1em'
        }}
      >
        <Wrapper>
          <HeroInfobox>
            <HeroInfoboxBlurBackground src={hero.img} />
            <HeroInfoboxInner>
              <HeroInfoboxImage src={hero.img}/>
              <HeroInfoboxHeading>
                <HeroName>{hero.localizedName}</HeroName>
                <HeroDetails>
                  {hero.attackType} - <span>{hero.roles.join(', ')}</span>
                </HeroDetails>
              </HeroInfoboxHeading>
              <HeroStats>
                <HeroStatsInner>
                  <StatAttribute attr='str' isPrimaryAttr={hero.primaryAttr === 'str'}>
                    <Bullet attr='str'/> {hero.baseStr || 0} + {hero.strGain || 0} 
                  </StatAttribute>
                  <StatAttribute attr='agi' isPrimaryAttr={hero.primaryAttr === 'agi'}>
                    <Bullet attr='agi'/> {hero.baseStr || 0} + {hero.strGain || 0} 
                  </StatAttribute>
                  <StatAttribute attr='int' isPrimaryAttr={hero.primaryAttr === 'int'}>
                    <Bullet attr='int'/> {hero.baseStr || 0} + {hero.strGain || 0} 
                  </StatAttribute>
                </HeroStatsInner>
              </HeroStats>
            </HeroInfoboxInner>
          </HeroInfobox>
        </Wrapper>
      </Container>
    )
  }
}

export default Hero