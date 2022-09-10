import React from 'react';

export default class FragmentDemo extends React.Component
{
    render() {
        return (
            <React.Fragment>
                <div>
                    One
                </div>
                <div>
                    Two
                </div>
            </React.Fragment>
        );
    }
}