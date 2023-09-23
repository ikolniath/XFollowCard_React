import "./App.css";
import "./TwitterFollowCard";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  function funcion(userName) {
    return `@${userName}`;
  }
  // puedo generar una función que genera un formato para el nombre, y pasarlo directamente. En este caso le paso que quiero que tenga el arroba.
  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={funcion}
        isFollowing
        userName="ikolniath"
      >
        Juan Matamoros
      </TwitterFollowCard>
      {/* En este caso la función se llama directamente y se indica dentro de la card */}
      <TwitterFollowCard
        formatUserName={funcion}
        isFollowing={false}
        userName="ElRascabuches_"
        // name="Conejo" Si el nombre se pasa desde el componente, como 'Name', se debería usar así.
      >
        Conejo
      </TwitterFollowCard>
      {/* // Si se coloca algo directamente dentro de las etiquetas del componente, se debe usar la opción de Children, lo bueno de eso es que va a envolver todo lo que este dentro de la etiqueta: h1, p , a, etc */}
      <TwitterFollowCard
        formatUserName={funcion}
        isFollowing
        userName="AcunaPipe"
      >
        Pipon
      </TwitterFollowCard>
    </section>
  );
}

// En el caso del booleano puedes pasar unicamente el argumento y lo toma como un true, sin las llaves
