import { controllers } from './elements.js'
import {actions} from './actions.js'
import { state } from './state.js'

export function registerControls() {
    controllers.addEventListener('click', (event) => {
        const action = event.target.dataset.action

        if(typeof actions[action] != 'function') return

        actions[action]()
    })
}