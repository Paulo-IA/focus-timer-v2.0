import * as events from './events.js'
import { state } from './state.js'

export function start(minutes, seconds) {
    state.minutes = minutes
    state.seconds = seconds

    events.registerControls()
}