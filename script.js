function updateTime() {
  const time = new Date();
  document.getElementById("time").innerText = time.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();
