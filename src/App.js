import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class App extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_vnSO33RtzpFhVyhOCwpYcebq">
        <div className="example">
          <h1>Stripe integration test</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default App;