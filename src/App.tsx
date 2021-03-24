import { useCallback, useState } from 'react';

import NewTransactionModal from './components/NewTransactionModal';
import { Dashboard } from './components/Dashboard';
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { TransactionProvider } from './hooks/useTransactions';

export function App() {
  const [ isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false)

  const handleOpenNewTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(true)
  }, [])

  const handleCloseNewTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(false)
  }, [])

  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionProvider>
  )
}
