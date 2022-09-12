import React from 'react';

function Admin()
{
    return (<div>
        Admin
    </div>);
}
function User()
{
    return (<div>
        User
    </div>);
}
let components = {
    'Admin': Admin,
    'User': User
};
export default class DynamicComponent extends React.Component
{
    constructor(props) {
        super(props);

    }

    render() {
        let Componet = components[this.props.userType];
        let data = "<h1>Hello</h1>";
        return (
            <div>
                <Componet/>
                {data}
            </div>
        );
    }
}