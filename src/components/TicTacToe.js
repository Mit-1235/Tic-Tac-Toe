import React, { useRef, useState } from "react";
import circle_icon from "../assets/circle.png";
import cross_icon from "../assets/cross.png";
import Square from "./Square";

// const TicTacToe = () => {
//   const [count, setCount] = useState(Array(9).fill(null));
//   const [turn, setTurn] = useState(true);
//   // const [winner, setWinner] = useState(null);

//   const checkWinner = () => {
//     const winnerLogic = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];
//     for (let logic of winnerLogic) {
//       const [a, b, c] = logic;
//       if (count[a] && count[a] === count[b] && count[a] === count[c]) {
//         return count[a];
//       }
//     }
//     return null;
//   };

//   const isWinner = checkWinner(count);
//   //   console.log(isWinner);

//   const toggle = (index) => {
//     // console.log("clicked", index);
//     if (count[index] !== null) {
//       return;
//     }
//     const storeData = [...count];
//     storeData[index] = turn ? (
//       <img className="w-7" src={cross_icon}></img>
//     ) : (
//       <img className="w-7" src={circle_icon}></img>
//     );
//     // storeData[index] = turn ? "x" : "o";
//     setCount(storeData);
//     setTurn(!turn);

//     // const isWinner = checkWinner(storeData);
//     // if (isWinner) {
//     //   setWinner(isWinner);
//     // }
//   };
  

//   const reset = () => {
//     setCount(Array(9).fill(null));
//     setTurn(true);
//     // setWinner(null);
//   };

//   return (
//     <div className="text-center font-semibold">
//       <h1 className="pt-12 text-white text-4xl flex justify-center align-middle">
//         Tic Tac Toe Game In <span className="pl-2 text-[#26ffcb]">React</span>
//       </h1>
//       {isWinner ? (
//         <div className="text-2xl text-[#26ffcb] my-4">
//           <p>Someone Wins</p>
//           <button
//             onClick={reset}
//             className="w-32 h-12 border-none outline-none cursor-pointer rounded-2xl bg-[#1f3540] text-lg text-[#26ffcb] mt-6 mb-12"
//           >
//             Reset
//           </button>
//         </div>
//       ) : (
//         <div className="board h-80 w-80 flex justify-center m-auto border-white border-2">
//           <div className="row-1 my-auto">
//             <Square onClick={() => toggle(0)} value={count[0]} />
//             <Square onClick={() => toggle(1)} value={count[1]} />
//             <Square onClick={() => toggle(2)} value={count[2]} />
//           </div>
//           <div className="row-2 my-auto">
//             <Square onClick={() => toggle(3)} value={count[3]} />
//             <Square onClick={() => toggle(4)} value={count[4]} />
//             <Square onClick={() => toggle(5)} value={count[5]} />
//           </div>
//           <div className="row-3 my-auto">
//             <Square onClick={() => toggle(6)} value={count[6]} />
//             <Square onClick={() => toggle(7)} value={count[7]} />
//             <Square onClick={() => toggle(8)} value={count[8]} />
//           </div>
//         </div>
//       )}
//       <button
//         onClick={reset}
//         className="w-32 h-12 border-none outline-none cursor-pointer rounded-2xl bg-[#1f3540] text-lg text-[#26ffcb] mt-6 mb-12"
//       >
//         Reset
//       </button>
//     </div>
//   );
// };


let data = ["","","","","","","","",""];

