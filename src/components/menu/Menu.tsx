import styled from "styled-components";
import {Icon} from "../Icon";
import {NavLink} from "react-router-dom";

type Props = {

};
export const Menu = (props: Props) => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <NavLink to="/page1">О нас</NavLink>
                </li>
                <li>
                    <NavLink to="/page2">Услуги и цены</NavLink>
                </li>
                <li>
                    <NavLink to="/page3">Фотоальбом</NavLink>
                </li>
                <li>
                    <NavLink to="/page4">Контакты</NavLink>
                </li>
            </ul>
            <div>
                <p>
                    <Icon iconId='phoneIcon' width='16' height='16' viewbox='0 0 16 16' fill="green"/>
                    +7 (000) 000-00-00
                </p>
                <span>
                    Ежедневно 9:00 – 22:00
                </span>
            </div>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    display: flex;
    gap: 57px;
    ul {
        display: flex;
        gap: 30px;
        marker: none;
    }
`;

const StyledText = styled.div`

`