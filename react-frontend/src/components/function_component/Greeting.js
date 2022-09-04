function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}
export default function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    let component = isLoggedIn? <UserGreeting/>: <GuestGreeting/>;
    /*return ( <div>
        {component}
    </div>);*/
    return (
        <div>
            {isLoggedIn? <UserGreeting/>: <GuestGreeting/>}
        </div>
    );
}
