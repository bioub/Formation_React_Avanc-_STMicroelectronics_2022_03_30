import React, { Component, useEffect, useRef, useState } from 'react';

// class Clock extends Component {
//   state = {
//     now: new Date(),
//     name: 'Titi',
//   };
//   componentDidMount() {
//     setInterval(() => {
//       this.setState({
//         now: new Date(),
//       });
//     }, 1000);
//   }
//   render() {
//     const { now } = this.state;
//     return <div className="Clock">{now.toLocaleTimeString()}</div>;
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
  const [now, setNow] = useState(new Date()); // l'élément 1 du tableau
  // const [name, setName] = useState('Titi'); // l'élément 2 du tableau

  // useRef<HTMLDivElement>();

  // componentDidMount + componentDidUpdate (si pas de 2e args)
  // componentDidMount (si 2e args : [])
  useEffect(() => {
    setInterval(() => {
      setNow(new Date());
    }, 1000);
  }, []);

  return <div className="Clock">{now.toLocaleTimeString()}</div>;
}

export default Clock;
