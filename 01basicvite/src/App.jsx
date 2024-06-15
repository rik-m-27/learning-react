import Youtube from "./youtube"

function App() {
  const username = "Rik";
  return (
    <>
      <h2>Vite react app.</h2>
      <h2>My name: {username}, age: {20+3}</h2>
      {/* at a time we can return one element, 
      for that reason wrap up in a div, 
      infact we don't need to use the tag div */}
      <Youtube/>
    </>
  )
}

export default App
