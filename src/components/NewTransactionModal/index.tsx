import Modal from 'react-modal';

import { Container } from './styles';

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
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Titulo"
        />

        <input
          type="number"
          placeholder="Valor"
        />

        <input
          placeholder="Categoria"
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
    )
  }

  export default NewTransactionModal;
