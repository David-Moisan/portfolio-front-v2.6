import React from "react";
import { Section } from "../../utils/globalSection";
import Badge from "../../source/Badge.png";
import {
    ErrorContainer,
    ErrorImg,
    ErrorTitle
} from "./ErrorStyle";

export default function NotFound() {
    return (
        <Section>
            <ErrorContainer>
                <ErrorTitle>Que faites-vous ici ?</ErrorTitle>
                <ErrorImg src={Badge} alt="404Error" />
            </ErrorContainer>
        </Section>
    )
}