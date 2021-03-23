import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { api } from '../../services/api';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeIcon from '../../assets/close.svg'
import incomeIcon from '../../assets/income.svg'
import outcomeIcon from '../../assets/outcome.svg'

Modal.setAppElement('#root')

interface INewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

const NewTransactionModal: React.FC<INewTransactionModalProps> = ({ isOpen, onRequestClose }) => {
  const [ title, setTitle ] = useState('')
  const [ value, setValue ] = useState(0)
  const [ category, setCategory ] = useState('')
  const [transactionType, setTransactionType] = useState<'deposit' | 'withdraw'>('deposit')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    const data = {
      title,
      value,
      category,
      transactionType
    }

    api.post('/transactions', data)
  }

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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Titulo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
          min="0"
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
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
    )
  }

  export default NewTransactionModal;
