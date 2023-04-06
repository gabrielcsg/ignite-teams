import { Container, Subtitle, Title } from "./styles";

type Props = {
  subtitle: string;
  title: string;
};

export function Highlight({ subtitle, title }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
