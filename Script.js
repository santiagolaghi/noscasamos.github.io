body {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  overflow: hidden;
  background: black;
  position: relative;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.countdown {
  text-align: center;
  color: white;
  position: relative;
  z-index: 1;
}

#timer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 800px;
}

#timer div {
  margin: 10px;
  text-align: center;
}

#timer span {
  font-size: 2em;
  font-weight: bold;
}

h1 {
  font-size: 3em;
  margin-bottom: 20px;
}


