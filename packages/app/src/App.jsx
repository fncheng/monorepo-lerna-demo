export default function App() {
  const handleClick = () => {
    console.log('click me!')
  }
  return (
    <>
      <div className="App">123</div>
      <button onClick={handleClick}>my button</button>
    </>
  )
}