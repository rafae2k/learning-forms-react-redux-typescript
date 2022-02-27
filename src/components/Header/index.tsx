import { Title } from './styles';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const Header: React.FC<HeadingProps> = ({ children, className }) => {
  return <Title className={className}>{children}</Title>;
};

export default Header;