const TicTacToe = () => {

  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9];

  const toggle = (e, num) => {
    if(lock){
      return 0;
    }
    if(count%2 === 0){
      e.target.innerHTML = `<img class='w-7' src='${cross_icon}'>`;
      data[num] = "x";
      setCount(++count);
    }
    else{
      e.target.innerHTML = `<img class='w-7' src='${circle_icon}'>`;
      data[num] = "o";
      setCount(++count);
    }
    checkWin();
  }

  const checkWin = () => {
    if(data[0] === data[1] && data[1] === data[2] && data[2] !== "" ){
      won(data[2]);
    }
    else if(data[3] === data[4] && data[4] === data[5] && data[5] !== "" ){
      won(data[5]);
    }
    else if(data[6] === data[7] && data[7] === data[8] && data[8] !== "" ){
      won(data[8]);
    }
    else if(data[0] === data[3] && data[3] === data[6] && data[6] !== "" ){
      won(data[6]);
    }
    else if(data[1] === data[4] && data[4] === data[7] && data[7] !== "" ){
      won(data[7]);
    }
    else if(data[2] === data[5] && data[5] === data[8] && data[8] !== "" ){
      won(data[8]);
    }
    else if(data[0] === data[4] && data[4] === data[8] && data[8] !== "" ){
      won(data[8]);
    }
    else if(data[0] === data[1] && data[1] === data[2] && data[2] !== "" ){
      won(data[2]);
    }
    else if(data[2] === data[4] && data[4] === data[6] && data[6] !== "" ){
      won(data[6]);
    }
  }

  const won = (winner) => {
    setLock(true);
    if(winner === "x"){
      titleRef.current.innerHTML = `Congratulation : <img class='w-7 h-7 mt-[10px] mx-3' src='${cross_icon}'> Wins`;
    }
    else{
      titleRef.current.innerHTML = `Congratulation : <img class='w-7 h-7 mt-[10px] mx-3' src='${circle_icon}'> Wins`;
    }
  }

  const reset = () => {
    setLock(false);
    data = ["","","","","","","","",""];
    titleRef.current.innerHTML = "Tic Tac Toe in <span class='pl-2 text-[#26ffcb]'> React </span>"
    box_array.map((e) => {
      e.current.innerHTML = "";
    })
  }



  return(
    <div className="text-center font-semibold">
      <h1 ref={titleRef} className="pt-12 text-white text-4xl flex justify-center align-middle">Tic Tac Toe Game in <span className="pl-2 text-[#26ffcb]">React</span></h1>
      <div className="board h-80 w-80 flex justify-center m-auto">
        <div className="row1 my-auto">
          <div ref={box1} onClick={(e) => {toggle(e,0)}} className="boxes hover:scale-95 flex justify-center items-center h-24 w-24 bg-[#1f3540] border-4 border-[#0f1b21] cursor-pointer rounded-xl"></div>
          <div ref={box2} onClick={(e) => {toggle(e,1)}} className="boxes hover:scale-95 flex justify-center items-center h-24 w-24 bg-[#1f3540] border-4 border-[#0f1b21] cursor-pointer rounded-xl"></div>
          <div ref={box3} onClick={(e) => {toggle(e,2)}} className="boxes hover:scale-95 flex justify-center items-center h-24 w-24 bg-[#1f3540] border-4 border-[#0f1b21] cursor-pointer rounded-xl"></div>
        </div>
        <div className="row2 my-auto">
          <div ref={box4} onClick={(e) => {toggle(e,3)}} className="boxes hover:scale-95 flex justify-center items-center h-24 w-24 bg-[#1f3540] border-4 border-[#0f1b21] cursor-pointer rounded-xl"></div>
          <div ref={box5} onClick={(e) => {toggle(e,4)}} className="boxes hover:scale-95 flex justify-center items-center h-24 w-24 bg-[#1f3540] border-4 border-[#0f1b21] cursor-pointer rounded-xl"></div>
          <div ref={box6} onClick={(e) => {toggle(e,5)}} className="boxes hover:scale-95 flex justify-center items-center h-24 w-24 bg-[#1f3540] border-4 border-[#0f1b21] cursor-pointer rounded-xl"></div>
        </div>
        <div className="row3 my-auto">
          <div ref={box7} onClick={(e) => {toggle(e,6)}} className="boxes hover:scale-95 flex justify-center items-center h-24 w-24 bg-[#1f3540] border-4 border-[#0f1b21] cursor-pointer rounded-xl"></div>
          <div ref={box8} onClick={(e) => {toggle(e,7)}} className="boxes hover:scale-95 flex justify-center items-center h-24 w-24 bg-[#1f3540] border-4 border-[#0f1b21] cursor-pointer rounded-xl"></div>
          <div ref={box9} onClick={(e) => {toggle(e,8)}} className="boxes hover:scale-95 flex justify-center items-center h-24 w-24 bg-[#1f3540] border-4 border-[#0f1b21] cursor-pointer rounded-xl"></div>
        </div>
      </div>
      <button onClick={() => {reset()}} className="w-32 h-12 border-none outline-none cursor-pointer rounded-2xl bg-[#1f3540] text-lg text-[#26ffcb] mt-6 mb-12">Reset</button>
    </div>
  )
}

export default TicTacToe;
