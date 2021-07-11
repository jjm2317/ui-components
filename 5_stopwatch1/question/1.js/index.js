document.querySelector('.stopwatch').onclick = (() => {
  let isRunning = false;
  let elapsedTime = { mm: 0, ss: 0, ms: 0 };
  let laps = [];

  const [$btnStartOrStop, $btnResetOrLap] = document.querySelectorAll(
    '.stopwatch > .control',
  );

  // 1) 스톱워치의 경과 시간을 '00:00:00' 형식의 문자열로 변환한다.
  const formatElapsedTime = (() => {
    // 1 => '01', 10 => '10'
    // Do Something Here!
    return ({ mm, ss, ms }) =>
      [mm, ss, ms].map((t) => (t < 10 ? '0' + t : t + '')).join(':');
  })();

  // 2) 스톱워치의 경과 시간을 렌더링한다.
  const renderElapsedTime = (() => {
    // Do Something Here!
    const $display = document.querySelector('.display');
    return (time) => {
      $display.textContent = time;
    };
  })();

  // 3) 랩 타임을 렌더링한다.
  const renderLaps = (() => {
    // Do Something Here!
    const $laps = document.querySelector('.laps');
    return (times) => {
      if (times.length === 0) {
        $laps.innerHTML = `<div class="lap-title">Laps</div>
         <div class="lap-title">Time</div>`;
        return;
      }
      $laps.style.display = 'grid';
      const idx = times.length - 1;
      const dom = document.createDocumentFragment();
      const idxDiv = document.createElement('div');
      const timeDiv = document.createElement('div');
      idxDiv.innerHTML = idx;
      timeDiv.innerHTML = times[idx];
      console.log(idxDiv, timeDiv);
      [idxDiv, timeDiv].forEach((child) => dom.appendChild(child));
      $laps.appendChild(dom);
      console.dir($laps);
    };
  })();

  // 4) Start/Stop 버튼 클릭 이벤트 핸들러
  const handleBtnStartOrStop = (() => {
    // Do Something Here!
    let timerId = null;
    return () => {
      console.log(elapsedTime);
      if (!isRunning) {
        $btnStartOrStop.innerHTML = 'Stop';
        $btnResetOrLap.innerHTML = 'Lap';
        $btnResetOrLap.removeAttribute('disabled');
        timerId = setInterval(() => {
          elapsedTime.ms += 1;
          if (elapsedTime.ms === 100) {
            elapsedTime.ms = 0;
            elapsedTime.ss += 1;
          }
          if (elapsedTime.ss === 60) {
            elapsedTime.ss = 0;
            elapsedTime.mm += 1;
          }
          renderElapsedTime(formatElapsedTime(elapsedTime));
        }, 10);
      } else {
        $btnStartOrStop.innerHTML = 'Start';
        $btnResetOrLap.innerHTML = 'Reset';
        clearInterval(timerId);
      }
      isRunning = !isRunning;
    };
  })();

  // 5) Reset/Lap 버튼 클릭 이벤트 핸들러
  const handleBtnResetOrLap = (() => {
    // Do Something Here!
    return () => {
      if (isRunning) {
        laps.push(formatElapsedTime(elapsedTime));
        console.log(laps);
        renderLaps(laps);
      } else {
        document.querySelector('.laps').style.display = 'none';
        elapsedTime = { mm: 0, ms: 0, ss: 0 };
        renderElapsedTime(formatElapsedTime(elapsedTime));
        $btnResetOrLap.setAttribute('disabled', true);
        laps = [];
        renderLaps(laps);
      }
    };
  })();

  return ({ target }) => {
    if (!target.classList.contains('control')) return;
    target === $btnStartOrStop ? handleBtnStartOrStop() : handleBtnResetOrLap();
  };
})();
