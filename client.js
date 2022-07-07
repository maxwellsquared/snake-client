const { ip, port } = require("./constants");
const net = require("net");
// const { setTimeout } = require("timers/promises");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: ip, // IP address here,
    port: port // PORT number here,
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