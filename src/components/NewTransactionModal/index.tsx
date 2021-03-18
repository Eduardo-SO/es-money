import Modal from 'react-modal';

// import { Container } from './styles';

Modal.setAppElement('#root')

interface INewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

const NewTransactionModal: React.FC<INewTransactionModalProps> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example modal"
    >
      <h2>Cadastrar transação</h2>
    </Modal>
  )
}

export default NewTransactionModal;
