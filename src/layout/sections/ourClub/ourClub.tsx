import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import Horse from "../../../images/horse1.png"
import {Container} from "../../header/Header";

type Props = {

};
export const OurClub = (props: Props) => {
    return (
        <SyledOurClub>
            <Container>
                <SectionTitle title='О нашем клубе' margin='70px'/>
                <FlexWrapper>
                    <WrapperImg>
                        <img src={Horse} style={{position: 'absolute', left: '-229px'}}/>
                    </WrapperImg>
                    <FlexWrapper wrap='wrap' width={'570px'}>
                            <FlexWrapper wrap={'wrap'} width={'570px'}>
                                <StyledTextNumber>
                                    <span>1100+</span>
                                    <p>Довольный посетителей за последний год</p>
                                </StyledTextNumber>
                                <StyledTextNumber>
                                    <span>50+</span>
                                    <p>Проведенных мероприятий за 6 месяцев</p>
                                </StyledTextNumber>
                                <StyledTextNumber>
                                    <span>20+</span>
                                    <p>Выпущенных <br/> профессиональных <br/>спортсменов за 1 год</p>
                                </StyledTextNumber>
                                <StyledTextNumber>
                                    <span>15+</span>
                                    <p>Регулярный занятий<br/> в неделю с профессиональными наставниками</p>
                                </StyledTextNumber>
                            </FlexWrapper>
                        <p>
                            Занятия проводятся индивидуально и в группах, стоимость также будет зависеть от ваших навыков и умений. Более выгодные условия
                            предусмотрены для регулярных занятий при покупке абонементов.
                            Для тех, кто хочет отточить своё мастерство, разработаны программы по специализации (конкур, выездка и другие), участие в соревнованиях и чемпионатах. Для самых маленьких любителей лошадей действуют
                            пони-клубы, где ребята учатся ухаживать за животными и ездить на милых и добрых пони.
                        </p>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </SyledOurClub>
    );
};

const SyledOurClub = styled.section`
        
`

const WrapperImg = styled.div`
    width: 871px; /* или конкретное значение */
    height: 529px;
    position: relative;
`

const StyledTextNumber = styled.div`
    width: 275px;
    span {
        font-weight: 700;
        font-size: 42px;
        color: #008139;
    }
    
    p {
        font-weight: 500;
        font-size: 17px;
        color: #0b0b0b;
    }
`