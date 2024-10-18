function pingHost() {
  const host = prompt("Enter the host to ping:");
  if (host) {
    fetch(`/ping?host=${host}`)
      .then(response => response.text())
      .then(data => {
        document.getElementById("output").innerHTML = `<pre>${data}</pre>`;
      })
      .catch(error => {
        document.getElementById("output").innerHTML = `<pre>Error: ${error}</pre>`;
      });
  }
}

function getIP() {
  fetch("/ip")
    .then(response => response.text())
    .then(data => {
      document.getElementById("output").innerHTML = `<pre>${data}</pre>`;
    })
    .catch(error => {
      document.getElementById("output").innerHTML = `<pre>Error: ${error}</pre>`;
    });
}

function downloadFile() {
  const url = prompt("Enter the URL of the file:");
  if (url) {
    const link = document.createElement("a");
    link.href = url;
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

function runCommand() {
  const command = prompt("Enter the command to run:");
  if (command) {
    fetch(`/command?cmd=${command}`)
      .then(response => response.text())
      .then(data => {
        document.getElementById("output").innerHTML = `<pre>${data}</pre>`;
      })
      .catch(error => {
        document.getElementById("output").innerHTML = `<pre>Error: ${error}</pre>`;
      });
  }
}
