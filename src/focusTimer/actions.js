import { state } from "./state.js"
import * as el from "./elements.js"
import * as timer from "./timer.js"

export const actions = {
    toggleRunning() {
        document.documentElement.classList.toggle('running')
        el.stopButton.classList.toggle('disabled')
        
        state.isRunning = !state.isRunning
    },
    stopTimer() {
        document.documentElement.classList.remove('running')
        el.stopButton.classList.add('disabled')

        state.isRunning = false
        timer.updateDisplay()
    },
    addTimer() {
        let minutes = state.minutes
        if ((minutes += 5) > 60) {
            state.minutes = 60
            state.seconds = 0
            timer.updateDisplay(state.minutes, state.seconds)
            return
        }
        
        state.minutes += 5
        timer.updateDisplay(state.minutes, state.seconds)

    },
    removeTimer() {
        let minutes = state.minutes
        if ((minutes -= 5) < 0) {
            state.minutes = 0
            state.seconds = 0
            timer.updateDisplay(state.minutes, state.seconds)
            return
        }

        state.minutes -= 5
        timer.updateDisplay(state.minutes, state.seconds)
    },
}