import * as el from "./elements.js"
import * as timer from "./timer.js"
import { state, cardState } from "./state.js"
import * as sounds from "./sounds.js"

export const actions = {
    toggleRunning() {
        document.documentElement.classList.toggle('running')
        el.stopButton.classList.toggle('disabled')
        sounds.buttonPress.play()
        
        state.isRunning = !state.isRunning
        timer.countdown()
    },
    stopTimer() {
        document.documentElement.classList.remove('running')
        el.stopButton.classList.add('disabled')

        state.isRunning = false
        timer.updateDisplay(state.default.minutes, state.default.seconds)
    },
    addTimer() {
        let minutes = state.minutes
        let seconds = state.seconds

        if ((minutes + 5) > 60) {
            minutes = 60
            seconds = 0
            timer.updateDisplay(minutes, seconds)
            return
        }
        
        minutes += 5
        timer.updateDisplay(minutes, seconds)
    },
    removeTimer() {
        let minutes = state.minutes
        let seconds = state.seconds

        if ((minutes - 5) < 0) {
            minutes = 0
            seconds = 0
            timer.updateDisplay(minutes, seconds)
            return
        }

        minutes -= 5
        timer.updateDisplay(minutes, seconds)
    },
    changeCard(card) {
        if (card) {
            if (!cardState.selected) {
                cardState.selected = card
            
                el.cardsElements[cardState.selected].classList.add('selected')
                sounds.ambientSounds[cardState.selected].play()
                return
            }
            el.cardsElements[cardState.selected].classList.remove('selected')
            sounds.ambientSounds[cardState.selected].pause()

            cardState.selected = card
            
            el.cardsElements[cardState.selected].classList.add('selected')
            sounds.ambientSounds[cardState.selected].play()
        }
    }
}