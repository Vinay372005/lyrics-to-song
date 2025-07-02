function generateSong() {
  const lyrics = document.getElementById("lyrics").value.trim();
  const voice = document.getElementById("voiceType").value;
  const style = document.getElementById("musicStyle").value;

  if (lyrics === "") {
    alert("Please enter your lyrics.");
    return;
  }
  if (voice === "") {
    alert("Please select a voice type.");
    return;
  }
  if (style === "") {
    alert("Please select a music style.");
    return;
  }

  navigator.clipboard.writeText(lyrics); // Auto-copy lyrics

  const message = `
    ✅ Lyrics copied!<br><br>
    🎤 <strong>Voice Type:</strong> ${voice}<br>
    🎼 <strong>Music Style:</strong> ${style}<br><br>
    ✍️ Paste your lyrics in Suno AI and generate your song.<br><br>
    🎧 Enjoy!
  `;

  document.getElementById("outputMessage").innerHTML = message;

  // Open Suno in new tab
  window.open("https://suno.com", "_blank");
}

function copyLyrics() {
  const text = document.getElementById("lyrics").value;
  navigator.clipboard.writeText(text);
  alert("✅ Lyrics copied to clipboard!");
}

function downloadLyrics() {
  const text = document.getElementById("lyrics").value;
  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "my_lyrics.txt";
  link.click();
}

function suggestLyrics() {
  const samples = [
    "In the sky so high I fly,\nDreams like stars passing by.",
    "Waves crashing in my mind,\nPeace is what I hope to find.",
    "Heartbeats dancing in the rain,\nHealing slowly through the pain."
  ];
  const random = samples[Math.floor(Math.random() * samples.length)];
  document.getElementById("lyrics").value = random;
}

function clearLyrics() {
  document.getElementById("lyrics").value = "";
  document.getElementById("outputMessage").innerHTML = "";
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}
