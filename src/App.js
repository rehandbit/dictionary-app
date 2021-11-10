import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Switch, withStyles } from '@material-ui/core';
import './App.css';
import Header from './Component/Header/Header';
import Definitions from './Component/Definitions/Definitions.js';
import { grey } from '@material-ui/core/colors'



function App() {
  const [word, setWord] = useState("")
  const [meaning,setMeaning] = useState ([])
  const [category, setCategory] = useState("en")
  const [LightMode, setLightMode] = useState(false)

  const NightModes = withStyles({
    switchBase: {
    color: grey[300],
    '&$checked': {
    color: grey[500],
    },
    '&$checked + $track': {
    backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);


  const dictionaryApi = async() => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
      setMeaning(data.data)
    } catch (error) {
      console.log(error) 
    }
  };

  useEffect(() => { dictionaryApi(); }, [word, category]);
  return (
		 <div className="App" style={{height: 'auto', backgroundColor: LightMode?"#fff" : '#282c34',color:LightMode? 'black':'white', transition: 'all 0.8s linear' }} >

        <Container maxWidth="md" style={{ display:'flex', flexDirection: 'coloumn', height:'40vh', justifyContent: 'space-evenly'}} >
        
        <div style={{position: 'absolute', top: 0, right: 15, paddingTop: 10 }} >
          <span>{LightMode ? "Light" : "Dark"} Mode</span>
          <NightModes checked={LightMode} onChange={()=> setLightMode(!LightMode)}/>
        </div>

      <Header setWord={setWord} category={category} setCategory={setCategory} word={word} setMeaning={setMeaning}LightMode={LightMode} />
      </Container>
      {meaning && (
        <Definitions word={word} meaning={meaning} category={category} />)}
		 </div>)
}

export default App;
