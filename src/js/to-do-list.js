import { LitElement, html, css } from 'lit';
import './to-do-item.js';

export class ToDoList extends LitElement {
    static properties = {
        tareas: { type: Array },
        nuevaTarea: { type: String }
    };

    constructor() {
        super();
        this.tareas = [];
        this.nuevaTarea = '';
    }

    static styles = css `
        :host {
            display: block;
            width: 100%;
            box-sizing: border-box;
        }

        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            padding-block: 24px;
        }

        form {
            display: flex;
            gap: 8px;
            width: 100%;
            align-items: center;
            padding-bottom: 24px;
            border-bottom: 1px solid #ccc;
            margin-bottom: 8px;
        }

        input[type="text"] {
            padding: 8px 10px;
            border-radius: 6px;
            border: 1px solid #ccc;
            width: 100%;
            font-size: 0.95rem;
        }

        button.add {
            padding: 8px 12px;
            border: none;
            background-color: #2b8aef;
            color: white;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
        }

        button.add:disabled {
            opacity: 0.6;
            cursor: default;
        }

        .list {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            width: 100%;
        }

        @media (min-width: 420px) {
            .container { max-width: 420px; margin: 0 auto; }
        }
    `;

    render() {
        return html `
            <div class="container">
                <form @submit=${this._onSubmit}>
                    <input type="text" placeholder="Nueva tarea..." .value=${this.nuevaTarea} @input=${this._onInput}>
                    <button class="add" type="submit">Añadir</button>
                </form>
                ${this.tareas.map(t => html`
                    <todo-item
                        .texto=${t.texto}
                        .completada=${t.completada}
                        data-id=${t.id}
                        @tarea-completada=${this._onTareaCompletada}
                        @tarea-eliminada=${this._onTareaEliminada}>
                    </todo-item>
                `)}
            </div>

        `;
    }

    _onInput(e) {
        this.nuevaTarea = e.target.value;
    }

    _onSubmit(e) {
        e.preventDefault();

        const texto = this.nuevaTarea.trim();
        if (!texto) return;

        const nueva = {
            id: Date.now(),
            texto,
            completada: false
        }

        this.tareas = [...this.tareas, nueva];
        this.nuevaTarea = '';
    }

    _onTareaCompletada(e) {
        const id = Number(e.target.getAttribute('data-id'));
        const nuevoEstado = e.detail.completada;

        this.tareas = this.tareas.map(t =>
            t.id === id ? { ...t, completada: nuevoEstado } : t
        );
    }

    _onTareaEliminada(e) {
        const id = Number(e.target.getAttribute('data-id'));

        this.tareas = this.tareas.filter(t => t.id !== id);
    }
}

customElements.define('todo-list', ToDoList)