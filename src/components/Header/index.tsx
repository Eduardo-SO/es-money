import { Container, Content } from './styles';
import logo from '../../assets/logo.svg'

interface IHeaderProps {
  onOpenNewTransactionModal: () => void
}

export const Header: React.FC<IHeaderProps> = ({ onOpenNewTransactionModal }) => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="ES Money"/>

        <button
          type="button"
          onClick={onOpenNewTransactionModal}
        >
          Nova transação
        </button>
      </Content>
    </Container>
  )
}
