import { createHandler, StartServer } from '@solidjs/start/server'

export default createHandler(() =>
  <StartServer
    document={(properties) =>
      <html lang="en">
        <head>
          <title>SolidStart</title>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {properties.assets}
        </head>
        <body>
          <div id="#app">{properties.children}
          {properties.scripts}
          </div>
        </body>
      </html>
    }
  />)
