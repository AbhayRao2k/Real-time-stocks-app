import { NAV_ITEMS } from '@/lib/constants'
import React from 'react'

const NavItems = () => {
    return (
        // <ul className='flex gap-10 justify-center py-5'>
        //     <li>Dashboard</li>
        //     <li>Search</li>
        //     <li>Watchlist</li>
        // </ul>
        NAV_ITEMS.map((href, title)=> (
            <li key={href}>{href , title}</li>
        ))
    )
}

export default NavItems