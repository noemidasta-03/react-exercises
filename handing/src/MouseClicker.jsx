export default function MouseClicker() {
  const eventHandler = (event) => {
    console.log(event.currentTarget.name);
  };

  const eventHandlerTwo = (event) => {
    event.stopPropagation();
    console.log(event.target, event.currentTarget.img);
  };
  return (
    <div>
      <button name="one" onClick={eventHandler}>
        Click me!
      </button>
      <button name="two" onClick={eventHandlerTwo}>
        <img width={50} height={100} />
        Click me!
      </button>
    </div>
  );
}

/*Come è possibile evitare che l'attributo name del pulsante venga visualizzato sulla console quando si clicca sull'immagine?

 si utilizza event.currentTarget */
