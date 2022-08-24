import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onSaveButtonClick,
      onInputChange,
      hasTrunfo,
    } = this.props;
    return (
      <div className="container">
        <form className="forms">
          <label htmlFor="name-input">
            <p>Nome:</p>
            <input
              id="name-input"
              name="cardName"
              type="text"
              value={ cardName }
              onChange={ onInputChange }
              data-testid="name-input"
            />
          </label>
          <label htmlFor="description-input">
            <p>Descrição da Carta</p>
            <textarea
              id="description-input"
              name="cardDescription"
              type="text"
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
            />
          </label>
          <label htmlFor="attr1-input">
            <p>Atributo 1</p>
            <input
              id="attr1-input"
              name="cardAttr1"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
              data-testid="attr1-input"
              min="0"
              max="90"
            />
          </label>
          <label htmlFor="attr2-input">
            <p>Atributo 2</p>
            <input
              id="attr2-input"
              name="cardAttr2"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
              data-testid="attr2-input"
              min="0"
              max="90"
            />
          </label>
          <label htmlFor="attr3-input">
            <p>Atributo 3</p>
            <input
              id="attr3-input"
              name="cardAttr3"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
              data-testid="attr3-input"
              min="0"
              max="90"
            />
          </label>
          <label htmlFor="image-input">
            <p>Imagem</p>
            <input
              id="image-input"
              name="cardImage"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
              data-testid="image-input"
            />
          </label>
          <label htmlFor="rare-input">
            <p>Raridade:</p>
            <select
              id="rare-input"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
              data-testid="rare-input"
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-input">
            {hasTrunfo === false && (
              <input
                type="checkbox"
                name="cardTrunfo"
                id="cardTrunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
                data-testid="trunfo-input"
              />
            )}
            {hasTrunfo && <p>Você já tem um Super Trunfo em seu baralho</p>}
          </label>
          <button
            id="save-button"
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ () => onSaveButtonClick({
              cardName,
              cardDescription,
              cardImage,
              cardAttr1,
              cardAttr2,
              cardAttr3,
              cardRare,
              cardTrunfo,
            }) }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}
// referência para usar o minimo e maximo no requisito 5
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
  hasTrunfo: PropTypes.bool,
}.isRequired;

export default Form;
