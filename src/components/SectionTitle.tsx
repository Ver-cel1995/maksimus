type Props = {
    title: string;
    span?: string;
    margin?: string
};
export const SectionTitle = (props: Props) => {
    return (
        <div style={{textAlign: 'center', marginBottom: `${props.margin}`}}>
            <h2 style={{fontSize: '40px', marginBottom: '25px'}}>{props.title}</h2>
            <span>{props.span}</span>
        </div>
    );
};