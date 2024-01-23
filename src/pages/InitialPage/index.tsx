import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

const InitialPage = () => {
    const navigate = useNavigate();
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        const animationTimeout = setTimeout(() => {
            setAnimationComplete(true);
        }, 2750);

        return () => clearTimeout(animationTimeout);
    }, []);

    useEffect(() => {
        if (animationComplete) {
            navigate('/home');
        }
    }, [animationComplete, navigate]);

    return (
        
            <S.NameContainer>
                <S.Letter1>A</S.Letter1>
                <S.Letter2>s</S.Letter2>
                <S.Letter3>t</S.Letter3>
                <S.Letter4>r</S.Letter4>
                <S.Letter5>a</S.Letter5>
            </S.NameContainer>
    );
};

export default InitialPage;