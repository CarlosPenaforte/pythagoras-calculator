import * as S from "./styled";
import Form from "../Form";

export const Tabs = () => {
  return (
    //Estrutura que contém abas para selecionar a operação a ser feita
    //Cada tab, quando selecionada, leva a um painel que contém um form
    //Cada form apresenta um modo de operação definida pela tab selecionada
    //Esse modo é passado para dentro do form através de uma prop
    <S.WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
      id="tabs"
    >
      <S.WrapperTabList>
        <S.WrapperTab className="tab">Hypotenuse</S.WrapperTab>
        <S.WrapperTab className="tab">Catheto</S.WrapperTab>
      </S.WrapperTabList>
      <S.WrapperTabPanel className="tab-panel">
        <Form mode="hypo" />
      </S.WrapperTabPanel>
      <S.WrapperTabPanel className="tab-panel">
        <Form mode="cath" />
      </S.WrapperTabPanel>
    </S.WrapperTabs>
  );
};
