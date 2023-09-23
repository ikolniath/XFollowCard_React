import { useState } from "react";

export function TwitterFollowCard({
  formatUserName,
  //paso el nombre de la función formatUserName directamente
  userName,
  // name, ← Aquí iría la variable nombre en caso de que la quisieramos utilizar
  children,
  //isFollowing, ← Se usaba en antes de llamar al Hooke/useState para que cambia el estado del objeto que este modificando
}) {
  // usamos un Hooke de estado, donde la utilidad la llamamos de la libreria useState, que te permite tomar un valor y a partir de eso, devolver una cadena con el estado actual, y el cambio a realizar
  //const state = useState(false);
  //const isFollowing = state[0];
  //const setIsFollowing = state[1];
  //La tres lineas de arriba muestran como sería la manera larga ↑ , pero se puede hacer de una manera simple ↓ Donde se genera una cadena, el primer parametro es el valor, el segundo es como modificar o cambiar el valor y después el estado inicial ↓
  const [isFollowing, setIsFollowing] = useState(false);
  //
  const text = isFollowing ? "Siguiendo" : "Seguir";
  // genero una variable que Para cambiar el texto del boton. Además uso una manera corta de un if ↑
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following "
    : "tw-followCard-button";
  // En el segundo condicional le pasamos la clase para que cambie el color del button, cuando este siguiendo o no, agregando el is-following ↑

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  //Generamos una función para cuando se genere el onCLick en el boton, llame esta función y cambien el estado del botón

  return (
    // <article style={{ display: "flex", alignItems: "center", color: "#fff" }}> es una manera de agregarle estilos directamente, pasando los detalles como un obejto entre llaves.
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de usuario"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          {/* <strong>{name}</strong>  -> Esta sería la manera de usarlo en caso de querer enviar el nombre variable*/}
          <strong>{children}</strong>{" "}
          {/*En este caso se usa children, y con eso se puede pasar todo lo que este dentro del componente, que sería el padre */}
          <span className="tw-followcard-infousername">
            {formatUserName(userName)}
            {/* Esta sería la manera en caso de querer hacerlo enviando la función  */}
          </span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}
