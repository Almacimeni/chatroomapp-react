
const WebSocketServer = require('ws').Server
const wss = new WebSocketServer({ port: 9090 })

let clients = []



wss.on("connection", (connection) => {
    clients.push(connection)
    broadcast({message: "::::  Bir kullanıcı giriş yaptı  :::: :" })
    

    connection.on('message', (message) => {
        const data = JSON.parse(message)
        broadcast(data)
    })
})




setInterval(cleanUp, 100)

function broadcast(message) {
    const data = JSON.stringify(message)
    clients.forEach(client => client.send(data))
   
}

function cleanUp() {
    const clientsLeaving = clients.filter(client => client.readyState === client.CLOSED)
    clients = clients.filter(client => client.readyState !== client.CLOSED)
    clientsLeaving.forEach(client => broadcast({message: "::::  Bir kullanıcı çıkış yaptı  :::: :" }))
}


