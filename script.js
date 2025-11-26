function sendCommand(cmd) {
fetch("https://your-firebase-url.firebaseio.com/cmd.json", {
method: "PUT",
body: `"${cmd}"`
});
}
