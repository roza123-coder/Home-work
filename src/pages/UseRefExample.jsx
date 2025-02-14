import React, { useState, useEffect, useRef } from "react";

export const UseRefExample = () => {
  // 1. Счетчик кликов без перерендера
  const clickCount = useRef(0);

  const handleClick = () => {
    clickCount.current += 1;
    console.log(clickCount.current);
  };

  // 2. Управление видео-плеером
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  // 3. Обратный отсчет с предупреждением
  const [seconds, setSeconds] = useState(10); // Начать отсчет с 10 секунд
  const timerRef = useRef(null);

  useEffect(() => {
    if (seconds > 0) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
      alert("Время вышло!");
    }

    return () => clearInterval(timerRef.current); // Очистка интервала при размонтировании компонента
  }, [seconds]);

  return (
    <div>
      {/* Счетчик кликов */}
      <button onClick={handleClick}>Кликни меня</button>

      <br />
      <br />

      {/* Видео плеер */}
      <video ref={videoRef} width="400" controls>
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Ваш браузер не поддерживает видео.
      </video>
      <br />
      <button onClick={playVideo}>Воспроизвести</button>
      <button onClick={pauseVideo}>Пауза</button>

      <br />
      <br />

      {/* Обратный отсчет */}
      <div>Оставшееся время: {seconds} секунд</div>
    </div>
  );
};
