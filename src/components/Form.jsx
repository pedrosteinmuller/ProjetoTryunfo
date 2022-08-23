import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          Nome:
          <input
            id="name-input"
            type="text"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <textarea
            id="description-input"
            type="text"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1-input">
          Atributo 1
          <input
            id="attr1-input"
            type="number"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr2-input">
          Atributo 2
          <input
            id="attr2-input"
            type="number"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr3-input">
          Atributo 3
          <input
            id="attr3-input"
            type="number"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image-input">
          Imagem:
          <input
            id="image-input"
            type="text"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rare-input">
          Raridade:
          <select
            id="rare-input"
            data-testid="rare-input"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          <input
            type="checkbox"
            data-testid="trunfo-input"
          />
        </label>
        <button
          id="save-button"
          type="submit"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
