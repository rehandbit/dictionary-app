import React from 'react';
import '../Definitions/Definitions.css'

const Definitions = ({word, category, meaning, LightMode}) => {
   return (
      <div className="meaning" >
         {/* {
            meaning[0] && word && category === "en" && (
               <audio
               src={meanings[0].phontics[0] && meanings[0].phonotics[0].audio}  
               style={{backgroundColor: '#fff', borderRadius:10 }}
               controls
               >
               Does not support
               </audio>
            )
         } */}
         {
            word === "" ? (
            <span className='subTitle'>Start by typing a word in Search</span>
            ) : (
               meaning.map((mean) => (
                  mean.meanings.map((item) => 
                     item.definitions.map((def) => (
                        <div className="singleMean" 
                              style={{ backgroundColor:LightMode? "#3b5360" : "whitesmoke", color: LightMode? "whitesmoke" : 'black' }}>
                                 <b>{def.definition}</b>
                                 <hr style={{ backgroundColor:'black',width: '100%' }} />
                                 {
                                    def.example && (
                                       <span>
                                          <b>Example : </b>
                                          {def.example}
                                       </span>
                                    )
                                 }
                                 {def.synonyms && (
                                    <span>
                                       <b>Synonyms : </b>
                                       {def.synonyms.map((s) => `${s}, `)}
                                    </span>
                                 )}
                              </div>
                     ))
                  )
               ))
            )
         }
      </div>
   )
}

export default Definitions
