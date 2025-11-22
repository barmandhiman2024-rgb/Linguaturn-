document.getElementById("app").innerHTML = `
  <h2>Select Language</h2>
  <select id='lang'>
    <option>English</option>
    <option>Bengali</option>
    <option>Hindi</option>
  </select>
  <br><br>
  <button onclick='start()'>Start</button>
  <button onclick='stop()'>Stop</button>
  <p id='status'>Status: Stopped</p>
`;

function start(){
  document.getElementById('status').innerText = "Status: Running";
}

function stop(){
  document.getElementById('status').innerText = "Status: Stopped";
}
