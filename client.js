const net = require("net");
// const { setTimeout } = require("timers/promises");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541 // PORT number here,
  });
  
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connected to the server.");
    conn.write("Name: MAX");

  })

  // conn.on('data', (data) => {
  //   console.log(data);
  // });

  // interpret incoming data as text
  
  return conn;
};

module.exports = { connect };


// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)