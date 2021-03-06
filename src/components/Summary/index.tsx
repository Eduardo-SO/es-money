import { useTransactions } from '../../hooks/useTransactions';

import { Container } from './styles';
import incomeIcon from '../../assets/income.svg'
import outcomeIcon from '../../assets/outcome.svg'
import totalIcon from '../../assets/total.svg'

export const Summary: React.FC = () => {
  const { transactions } = useTransactions()

  // const totalDeposits = transactions.reduce((acc, transaction) => {
  //   if (transaction.type === 'deposit') {
  //     return acc + transaction.amount
  //   }

  //   return acc
  // }, 0)

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount
      acc.total += transaction.amount
    }  else {
      acc.withdraws += transaction.amount
      acc.total -= transaction.amount
    }

    return acc
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  return (
    <Container>
        <div>
          <header>
            <p>Entradas</p>
            <img src={incomeIcon} alt="Entradas"/>
          </header>
          <strong>
            {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
              }).format(summary.deposits)}
          </strong>
        </div>

        <div>
          <header>
            <p>Saídas</p>
            <img src={outcomeIcon} alt="Saídas"/>
          </header>
          <strong>
            - {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
              }).format(summary.withdraws)}
          </strong>
        </div>

        <div>
          <header>
            <p>Total</p>
            <img src={totalIcon} alt="Total"/>
          </header>
          <strong>
            {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
              }).format(summary.total)}
          </strong>
        </div>
    </Container>
  )
}
