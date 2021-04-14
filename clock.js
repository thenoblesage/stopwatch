let Clock = () => {
  let pause = 0;
  let elapsed = 0;
  let curr = null;

  const calclulateElapsedTime = (secs) => {
    let hours = Math.floor(secs / 3600);
    let minutes = Math.floor((secs - hours * 3600) / 60);
    let seconds = Math.floor(secs - minutes * 60 - hours * 3600);
    return { hours: hours, mins: minutes, secs: seconds };
  };

  const format = (input) => {
    let ans = input.toString();
    return ans.length == 2 ? ans : "0" + ans;
  };

  const updateDom = (start) => {
    elapsed = pause + Date.now() - start;
    let ans = calclulateElapsedTime(Math.floor(elapsed / 1000));
    const { hours, mins, secs } = ans;

    time.innerHTML = `${format(hours)}:${format(mins)}:${format(secs)}`;
  };

  const startTimer = () => {
    start_btn.disabled = true;
    stop_btn.disabled = false;
    curr = setInterval(updateDom, 1000, Date.now());
  };

  const stopTimer = () => {
    start_btn.disabled = false;
    stop_btn.disabled = true;
    clearInterval(curr);
    pause = elapsed;
  };

  const resetTimer = () => {
    pause = 0;
    start_btn.disabled = false;
    stop_btn.disabled = true;
    time.innerHTML = "Press Start";
    clearInterval(curr);
  };

  let start_btn = document.querySelector("#start");
  start_btn.onclick = () => startTimer();
  let stop_btn = document.querySelector("#stop");
  stop_btn.onclick = () => stopTimer();
  stop_btn.disabled = true;
  let reset_btn = document.querySelector("#reset");
  reset_btn.onclick = () => resetTimer();

  let time = document.querySelector("#time");
};

let clock = Clock();
