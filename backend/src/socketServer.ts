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
};

export default SocketServer;
