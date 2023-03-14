import './App.css';
import { useEffect, useState } from 'react'

import {ButtonForBanana, ButtonForStraw, Reset} from './components/Buttons'
import { PictureFruit } from './components/PictureFruit';

export const App = () => {
  const [isNum, setNum] = useState(0)
  const [isStraw, setStraw] = useState(0)

/*  const [isFruits, setFruits] = useState{
    {
      id: "1"
      fruit: "banan"
    }
  }
*/
  
  useEffect(() => {
      console.log('init')
      if (isNum === 10) {
        setNum(0)
      }
  }, [isNum])
/*
  useEffect(() => {
    console.log('init')
    if (isStraw === 10) {
      setStraw(0)
    }
}, [isStraw])

  var bananas = []
  for (var i = 0; i < isNum; i++) {
      bananas.push(<BananaPic key = {i} />)
  }


  var strawberries = []
  for (var j = 0; j < isStraw; j++) {
    strawberries.push(<StrawberryPic key = {j}/>)
  }

  */

  const [isTest, setTest] = useState([])
  
  const AddBannana = (color) => {
    let test  = []
    const fruitys = {
      fruit: "banana",
      // color: "yellow"
      color: color
    }
    test = {...test, fruitys}
    setTest(isTest.concat([test]))

  }

  const AddStraw = () => {
    // test.push("strawberry")
    let test  = []
    const fruitys = {
      fruit: "strawberry",
      color: "red"
    }
    test = {...test, fruitys}
    setTest(isTest.concat([test]))
  }

  var fruits = []
  // for (var k = 0; k < isNum + isStraw; k++) {
  //   if (isPressed === 1) {
  //     fruits.push(<BananaPic key = {k} />)
  //     //test.push("banan")
  //   }
  //   else if (isPressed === 2) {
  //     fruits.push(<StrawberryPic key = {k} />)
  //     //test.push("straw")
  //   }
  // }

  console.log(fruits)
  console.log("test: ",isTest)

  /*var fruits = [
    {
      fruit: "banan",
      color: "yellow"
    },
    {
      fruit: "strawberry",
      color: "red"
    },
    {
      fruit: "watermelon",
      color: "green"
    }
  ]*/

  //console.log(fruits[0])
  console.log("isNum", isNum)
  //console.log(fruits)
  return (
    <div className="App">
      <main className="App-header">
        <Comp></Comp>
        <div style={{position: "relative", display: "flex", width: "94vw", flexWrap: "wrap"}}>
          {/* {fruits} */}
          {isTest.map((fruit, index) => {
            return (<PictureFruit key={index} fruit={fruit}></PictureFruit>)
          }) }
        </div>
        <ButtonForBanana isNum={isNum} setNum={setNum} isStraw={isStraw} AddBannana={AddBannana}></ButtonForBanana>
        <ButtonForStraw isStraw={isStraw} setStraw={setStraw} AddStraw={AddStraw}></ButtonForStraw>
        <Reset setNum={setNum} setStraw={setStraw} setTest={setTest}></Reset>
        {
          /*fruits.map((object, index) => {
            return <F object={object} key={index}></F>
          })  */ 
        }

      </main>
    </div>
  );
}
export default App




const Comp = () => {
  return (
    <>
      <h1 className="h1">Oh my! Is it a spin banana?!?!</h1>
    </>
  );
}


/*const F = ({object}) => {
  return(
  <div>
    <h1>{object.fruit}</h1>
    <h2>{object.color}</h2>
  </div>
  );
} */