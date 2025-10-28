import { LitElement, html, css } from 'lit';
import { ToDoItem } from '../js/to-do-item.js';
import { ToDoList } from '../js/to-do-list.js';
import * as logo from '../images/logo.png';

export class App extends LitElement {
    static styles = css `
        .to-do-list--container {

        }

        header {
            display: flex;
            align-items: center;
            margin-top: 24px;
            margin-bottom: 0;
            background-color: #2b8aef;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            border-radius: 8px;
        }

        .logo {
            width: 60px;
            height: 60px;
            padding: 8px;
        }

        h1 {
            font-family: Arial, sans-serif;
            color: #fff;
            font-size: 24px;
        }

        @media (min-width: 420px) {
            header { max-width: 420px; margin: 0 auto; margin-top: 24px;}
            h1 {font-size: 32px;}
            logo {margin-right: 8px;}
        }
    `;

    static properties = {
        
    };

    render() {
        return html `
            <div id="to-do-list--container">
                <header>
                    <img class="logo" src="${logo.default}" alt="To do list app logo">
                    <h1>To do List</h1>
                </header>
                <todo-list></todo-list>
            </div>
        `;
    }
}