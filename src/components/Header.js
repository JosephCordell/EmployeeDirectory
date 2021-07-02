import React, { useRef, useEffect } from 'react';

export default function Header({ filter }) {
    const searchRef = useRef('')
    
    useEffect(() => {
        searchRef.current.focus()
    },[])



    return (
        <div className={'header'}>
            <h1> Employee Directory </h1>

            <input type='text' ref={searchRef} onChange={filter}  className='input' placeholder='Search by first or last name' />

        </div>
    )
}
