import React from 'react'

function Layout({children}) {
    return (
        <main>
            <div className='mt-4'>Mission || Vission</div>
            { children }
        </main>
    )
}

export default Layout
