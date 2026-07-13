import React from 'react'

const AuthorsLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div>
            Authors Layout is special only for authors route or nested routes the authors directory.

            {children}
        </div>
    )
}

export default AuthorsLayout
