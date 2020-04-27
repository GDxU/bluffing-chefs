import { useState } from 'react'

type InputType = [string, (event: React.ChangeEvent<HTMLInputElement>) => void, () => void]

export const useInputChange: (characterLimit: number) => InputType = (characterLimit: number) => {
    const [input, setInput] = useState('')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()

        if (event.target.value.length <= characterLimit) {
            setInput(event.target.value)
        }
    }

    const resetInputValue = () => {        
        setInput('')
        
    }

    return [input, handleInputChange, resetInputValue]
}
