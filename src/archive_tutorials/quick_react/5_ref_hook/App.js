import React from "react";
import "./styles.css";

export default function App() {
  const text = React.useRef();

  const onFocus = () => { text.current.style.background = '#ddf'; }
  const onBlur = () => { text.current.style.background = '#fdd'; }

  React.useEffect(() => {
    //console.log(text.current);
    const myText = text.current;
    myText.addEventListener('focus', onFocus);
    myText.addEventListener('blur', onBlur);

    return () => {
      myText.removeEventListener('focus', onFocus);
      myText.removeEventListener('blur', onBlur);
    };
  }, []);

  return (
    <div className="App">
      <h1>Part 5: The Ref Hook</h1>
      <input type="text" ref={text}/>
    </div>
  );
}
