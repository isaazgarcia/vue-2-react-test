const Rorphans = ({children,number=2})=>{
    const words = children.split(' ');
    return <>{words.map((word, i) => word + (i > words.length-(number+1) ? '\u00a0' :  ' ')).join('')}</>
};

export default Rorphans;
