import './App.css'
import Profile from './Profile';

function App() {
  return (
    <div>      
      <Profile 
        name="Navraj Nav"
        occupation="Producer and Rapper"
        funFact="The first and only desi ethnicity (Punjabi) producer and rapper to reach the top of the musical world."
        quote="Every one becomes a hater when you are on top of the world with unlimited aura"
      />
      <Profile 
        name="Playboi Carti"
        occupation="Rapper"
        funFact="Uses voice differently than most rap artists. The words are secondary to the vibe and aura of the voice as an instrument."
        quote="Look at these guys. Look at these guys. F*** these guys. F*** these guys"
      />

    </div>
  );
}

export default App;