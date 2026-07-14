import React from 'react'

const AuthorsLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div>
            Author Layout is special only for authors route or nested routes inside the authors directory.

            {children}
        </div>
    )
}

export default AuthorsLayout
