import React from 'react';
export default class Avatar extends React.Component
{
    constructor(props) {
        super(props);

    }

    render() {
        let profile = this.props.profile;
        //profile.name = "Something";
       return(<div>
           Avatar {profile.name}
       </div>) ;
    }
}