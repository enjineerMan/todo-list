import {useState} from "react";
import {Button, TextField, FormLabel, ThemeProvider, createTheme} from "@mui/material";
import {Link} from "react-router-dom";
import "../styles/form.css";
import '@fontsource/roboto/400.css';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Chilanka',
      'cursive',
    ].join(','),
  },});
function Main(props){

    return (
      <div className="main">
         <h1> main page </h1>
         <Link to="new"> New todo-list</Link>
      </div>


    )
}

export default Main;