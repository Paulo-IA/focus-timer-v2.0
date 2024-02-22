import * as el from "./elements.js"
import { state } from "./state.js"

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, "0")
    state.minutes = minutes

    el.seconds.textContent = String(seconds).padStart(2, "0")
    state.minutes = minutes
}

