import React from "react";
import CardNota from "./cardNota";

export class ListaDeNotas extends React.Component {

    render() {
        return (
        <ul>
            {Array.of("Trabalho", "Trabalho","Estudos").map((categoria, index) =>{
                    return (
                        <li key={index}>
                        <div>{categoria}</div>
                        <CardNota />
                    </li>
                    );
                }
            )}</ul>
            );
    }
   
}