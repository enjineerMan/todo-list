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
function New({setListName}){
   const [msg, setMsg] = useState("");
   function handleSubmit(event){
      setListName(msg);
      setMsg("");
      event.preventDefault(); //prevents refresh
   }
   function handleChange(event){
      setMsg(event.target.value);
   }
    return (
      <div className="main">
         <h1> What would you like your todo list to be called? </h1>
         <ThemeProvider theme={theme}>
            <form onSubmit={handleSubmit}>
               <TextField className="text-field" type="text" value={msg} onChange={handleChange} />
            </form>
            <Link to="/todo-list"> 
               <Button renderas="button">
                  <span> Next </span>
               </Button>
            </Link>
         </ThemeProvider>
      </div>


    )
}

export default New;