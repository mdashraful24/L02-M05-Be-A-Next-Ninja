'use client'

import { useEffect } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="flex min-h-dvh items-center justify-center p-6">
            <Card className="w-full max-w-lg shadow-lg">
                <CardHeader className="text-center">
                    <div className="mb-4 flex justify-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10">
                            <AlertTriangle className="h-7 w-7 text-destructive" />
                        </div>
                    </div>

                    <CardTitle className="text-2xl font-bold">
                        Something went wrong
                    </CardTitle>

                    <CardDescription className="text-base">
                        An unexpected error occurred while loading this page.
                        Please try again or contact support if the problem
                        persists.
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                    {process.env.NODE_ENV === 'development' && (
                        <div className="rounded-md border bg-muted p-3">
                            <p className="text-sm font-medium text-destructive">
                                Development Error
                            </p>
                            <p className="mt-1 wrap-break-word font-mono text-xs text-muted-foreground">
                                {error.message}
                            </p>
                        </div>
                    )}

                    <div className="flex justify-center">
                        <Button onClick={reset} size="lg">
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Try Again
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}