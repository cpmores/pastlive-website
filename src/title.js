import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "./styles.css";

const Title = ({ title }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 5000 },
  });

  return (
    <div className="App">
      <animated.h1 style={props}>{title}</animated.h1>
    </div>
  );
};

export default Title;
