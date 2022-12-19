import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

// function createEntry(emojiTerm => (<Entry key={emojiTerm.id}
//                 emoji={emojiTerm.emoji}
//                 name={emojiTerm.name}
//                 description={emojiTerm.meaning} />))

function App(){
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      
      <dl className="dictionary">
        {emojipedia.map(createEntry => <Entry key={createEntry.id}
                emoji={createEntry.emoji}
                name={createEntry.name}
                description={createEntry.meaning} />)}        
      </dl>
    </div>
  );
}

export default App;
