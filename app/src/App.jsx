import { useState } from 'react'

function App() {
  const [amount, setAmount] = useState("");
  const [disamt ,setDis]=useState(0);
  const [result,setResult] =useState("");
  const calculateDiscount = ()=>
  {
    if(Number(amount)<500)
    {
         setDis(500);
         setResult("No Discount");
    }
   
  };
  const reset = ()=>
  {
    setAmount(0);
    setDis(0);
    setResult("");
  }

  const newLocal = <input type="number" value={amount} onChange={calculateDiscount}  />;
  
  return (
    <>
    <h1> Disount Calcualtor</h1>
    <label> Amount :</label>
    {newLocal} 
    <button onClick={calculateDiscount}>Calculate</button>
    <button onClick={reset}>reset</button>
    {disamt && <p> ur dist amot : {disamt} {result}</p>}
    </>
      
  )
}

export default App
