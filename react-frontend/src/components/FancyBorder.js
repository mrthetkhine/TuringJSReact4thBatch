import "./FancyBorder.css";
export default function FancyBorder(props)
{
    console.log("Children ",props.children);
    return(
        <div className={"fancy-border"}>
            {props.header}
            {props.children}
        </div>)
}