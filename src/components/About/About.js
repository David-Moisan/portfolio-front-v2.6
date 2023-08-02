import React from "react";
import AnimLetter from "../Animation/AnimationLetter";
import ScrollDown from "../Scroll/ScrollDown";
import { useMediaQuery } from 'react-responsive';

import {
    AboutContainer,
    AboutTextWrapper,
    AboutText,
    SkillContainer
} from './AboutStyle'
import { Section, Title } from "../../utils/globalSection";
import Cloud from "./Cloud";

export default function About() {
    const isMobile = useMediaQuery({ maxWidth: 450 });

    const showCloud = !isMobile

    return (
        <Section>
            <AboutContainer>
                <ScrollDown />
                <AboutTextWrapper>
                    <header>
                        <Title>
                            <AnimLetter text="À Propos" />
                        </Title>
                        <AboutText>
                            Après une carrière dans l'armée française en tant
                            que parachutiste, j'ai décidé de me reconvertir dans
                            le domaine du développement web en 2020. J'ai donc
                            repris mes études avec l'école WIS de Toulouse pour
                            valider un BTS DWWM ainsi qu'une Licence Chef de
                            Projet. J'ai commencé un Master en Ingénierie
                            Informatique en 2022 pour une alternance de deux
                            ans, après avoir trouvé une alternance dans le
                            secteur bancaire, j'ai eu une proposition de CDI
                            dans le domaine de l'Assurance, que j'ai
                            immédiatement accepté. En effet, vivre de ma passion
                            était mon objectif depuis le début de ma
                            reconversion. J'ai donc arrêté mon Master en cours
                            de première année sans le valider. Et c'est donc
                            dans le domaine de l'assurance que je reprends les
                            armes, mais cette fois assis sur une chaise de
                            bureau afin de gérer les flux EDI d'une entreprise
                            qui génère des millions de chiffre d'affaires. Me
                            voilà enfin Développeur Web full stack dans une
                            technologie que je privilégie comme PHP.
                        </AboutText>
                        <AboutText>
                            Depuis que j'ai découvert le développement
                            informatique, je n'ai jamais cessé d'apprendre
                            chaque jour, poussé par la curiosité et une passion
                            grandissante.
                        </AboutText>
                    </header>
                </AboutTextWrapper>
                {isMobile ? null : (
                    <SkillContainer data-aos="fade-down">
                        <Cloud showCloud={showCloud}/>
                    </SkillContainer>
                )}
            </AboutContainer>
        </Section>
    )
}