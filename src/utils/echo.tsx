import Echo from "laravel-echo";
import Pusher from "pusher-js";

(window as any).Pusher = Pusher;

const echo: Echo = new Echo({
  broadcaster: "pusher",
  key: "5c36390bb3c6da2790c4",
  cluster: "ap1",
  encrypted: true,
});

// Add event listeners to monitor Pusher connection status
// echo.connector.pusher.connection.bind("connected", () => {
//   console.log("Connected to Pusher");
// });

// echo.connector.pusher.connection.bind("disconnected", () => {
//   console.log("Disconnected from Pusher");
// });

// echo.connector.pusher.connection.bind("error", (error: any) => {
//   console.error("Error connecting to Pusher", error);
// });

export default echo;
