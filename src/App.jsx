import {useState} from "react";

export default function App() {
    const [lampada, setLampada] = useState(false)
    const trocarLampada = () => {
        setLampada(!lampada);
    };

    return(
        <main>
        <h1>"Liberte a magia da programação com a lâmpada de Aladim."</h1>
        <img src={lampada ? "https://raw.githubusercontent.com/mariaccarolina/TurmaFDV/refs/heads/main/imagens/lampada-com-mago.png" : "https://raw.githubusercontent.com/mariaccarolina/TurmaFDV/refs/heads/main/imagens/lampada.png"} alt="Lâmpada" 
        onClick={{trocarLampada}}
        />
        </main>
    )
}