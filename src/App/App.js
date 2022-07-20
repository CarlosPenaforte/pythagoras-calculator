import { Header } from "../Components/Header";
import { Tabs } from "../Components/Tabs";
import * as S from "./styled";

function App() {
  return (
    <S.Container>
      <Header />
      <S.WrapperApp>
        <Tabs />
      </S.WrapperApp>
    </S.Container>
  );
}

export default App;
