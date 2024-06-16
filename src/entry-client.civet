{ mount, StartClient } from @solidjs/start/client

appSelector := '#app'

appElement := document.querySelector appSelector

throw new Error `No ${appSelector} element found` if not appElement

mount => <StartClient />, appElement
