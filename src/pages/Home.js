import { Container, Section } from "../utils/globalSection";
import { HomeContainer, HomeSubtitle, HomeTitle, HomeWrapper } from "../components/Home/HomeStyle";
import { ColorLetter } from "../components/Animation/AnimationLetterStyle";
import AnimLetter from "../components/Animation/AnimationLetter";
import ScrollDown from "../components/Scroll/ScrollDown";
import Project from "../components/Project/Project";
import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import HomeAnimation from "../components/Home/HomeAnimation";
import { ButtonAction } from "../components/Button/ButtonStyle";
import useScrollToAnchor from '../utils/Hook'
import { useMediaQuery } from "react-responsive";


const HomePage = () => {
    const isMobile = useMediaQuery({ maxWidth: 450 });
    useScrollToAnchor()

    return (
        <Container>
            <Section>
                <HomeAnimation />
                <HomeContainer>
                    <HomeWrapper data-aos="fade-down">
                        <HomeTitle>
                            <AnimLetter text="Salut,"/>
                            <br />
                            <AnimLetter text="Je suis " />
                            <ColorLetter>D</ColorLetter>
                            <AnimLetter text="avid," />
                            <br />
                        </HomeTitle>
                        <HomeSubtitle>Développeur Full-stack</HomeSubtitle>
                        <ButtonAction href="#contact">Contactez-moi</ButtonAction>
                    </HomeWrapper>
                    <ScrollDown />
                </HomeContainer>
            </Section>
            <Project />
            <About showCloud={!isMobile} />
            <Blog />
            <Contact />
        </Container>
    )
}

export default HomePage;