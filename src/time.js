import React, { useState, useEffect } from "react";

function TimeDisplay() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // 每秒更新一次

    return () => clearInterval(intervalId); // 清理副作用
  }, []);

  return (
    <div style={styles.container}>
      <div>{currentTime.toLocaleDateString()}</div> {/* 显示日期 */}
    </div>
  );
}

const styles = {
  container: {
    position: "fixed",
    top: "10px",
    right: "20px",
    textAlign: "right",
    color: "#333",
  },
  date: {
    fontFamily: "'Dancing Script', cursive",
    fontSize: "20px",
  },
};

export default TimeDisplay;
