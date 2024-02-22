import * as el from "./elements.js"
import {actions} from './actions.js'
import { state } from "./state.js"
import { kithcenTimer } from "./sounds.js"

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, "0")
    state.minutes = minutes

    el.seconds.textContent = String(seconds).padStart(2, "0")
    state.seconds = seconds
}

export function countdown() {

    clearTimeout(state.countdownId)

    if(!state.isRunning) {
        return
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--

    if(seconds < 0) {
        seconds = 59
        minutes--
    }

    if(minutes < 0) {
        actions.stopTimer()
        kithcenTimer.play()
        return
    }

    updateDisplay(minutes, seconds)

    state.countdownId = setTimeout(() => countdown(), 1000)
}