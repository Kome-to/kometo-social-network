let onlineList = [];

const SocketServer = (socket) => {
  socket.on("disconnect", () => {
    console.log("disconnect");
    onlineList = onlineList.filter((online) => online.id !== socket.id);
  });

  socket.on("join", (userId) => {
    console.log("join", socket.id);
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

  socket.on("join-call", ({ id, userId }) => {
    const to = onlineList.find((online) => online.userId === userId);
    console.log("Join:", id, userId, to);
    if (to) {
      socket.to(to.id).emit("create-call", id);
    }
  });
  socket.on("end-call", (userId) => {
    const to = onlineList.find((online) => online.userId === userId);
    console.log("test", userId);

    if (to) {
      socket.to(to.id).emit("handle-end-call");
    }
  });
};

export default SocketServer;
