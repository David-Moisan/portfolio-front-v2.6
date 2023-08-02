import React from 'react'
import AnimLetter from '../Animation/AnimationLetter'
import BigBackgroundFont from '../BigFont/BigBackgroundFont'
import {
    ContactContainer,
    ContactContent,
    ContactMapContainer,
    ContactMapInfo,
    ContactWrapper,
    MapImage,
} from './ContactStyle'
import { ButtonAction } from '../Button/ButtonStyle'
import { Section, Title } from '../../utils/globalSection'
import Map from '../../source/map.png'

/**
 * Contact
 * @returns l'ensemble du composant Contact
 */
const Contact = () => {
    return (
        <Section>
            <ContactContainer id="contact">
                <BigBackgroundFont text="@" />
                <ContactWrapper>
                    <header>
                        <Title>
                            <AnimLetter text="Contact" />
                        </Title>
                        <ContactContent>
                            Je suis disponible immédiatement pour tout type de
                            mission. N'hésitez pas à me
                            contacter.
                        </ContactContent>
                    </header>
                    <div>
                        <ButtonAction href="mailto:admin@davprocode.com">
                            Envoyer !
                        </ButtonAction>
                    </div>
                </ContactWrapper>
                <ContactMapContainer data-aos="fade-up">
                    <div>
                        <ContactMapInfo>
                            David Moisan
                            <br />
                            Toulouse, France
                            <br />
                            <br />
                            <span>
                                <i
                                    className="fa fa-envelope"
                                    aria-hidden="true"
                                ></i>{' '}
                                : admin@davprocode.com
                            </span>
                        </ContactMapInfo>
                        <MapImage src={Map} alt="ma position" />
                    </div>
                </ContactMapContainer>
            </ContactContainer>
        </Section>
    )
}

export default Contact; 
