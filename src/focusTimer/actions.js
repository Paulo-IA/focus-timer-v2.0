import { state } from "./state.js"

export const actions = {
    toggleRunning() {
        document.documentElement.classList.toggle('running')
        state.isRunning = !state.isRunning
    },
    stopTimer() {
        console.log('[stopTimer()]')
    },
    addTimer() {
        console.log('[addTimer()]')
    },
    removeTimer() {
        console.log('[removeTimer()]')
    },
}