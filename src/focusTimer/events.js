import * as el from './elements.js'
import {actions} from './actions.js'

export function registerControls() {
    el.controllers.addEventListener('click', (event) => {
        const action = event.target.dataset.action

        if(typeof actions[action] != 'function') return

        actions[action]()
    })
}

export function registerCardSounds() {
    el.cards.addEventListener('click', (event) => {
        const card = event.target.dataset.card

        actions.changeCard(card)
    })
}