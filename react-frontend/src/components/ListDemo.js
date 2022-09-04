function Item(props) {
    return <div >
        {props.item}
    </div>;
}

export default function ListDemo()
{
    let items = ["Task1 ","Task 2","Task3"];
    return (<div>
        {
            items.map((item,index)=>
                <Item key={index} item={item}/>)
        }
    </div>);
}