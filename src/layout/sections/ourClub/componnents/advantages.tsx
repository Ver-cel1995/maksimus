import {FlexWrapper} from "../../../../components/FlexWrapper";

type Props = {
    img: string
    title: string
    text: string
    position?: 'absolute' | 'relative' | 'fixed' | 'sticky' | 'static';
    top?: string
    margin?: string
};
export const Advantages = (props: Props) => {
    return (
        <FlexWrapper width='270px' direcion={'column'} align='center'>
            <img src={props.img} style={{position: props.position, top: props.top }}/>
            <div style={{marginTop: props.margin}}>
                <h3 style={{zIndex: '10'}}>{props.title}</h3>
                <p style={{zIndex: '10'}}>{props.text}</p>
            </div>
        </FlexWrapper>
    );
};

