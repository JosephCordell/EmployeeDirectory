import React, { useState, useRef, useEffect } from 'react';

export default function Header({ filter }) {




    return (
        <div>
            <h1> Employee Directory </h1>

            <input type='text'  onChange={filter}  className='input' placeholder='Search by first or last name' />

        </div>
    )
}
