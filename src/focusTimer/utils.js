import * as el from "./elements.js"
import * as sounds from "./sounds.js"
import { cardState } from "./state.js"

export function setSelectedCard(card) {
    cardState.selected = card
            
    el.cardsElements[cardState.selected].classList.add('selected')
    sounds.ambientSounds[cardState.selected].play()
    sounds.ambientSounds[cardState.selected].loop = true

}

export function unsetSelectedCard() {
    el.cardsElements[cardState.selected].classList.remove('selected')
    sounds.ambientSounds[cardState.selected].pause()
    sounds.ambientSounds[cardState.selected].loop = false
}