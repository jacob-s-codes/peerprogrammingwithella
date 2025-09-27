"use client";
import React, { useState } from 'react'
import { HomeIcon, CreditCardIcon, FlagIcon } from '@heroicons/react/24/outline'

const Sidebar = () => {
  const [active, setActive] = useState('Dashboard')

  const menuItems = [
    { name: 'Dashboard', icon: <HomeIcon className="w-6 h-6" /> },
    { name: 'Transactions', icon: <CreditCardIcon className="w-6 h-6" /> },
    { name: 'Goals', icon: <FlagIcon className="w-6 h-6" /> },
  ]

  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col px-6 py-8">
      <h1 className="text-2xl font-bold mb-8">My Finance</h1>
      <nav className="flex flex-col gap-4">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200
              ${active === item.name ? 'bg-gray-700 font-semibold' : 'hover:bg-gray-700'}
            `}
          >
            {item.icon}
            <span>{item.name}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
