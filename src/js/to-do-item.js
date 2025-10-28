import { LitElement, html, css } from 'lit';
export class ToDoItem extends LitElement {
    static properties = {
        texto: { type: String },
        completada: { type: Boolean }
    };

    constructor() {
        super();
        this.texto = 'Tarea de ejemplo'; 
        this.completada = false;
    }

    static styles = css`
        :host {
            width: 100%;
        }

        .card {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 15px;
            width: 100%;
            box-sizing: border-box;
            background-color: #fefefe; 
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            margin-bottom: 10px;
            transition: background-color 0.3s;
        }

        .card:hover {
            background-color: #f0f0f0;
        }

        input[type="checkbox"] {
            margin-right: 10px;
            transform: scale(1.2);
            cursor: pointer;
        }

        span {
            flex: 1;
            word-break: break-word;
            font-family: sans-serif;
        }

        .completada {
            text-decoration: line-through;
            color: gray;
        }
        
        .card:has(span.completada) {
            background-color: #dbdbdb;
        }

        button.delete {
            border: none;
            background-color: #ff4d4d;
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.9rem;
            transition: background-color 0.2s;
        }

        button.delete:hover {
            background-color: #e60000;
        }  
    `;

    render() {
        return html `
            <div class="card">
                <input type="checkbox" 
                    ?checked=${this.completada}
                    @change=${this._marcarCompletada}>
                <span class=${this.completada ? 'completada' : ''} >${this.texto}</span>
                <button class="delete"  @click=${this._eliminarTarea}>Eliminar</button>
            </div>
        `;
    }

    // Completed task 
    _marcarCompletada(e) {
        this.completada = e.target.checked;
        console.log('tarea completada');
        this.dispatchEvent(new CustomEvent('tarea-completada', {
            detail: { texto: this.texto, completada: this.completada },
            bubbles: true,     
            composed: true     
        }));
    }

    // Delete task 
    _eliminarTarea() {
        console.log('tarea eliminada');
        this.dispatchEvent(new CustomEvent('tarea-eliminada', {
            detail: { texto: this.texto },
            bubbles: true,
            composed: true
        }));
    }
}

customElements.define('todo-item', ToDoItem);