import { Container, Content } from './styles';
import logo from '../../assets/logo.svg'

export const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="ES Money"/>

        <button>Nova transação</button>
      </Content>
    </Container>
  )
}
