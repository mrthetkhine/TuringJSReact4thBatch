import React, {useId, useState,useCallback,useInsertionEffect} from 'react';

export default function UseIdDemo(props)
{
    useInsertionEffect(()=>{
        console.log('Run before DOM mutation');
    });
    console.log('Render');
    const id = useId();
    return (
        <>
            <div>
                <label htmlFor={id}>Do you like React?</label>
                <input id={id} type="checkbox" name="react"/>
            </div>
            <div>
                <label htmlFor={id +'-lastName'}>Name</label>
                <input id={id +'-lastName'} type="text" />
            </div>
        </>
    );
}