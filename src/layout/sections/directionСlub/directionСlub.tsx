import styled from "styled-components";
import {Container} from "../../header/Header";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Advantages} from "../ourClub/componnents/advantages";

import horse2 from "../../../images/horse2.png"
import horse3 from "../../../images/horse3.png"
import horse4 from "../../../images/horse4.png"
import horse5 from "../../../images/horse5.png"
import horse6 from "../../../images/horse6.png"
import horse7 from "../../../images/horse7.png"

type Props = {

};
export const DirectionСlub = (props: Props) => {
    return (
        <StyldDirectionСlub>
            <Container>
                <SectionTitle title='Направления клуба' span='Подзаголовок блока' margin='100px'/>
                <FlexWrapper wrap='wrap' gap='20px'>
                    <StyledWraperrClubImg>
                        <Advantages img={horse2}
                                    title={'Уроки верховой езды'}
                                    text={'Уроки профессиональной верховой езды для любителей и начинающих'}
                                    position='absolute'
                                    top='-25px'
                                    margin='200px'
                        />
                    </StyledWraperrClubImg>
                    <StyledWraperrClubImg>
                        <Advantages img={horse3}
                                    title={'Уроки верховой езды'}
                                    text={'Тренировка клиентов, подготовка к занятиям конным спортом на профессиональном уровне под руководством опытных тренеров'}
                                    position='absolute'
                                    top='-25px'
                                    margin='200px'
                        />
                    </StyledWraperrClubImg>
                    <StyledWraperrClubImg>
                        <Advantages img={horse4}
                                    title={'Уроки верховой езды'}
                                    text={'Уроки профессиональной верховой езды для любителей и начинающих'}
                                    position='absolute'
                                    top='-25px'
                                    margin='200px'
                        />
                    </StyledWraperrClubImg>
                    <StyledWraperrClubImg>
                        <Advantages img={horse5}
                                    title={'Уроки верховой езды'}
                                    text={'Тренировка клиентов, подготовка к занятиям конным спортом на профессиональном уровне под руководством опытных тренеров'}
                                    position='absolute'
                                    top='-25px'
                                    margin='200px'
                        />
                    </StyledWraperrClubImg>
                    <StyledWraperrClubImg>
                        <Advantages img={horse6}
                                    title={'Уроки верховой езды'}
                                    text={'Уроки профессиональной верховой езды для любителей и начинающих'}
                                    position='absolute'
                                    top='-25px'
                                    margin='200px'
                        />
                    </StyledWraperrClubImg>
                    <StyledWraperrClubImg>
                        <Advantages img={horse7}
                                    title={'Уроки верховой езды'}
                                    text={'Тренировка клиентов, подготовка к занятиям конным спортом на профессиональном уровне под руководством опытных тренеров'}
                                    position='absolute'
                                    top='-25px'
                                    margin='200px'
                        />
                    </StyledWraperrClubImg>
                </FlexWrapper>
            </Container>
        </StyldDirectionСlub>
    );
};

const StyldDirectionСlub = styled.section`
        
`
const StyledWraperrClubImg = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    width: 370px;
    height: 399px;
    box-shadow: 0 14px 30px 0 rgba(0, 0, 0, 0.07);
    background: #f6a85b;
    position: relative;
    margin-bottom: 50px;
`

