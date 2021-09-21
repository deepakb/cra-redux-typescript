import React, { useState } from 'react';
import { Card, InputGroup, FormControl, Button } from 'react-bootstrap';
import { BiWalletAlt } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store';
import { RootState } from '../store/reducers';

const Wallet: React.FC = (): JSX.Element => {
  const [amount, setAmount] = useState(0);
  const wallet = useSelector((state: RootState) => state.wallet);
  const dispatch = useDispatch();
  const { deposit, withdraw } = bindActionCreators(actionCreators, dispatch);

  const changeHanlder = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const amount = parseInt(value);
    setAmount(!isNaN(amount) ? amount : 0);
  };

  const depositHandler = (): void => {
    deposit(amount);
  };

  const withdrawHandler = (): void => {
    withdraw(amount);
  };

  return (
    <>
      <Card className='justify-content-center'>
        <Card.Body>
          <Card className='text-center'>
            <Card.Header>
              Total Balance <BiWalletAlt />: {wallet}
            </Card.Header>
            <Card.Body>
              <Card.Title>Enter amount to deposit or withdraw money</Card.Title>
              <div className='text-center center-input input-area'>
                <InputGroup>
                  <FormControl
                    aria-label='Dollar amount (with dot and two decimal places)'
                    onChange={changeHanlder}
                    value={amount}
                  />
                  <InputGroup.Text>$</InputGroup.Text>
                  <InputGroup.Text>0.00</InputGroup.Text>
                </InputGroup>
              </div>
              <Button
                variant='primary'
                className='btn-primary-spacing'
                onClick={depositHandler}
              >
                deposit
              </Button>
              <Button variant='primary' onClick={withdrawHandler}>
                withdraw
              </Button>
            </Card.Body>
            <Card.Footer className='text-muted'>
              &copy;mywallet.dev 2021
            </Card.Footer>
          </Card>
        </Card.Body>
      </Card>
    </>
  );
};

export default Wallet;
