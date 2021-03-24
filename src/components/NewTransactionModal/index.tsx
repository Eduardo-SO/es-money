import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';

import closeIcon from '../../assets/close.svg'
import incomeIcon from '../../assets/income.svg'
import outcomeIcon from '../../assets/outcome.svg'

import { Container, TransactionTypeContainer, RadioBox } from './styles';

Modal.setAppElement('#root')

interface INewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

const NewTransactionModal: React.FC<INewTransactionModalProps> = ({ isOpen, onRequestClose }) => {
  const { createTransaction } = useTransactions()

  const [ title, setTitle ] = useState('')
  const [ amount, setAmount ] = useState(0)
  const [ category, setCategory ] = useState('')
  const [ type, setType ] = useState<'deposit' | 'withdraw'>('deposit')

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    await createTransaction({
      title,
      amount,
      category,
      type: type
    })

    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')

    onRequestClose()
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
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
          min="0"
        />

        <TransactionTypeContainer>
          <RadioBox
            onClick={() => setType('deposit')}
            type="button"
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeIcon} alt="Entrada"/>
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            onClick={() => setType('withdraw')}
            type="button"
            isActive={type === 'withdraw'}
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
