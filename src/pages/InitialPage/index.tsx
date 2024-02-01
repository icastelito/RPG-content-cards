import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';


const InitialPage = () => {
    const navigate = useNavigate();
    const [animationComplete, setAnimationComplete] = useState(false);
    const word = "ASTRA";
    const letters = word.split('');

    useEffect(() => {
        const animationTimeout = setTimeout(() => {
            setAnimationComplete(true);
        }, letters.length * 314 + 628); // adjust timeout to word length

        return () => clearTimeout(animationTimeout);
    }, [letters.length]);

    useEffect(() => {
        if (animationComplete) {
            navigate('/home');
        }
    }, [animationComplete, navigate]);

    return (
        <div>
            {letters.map((letter, index) => (
                <S.Letter key={index} delay={index/3.14}>
                    {letter}
                </S.Letter>
            ))}
        </div>
    );
};

export default InitialPage;