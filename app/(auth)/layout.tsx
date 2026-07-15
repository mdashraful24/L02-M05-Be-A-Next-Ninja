import React from "react"

const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div>
            Auth Layout is special only for auth routes or nested routes inside the auth directories.

            {children}
        </div>
    )
}

export default AuthLayout
