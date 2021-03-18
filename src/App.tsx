import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal'
import { useCallback, useState } from 'react';

Modal.setAppElement('#root')

export function App() {
  const [ isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false)

  const handleOpenNewTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(true)
  }, [])

  const handleCloseNewTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(false)
  }, [])

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />
        <Modal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
          contentLabel="Example modal"
        >
          <h2>Cadastrar transação</h2>
        </Modal>

      <GlobalStyle />
    </>
  )
}
