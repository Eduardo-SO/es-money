import { useEffect } from 'react';
import { Container } from './styles';

export const TransactionsTable: React.FC = () => {
  useEffect(() => {
    fetch('http://localhost:3001/api/transactions')
    .then(response => response.json())
    .then(data => console.log(data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>15/03/21</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.100,00</td>
            <td>Casa</td>
            <td>10/03/21</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
