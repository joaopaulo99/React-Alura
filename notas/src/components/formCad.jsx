import React from 'react';
export class FormCad extends React.Component {
    render() {
        return(
            <form>
            <input type="text" placeholder="Título" />
            <textarea placeholder="Escreva sua nota..." />
            <button>Criar Nota</button>
            </form> 
        )
    }
}