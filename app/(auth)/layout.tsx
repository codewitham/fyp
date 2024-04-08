import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=' h-screen w-full flex flex-col items-center justify-center p-5'>
            {children}
        </div>
    )
}

export default layout