import * as S from "./styled";
import Form from "../Form";

export const Tabs = () => {

  return (
    <>
      <S.WrapperTabs
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected"
      >
        <S.WrapperTabList>
          <S.WrapperTab>Hypotenuse</S.WrapperTab>
          <S.WrapperTab>Catheto</S.WrapperTab>
        </S.WrapperTabList>
        <S.WrapperTabPanel>
          <Form mode="hypo"/>
        </S.WrapperTabPanel>
        <S.WrapperTabPanel>
          <Form mode="cath"/>
        </S.WrapperTabPanel>
      </S.WrapperTabs>
    </>
  );
};
