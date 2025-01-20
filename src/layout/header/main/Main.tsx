import styled from "styled-components";

type Props = {

};
export const Main = (props: Props) => {
    return (
            <StyledText>
                <h1>Окунитесь в мир лошадей вместе с нами</h1>
                <p>Уроки верховой езды, фотосессии и мероприятия<br/> в частном конном клубе г. Санкт-Петербург</p>
                <button>Записаться</button>
            </StyledText>
    );
};

const StyledText = styled.div`
    max-width: 665px;
    margin-top: 99px;
    
    h1 {
       font-size: 57px;
    }
`