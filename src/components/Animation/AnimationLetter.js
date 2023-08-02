import React, { Fragment } from 'react'
import { AnimationLetter, AnimationSpace } from './AnimationLetterStyle'

/**
 * AnimLetter
 * @param {string} text
 * @returns une span qui est animée
 */
export default function AnimLetter({ text }) {
    const words = text.split(' ');

    return (
        <>
            {words.map((word, index) => (
                <Fragment key={`fragment_${index}`}>
                    {index > 0 && <AnimationSpace key={`space_${index}`} />}
                    {word.split('').map((letter, letterIndex) => (
                        <AnimationLetter key={`letter_${index}_${letterIndex}`}>{letter}</AnimationLetter>
                    ))}
                </Fragment>
            ))}
        </>
    );
}
