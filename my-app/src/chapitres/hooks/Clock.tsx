import React, { Component, useEffect, useRef, useState } from 'react';

// class Clock extends Component {
//   state = {
//     now: new Date(),
//     name: 'Titi',
//   };
//   intervalId!: any;
//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       this.setState({
//         now: new Date(),
//       });
//     }, 1000);
//   }
//   componentWillUnmount() {
//     // setInterval / clearInterval
//     // addEventListener / removeEventListener
//     // new WebSocket / ws.close
//     // new Worker / ws.destroy
//     clearInterval(this.intervalId);
//   }
//   render() {
//     const { now } = this.state;
//     return <div className="Clock">
//       {now.toLocaleTimeString()}
//       <button onClick={() => clearInterval(this.intervalId)}>Stop</button>
//       </div>;
//   }
// }

// Dans une classe, le state est organisé sous forme d'objet
// {
//   now: new Date(),
//   name: 'Titi',
// }

// Dans une fonction qui utilise useState, le state est organisé sous forme d'un tableau
// [
//   new Date(),
//   'Titi',
// ]

// const arrayNow = useState(new Date());
// const now = arrayNow[0];
// const setNow = arrayNow[1];
// équivalent à
// const [now, setNow] = useState(new Date());



function Clock() {
  const [running, setRunning] = useState(true);
  const [now, setNow] = useState(new Date()); // l'élément 1 du tableau
  // const [name, setName] = useState('Titi'); // l'élément 2 du tableau

  const intervalIdRef = useRef<any>(1);

  function startClock() {
    setRunning(true);
    intervalIdRef.current = setInterval(() => {
      setNow(new Date());
    }, 1000);
  }

  function stopClock() {
    clearInterval(intervalIdRef.current);
    setRunning(false);
  }
  // useRef<HTMLDivElement>();
  // let intervalId!: any;
  // componentDidMount + componentDidUpdate (si pas de 2e args)
  // componentDidMount (si 2e args : [])
  useEffect(() => {
    console.log('startClock');
    startClock();
    return () => {
      console.log('stopClock');
      
      // componentWillUnmount + componentWillUpdate (si 2e arg rempli / si pas de 2e args)
      stopClock();
    };
  }, []);

  return (
    <div className="Clock">
      {now.toLocaleTimeString()}
      {!running ? (
        <button onClick={() => startClock()}>Start</button>
      ) : (
        <button onClick={() => stopClock()}>Stop</button>
      )}
    </div>
  );
}

// function useClock() {
//   const [now, setNow] = useState(new Date()); // l'élément 1 du tableau
//   // const [name, setName] = useState('Titi'); // l'élément 2 du tableau

//   const intervalIdRef = useRef<any>();
//   // useRef<HTMLDivElement>();
//   // let intervalId!: any;
//   // componentDidMount + componentDidUpdate (si pas de 2e args)
//   // componentDidMount (si 2e args : [])
//   useEffect(() => {
//     intervalIdRef.current = setInterval(() => {
//       setNow(new Date());
//     }, 1000);
//     return () => { // componentWillUnmount + componentWillUpdate (si 2e arg rempli / si pas de 2e args)
//       clearInterval(intervalIdRef.current);
//     };
//   }, []);

//   return [now, intervalIdRef] as const;
// }

// function Clock() {
//   const [now, intervalIdRef] = useClock();

//   return <div className="Clock">
//     {now.toLocaleTimeString()}
//     <button onClick={() => clearInterval(intervalIdRef.current)}>Stop</button>
//   </div>;
// }

export default Clock;
