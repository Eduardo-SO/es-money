import Modal from 'react-modal';

import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeIcon from '../../assets/close.svg'
import incomeIcon from '../../assets/income.svg'
import outcomeIcon from '../../assets/outcome.svg'
import { useState } from 'react';

Modal.setAppElement('#root')

interface INewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

const NewTransactionModal: React.FC<INewTransactionModalProps> = ({ isOpen, onRequestClose }) => {
  const [transactionType, setTransactionType] = useState('deposit')

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeIcon} alt="Fechar"/>
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Titulo"
        />

        <input
          type="number"
          placeholder="Valor"
        />

        <TransactionTypeContainer>
          <RadioBox
            onClick={() => setTransactionType('deposit')}
            type="button"
            isActive={transactionType === 'deposit'}
            activeColor="green"
          >
            <img src={incomeIcon} alt="Entrada"/>
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            onClick={() => setTransactionType('withdraw')}
            type="button"
            isActive={transactionType === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeIcon} alt="Saída"/>
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
    )
  }

  export default NewTransactionModal;
