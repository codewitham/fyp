import { EdgeStoreProvider } from '@/lib/edgestore'
import React from 'react'



const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <EdgeStoreProvider>{children}</EdgeStoreProvider>
        </div>
    )
}

export default layout