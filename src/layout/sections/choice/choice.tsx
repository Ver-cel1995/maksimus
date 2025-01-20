import styled from "styled-components";
import {Container} from "../../header/Header";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Advantages} from "../ourClub/componnents/advantages";
import Navigation from "../../../images/navigation.png"
import Bench from "../../../images/bench.png"
import StopWatch from "../../../images/stopWatch.png"
import Car from "../../../images/car.png"

type Props = {

};
export const Choice = (props: Props) => {
    return (
        <StyledChoice>
            <Container>
                <SectionTitle title='Почему нас выбирают' span='Подзаголовок блока' margin='76px'/>
                <FlexWrapper align='center'>
                    <Advantages img={Navigation} title={'Удобное расположение'} text={'Мы находимся недалеко от автостанции «Восточный» чтобы вам было удобно добираться'}/>
                    <Advantages img={Bench} title={'Обеденная зона '} text={'Имеется столовая, чтобы Вы могли  перекусить и немного отдохнуть. Бесплатно чай, кофе, печенки.'}/>
                    <Advantages img={StopWatch} title={'Профессиональные тренера'} text={'Наши преподаватели имеют награды в конном спорте, и отличные отзывы среди наших учеников'}/>
                    <Advantages img={Car} title={'Бесплатная парковка'} text={'У нас имеется просторная парковка, чтобы вы могли без проблем припарковать свой автомобиль'}/>
                </FlexWrapper>
            </Container>
        </StyledChoice>
    );
};

const StyledChoice = styled.section`
    padding: 185px 0 200px 0;
`