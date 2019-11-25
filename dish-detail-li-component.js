import { html, LitElement } from 'lit-element';
import style from './dish-detail-li-component-styles.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

class DishDetailLiComponent extends LitElement {
  static get properties() {
    return {
      hello: { type: String },
      image: { type: String },
      name: { type: String },
      energyValue: { type: Number },
      rate: { type: Number },
      price: { type: Number },
      description: { type: String },
      newDish: { type: Object },
      listNewDish: {type: Array},
      dishes:{
        type: Array,
        value:[
          {
            id: 1,
            image: 'https://www.cwp.com.mx/wp-content/uploads/2018/10/espagueti-de-calabacin-y-bolonesa-de-hongos-y-lentejas-768x402.jpg',
            name: 'Espaguetti',
            energyValue: 158,
            rate: 3,
            price: 250,
            description: 'Un delicioso espagueti hecho de maíz importado bañado en una salsa de tomate especiada'
          },
          {
            id: 2,
            image: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2019/06/Tlayuda-chapulines.jpg',
            name: 'Tlayuda',
            energyValue: 297,
            rate: 5,
            price: 75,
            description: 'Tasajo, sobre tortilla de maiz criollo, acompañada de vegetales frescos y chapulines.'
          },
        ]
      }
    };
  };  
      static get styles() {
        return style;
      }

  constructor() {
    super();
    this.hello = 'Hello';
  }

  render() {
    return html`
        <p>Some static DOM</p>
        <h2>${this.hello} dish-detail-li-component</h2>
        <template is="dom-repeat" items="[[dishes]]" as="dish">
        <paper-card class="crop" image="[[dish.image]]">
          <div class="card-content">
            <div class="card-header">[[name]]
              <div class="calories-right grey">
                <iron-icon slot="prefix" icon="favorite"></iron-icon>
                <span>[[energyValue]] cal</span>
              </div>
            </div>
            <rating-component rate="[[rate]]"></rating-component>
            <p>$ [[price]] mxn</p>
            <p class="grey">[[description]]</p>
          </div>
          <div class="card-actions grey">
            <div class="justified">
              <paper-button raised class="cyan" id="modify" on-click="editDish">Modificar</paper-button>
              <paper-button raised class="red" id="remove" on-click="removeDish">Eliminar</paper-button>
            </div>
          </div>
        </paper-card>
      `;
    }
}

window.customElements.define("dish-detail-li-component", DishDetailLiComponent);
