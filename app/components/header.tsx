'use client';

import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl">🌱</span>
          <h1 className="text-2xl font-bold">GreenPiece</h1>
        </Link>
        <div className="flex items-center space-x-4">
          <p className="text-sm hidden sm:block">Your Personal CO2 Saving Calculator</p>
          <a
            href="/login"
            className="px-4 py-2 border border-white rounded-md hover:bg-green-700 cursor-pointer"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  )
}
