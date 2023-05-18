let onlineList = [];

const SocketServer = (socket) => {
  console.log("connection");

  socket.on("disconnect", () => {
    console.log("disconnect");
    onlineList = onlineList.filter((online) => online.id !== socket.id);
  });

  socket.on("join", (userId) => {
    console.log("join");
    onlineList = onlineList.filter((online) => online.userId !== userId);
    onlineList.push({ id: socket.id, userId });
  });
  socket.on("sendMessage", async ({ userId, message }) => {
    const to = onlineList.find((online) => online.userId === userId);
    console.log("sending", userId, message);
    if (to) {
      socket.to(to.id).emit("receiveMessage", message);
    }
  });
  socket.on("calling", (userId) => {
    const to = onlineList.find((online) => online.userId === userId);
    const from = onlineList.find((online) => online.id === socket.id);
    console.log("calling", userId);
    if (to) {
      socket.to(to.id).emit("receiveCall", from.userId);
    }
  });
  socket.on("cancelCall", (userId) => {
    const to = onlineList.find((online) => online.userId === userId);
    const from = onlineList.find((online) => online.id === socket.id);
    if (to) {
      socket.to(to.id).emit("handleCancelCall", from.userId);
    }
  });
  socket.on("acceptCall", (userId) => {
    const to = onlineList.find((online) => online.userId === userId);
    const from = onlineList.find((online) => online.id === socket.id);
    if (to) {
      socket.to(to.id).emit("handleAcceptCall", from.userId);
    }
  });
};

export default SocketServer;
