'use client'

import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react'

const Provider = ({ children, session }: { children: React.JSX.Element[]; session?: Session }) => {
  return (
    <SessionProvider session={session}>
      { children }
    </SessionProvider>
  )
}

export default Provider
