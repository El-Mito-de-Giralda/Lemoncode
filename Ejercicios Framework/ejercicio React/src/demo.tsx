import React from "react";

export const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      {visible && <MyChildComponent />}
      <button onClick={() => setVisible(!visible)}>
        Toggle Child component visibility
      </button>
    </>
  );
};

const useSafeState= function<T>(initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>]
{
  const mountedRef= React.useRef(false);

  const [state, setState]= React.useState<T>(initialValue);

  React.useEffect(()=> {
    mountedRef.current= true;
    return ()=> {mountedRef.current=false};
  }, []);

  const isMounted = ()=> mountedRef.current;

  const setSafeState= function (
    data: T
  ): React.Dispatch<React.SetStateAction<T>> | void {
    return isMounted() ? setState(data): null;
  };
  console.log(state, setSafeState);

  return [state, setSafeState];
};

export const MyChildComponent = () => {
  const [filter, setFilter] = React.useState("");
  const [userCollection, setUserCollection] = useSafeState([]);


  React.useEffect(()=> {
    setTimeout(()=> {
      fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
      .then(response=> response.json())
      .then(json => setUserCollection(json));
    }, 2500)
  }, [filter]);

  return (
    <div>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ul>
        {userCollection.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

interface MiEstado {
  hasError: boolean;
}

interface MiProps {
  children: React.ReactNode;
}

export class ErrorBoundary extends React.Component<MiProps, MiEstado> {
  constructor(props: MiProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para que el siguiente renderizado muestre la interfaz de repuesto
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // También puedes registrar el error en un servicio de reporte de errores
    console.error(error, errorInfo);
  }

  render() {
    
    if (this.state.hasError) {
      // Puedes renderizar cualquier interfaz de repuesto
      return <h1>Algo salió mal.</h1>;
    }
  
    return this.props.children; 
  }
}


