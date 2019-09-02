import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export const AddCard = ({ addCard }) => {
  const [cardName, setCardName] = useState('');
  
  const addCardAndReset = () => {
    addCard(cardName);
    setCardName('');
  }
  
  return (
    <Form>
      <Form.Group>
        <Form.Label>Card text</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter card Name"
          value={cardName}
          onChange={e => setCardName(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" disabled={!cardName.length} onClick={addCardAndReset}>
        Submit
      </Button>
    </Form>
  );
};
