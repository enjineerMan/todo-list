import {useState, useContext} from "react";
import {Button, TextField, FormLabel, ThemeProvider, createTheme, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {Context} from "../App.js";
import "../styles/form.css";
import '@fontsource/roboto/400.css';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Chilanka',
      'cursive',
    ].join(','),
  },});
function Form(props){
    const [msg, setMsg] = useState("");
    const [list, setList] = useState([]);
    const [num, setNum] = useState(1);

    var listName = useContext(Context);

    const post = async (myBody) => {
      const response = await fetch("http://localhost:3000/api/lists/", {
        method: 'POST',
        body: myBody, // string or object
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const myJson = await response.json();
    }

    function handleSubmit(event){
      setNum(num+1);
      setList([...list, [msg, num, false]]); //might not update list immediately
      setMsg("");
      event.preventDefault(); //prevents refresh
    }
    
    function handleChange(event){
      setMsg(event.target.value);
    }

    function handleClick(){
      setList([]);
      setNum(1);
    }

    function handleListItemClick(){
      console.log("click");
    }

    function handleSave(){
      post(list);
    }

    function handleMouseEnter(event){
      var listNum = event._targetInst.key.split(",")[1] - 1; //index of todo in list
      var new_list_element = list[listNum];
      new_list_element[2] = true;
      setList([...list.slice(0, listNum), new_list_element, ...list.slice(listNum + 1, list.length)]);
    }

    function handleMouseLeave(event){
      var listNum = event._targetInst.key.split(",")[1] - 1; //index of todo in list
      var new_list_element = list[listNum];
      new_list_element[2] = false;
      setList([...list.slice(0, listNum), new_list_element, ...list.slice(listNum + 1, list.length)]);
    }
    return (
      <div className="main">
        <ThemeProvider className="theme" theme={theme}>
          <h1 className="title"> {listName}</h1>
          <form className="text-area" onSubmit={handleSubmit}>
            <FormLabel className = "text-area">
            {"Add Todo:   "}
            <TextField className="text-field" InputProps={{style:{fontFamily: "Roboto"}}} type={"text"} value={msg} onChange={handleChange} />
            </FormLabel>
          </form>

          {list.map((todo)=>(
            <Typography component="p" key={todo} 
              className={todo[2] ? "grey-element" : "black-element"} 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              {todo[1] + ". " + todo[0]}

            </Typography>
          ))}
          <Button className = "label" onClick={handleClick}> Clear List </Button>
          <Button className = "label" onClick={handleSave}> Save </Button>
          <Link className="return" to="/"> Return to menu</Link>
        </ThemeProvider>
      </div>
    )
}

export default Form;