import reactLogo from "./assets/react.svg";
export default function MouseClicker() {
  const eventHandler = (event) => {
    console.log(event.currentTarget.name);
  };

  const eventHandlerTwo = (event) => {
    event.stopPropagation();
    console.log(event);
    console.log(event.target, event.currentTarget.img);
    console.log(event.currentTarget);
    console.log(event.currentTarget.children.img.src);
  };
  return (
    <div>
      <button name="one" onClick={eventHandler}>
        Click me!
      </button>
      <button name="two" onClick={eventHandlerTwo}>
        <img name="img" src={reactLogo} width={50} height={100} />
        Click me!
      </button>
    </div>
  );
}

/*Come è possibile evitare che l'attributo name del pulsante venga visualizzato sulla console quando si clicca sull'immagine?

  */
