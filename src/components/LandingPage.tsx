import * as React from 'react'
import { useEffect, useState, useContext } from 'react'
import * as api from '../client/api'
import { stringInRange } from '../shared/utils/constraintUtils'
import { useInputChange } from '../hooks/useInputChange'
import { AppContext } from './appProvider/AppProvider'
import { GameContext } from './gameProvider/GameProvider'

const LandingPage = () => {
    const context = useContext(AppContext)
    const gameContext = useContext(GameContext)

    const [ name, setName ] = useInputChange(15) 

    function joinRandomQueue(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        api.joinRandomQueue(name, () => {
            context.setStatus('queued')
            gameContext.setUserName(name)
        })
    }

    return (
        <div className='landing-page'>
            <p>Select Your Name</p>
            <form onSubmit={joinRandomQueue}>
                <input
                    type='text'
                    name='name'
                    value={name}
                    placeholder='enter username...'
                    onChange={setName}
                />
                <input
                    type='submit'
                    value='find game'
                    disabled={!stringInRange(name, 3, 15)}
                />
            </form>
        </div>
    )
}

export default LandingPage
