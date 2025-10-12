"use client"

import { NAV_ITEMS } from '@/lib/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {
    const pathname = usePathname()

    const isActive = (path: string) => {
        if (path === '/') return pathname === '/'

        return pathname.startsWith(path)
    }

    return (
        // We are rendering the list of navigation items using map function, and they're coming from lib/constants.ts file
        <ul className='flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium'>
            {
                NAV_ITEMS.map(({ href, label }) => (
                    <li key={href}>
                        <Link href={href} className={`hover:text-yellow-500 transition-colors ${isActive(href) ? 'text-gray-100' : ''}`}> {label} </Link>
                    </li>
                ))
            }
        </ul>
    )

}



export default NavItems