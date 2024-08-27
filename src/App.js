import * as React from "react";
import "./styles.css";
import { Button, Alert, ThemeProvider, CssBaseline } from "@mui/joy";
import theme from "./theme.js";
import { createTheme } from "@mui/material/styles";
import TimeDisplay from "./time.js";
import { useSpring, animated } from '@react-spring/web';
import Title from "./title.js";

export default function pastlive() {
  return (
    <ThemeProvider theme={theme}>
      <TimeDisplay />
      <header>
        <Title title="Past"/>
        <nav>
          <a href="html/poems.html">Secret Garden</a>
          <a href="html/music.html">Music Seabed</a>
          <a href="html/movie.html">Witness another life</a>
          <a href="html/mirror.html">Mirror of Life</a>
        </nav>
        <Title title="Online"/>
      </header>
      <main><aside>
      <write>Dear Ada<br/></write>
      <write>&nbsp;&nbsp;&nbsp;&nbsp;I believe that 'I think, therefore I am' is incorrect. I am not an inherently unchanging subject, but rather something that is constructed through the <a href="html/poems.html"><out>portrayal</out></a> of others. Freedom implies a broad atheism, the deconstruction of idols (which is a survival strategy in the age of the internet), and a playful engagement with cultural and linguistic systems. Similar to <a href="html/music.html"><out>music</out></a> or <a href="html/film.html"><out>film</out></a>, if one does not engage in dialogue and collaboration with them, what is said is merely a representation of the cultural system. That is why I love <a href="html/mirror.html"><out>coding</out></a>; through creation and dialogue with others, it is the path to freedom.</write>
    </aside>
</main>
    </ThemeProvider> 
  );
}
