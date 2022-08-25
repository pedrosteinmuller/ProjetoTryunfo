import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardImage: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardRare: 'normal',
    cardTrunfo: false,
    cards: [],
    filterName: '',
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    previewOn: false,
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      const {
        cardName,
        cardDescription,
        cardImage,
        cardRare,
        cardAttr1,
        cardAttr2,
        cardAttr3,
      } = this.state;

      const totalValue = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
      const ninetyNumber = 90;
      const totalNumber = 210;

      if (cardName && cardDescription && cardImage && cardRare
        && cardAttr1 >= 0 && cardAttr1 <= ninetyNumber
        && cardAttr2 >= 0 && cardAttr2 <= ninetyNumber
        && cardAttr3 >= 0 && cardAttr3 <= ninetyNumber
        && totalValue <= totalNumber) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  };

  onSaveButtonClick = (parameter) => {
    this.setState((prevState) => ({
      cards: [...prevState.cards, parameter],
      previewOn: true,
    }), () => {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: '',
        hasTrunfo: true,
        cardTrunfo: false,
      });
    });
  };

  deleteButton = (parametro) => {
    const { cards } = this.state;
    this.setState({
      cards: cards.filter((item) => item.cardName !== parametro.cardName),
      hasTrunfo: false,
    });
  };

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
      hasTrunfo,
      filterName,
      isSaveButtonDisabled,
      previewOn,
      cards,
    } = this.state;
    return (
      <main>
        <div>
          <h1 className="title">Tryunfo</h1>
          <Form
            onInputChange={ this.onInputChange }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            onInputChange={ this.onInputChange }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
          <input
            type="text"
            name="filterName"
            data-testid="name-filter"
            placeholder="Filtragem pelo nome"
            value={ filterName }
            onChange={ this.onInputChange }
          />
        </div>
        {previewOn === true
          && cards
            .filter((item) => item.cardName.includes(filterName))
            .map((e) => (
              <div key={ e.cardName }>
                <Card
                  cardName={ e.cardName }
                  cardDescription={ e.cardDescription }
                  cardImage={ e.cardImage }
                  cardAttr1={ e.cardAttr1 }
                  cardAttr2={ e.cardAttr2 }
                  cardAttr3={ e.cardAttr3 }
                  cardRare={ e.cardRare }
                  cardTrunfo={ e.cardTrunfo }
                />
                <button
                  type="button"
                  data-testid="delete-button"
                  onClick={ () => this.deleteButton(e) }
                >
                  Excluir
                </button>
              </div>
            ))}
      </main>
    );
  }
}

export default App;
