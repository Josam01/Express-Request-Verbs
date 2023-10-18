import { SERVER_IS_LISTENING_ON_PORT } from "./SystemMessages/index.mjs"
import { PORT } from './index.mjs'

export const serverStarted = () => {
    console.log(SERVER_IS_LISTENING_ON_PORT, PORT)
}