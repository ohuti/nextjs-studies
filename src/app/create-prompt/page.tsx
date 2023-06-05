'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Form from '@components/Form'

const CreatePrompt = () => {
    const router = useRouter()
    const { data: session } = useSession()
    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState<{ prompt: string, tags?: string }>({
        prompt: '',
        tags: ''
    })

    const createPrompt = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setSubmitting(true)
        
        try {
            const response = await fetch('/api/prompt/new', {
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    tags: post.tags,
                    username: session?.user.name
                })
            })
            if (response.ok) {
                router.push('/')
            }
        } catch (error) {
            console.error(error)
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <Form
            type='Create'
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={createPrompt}
        />
    )
}
    
export default CreatePrompt
