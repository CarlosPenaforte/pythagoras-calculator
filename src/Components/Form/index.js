import { useEffect, useState } from "react";
import * as S from "./styled";

function Form(props) {
  //Recebe a string que indica a tab selecionada
  const { mode } = props;

  //Define as labels de cada input de acordo com a tab selecionada
  const [label1, label2] =
    mode === "hypo" ? ["Catheto 1", "Catheto 2"] : ["Hypotenuse", "Catheto 1"];

  //Estado do valor do primeiro input
  const [input1, setInput1] = useState("");
  //Estado do valor do segundo input
  const [input2, setInput2] = useState("");
  //Estado do resultado dos cáculos
  const [result, setResult] = useState("");
  //Estado da string que nomeia o segmento a ser calculado
  const [calculating, setCalculating] = useState("");

  //Escuta a mudança da aba selecionada e muda o nome do segmento a ser calculado 
  useEffect(() => {
    setCalculating((mode === "hypo")? "Hypotenuse" : "Catheto 2")
  },[mode])

  //Retira a ação default de recarregar a pagina e calcula o resultado caso os inputs estejam preenchidos
  const submit = (e) => {
    e.preventDefault();
    if (!input1 || !input2) return;

    setResult(
      mode === "hypo"
        ? (input1 ** 2 + input2 ** 2) ** (1.0 / 2)
        : (input1 ** 2 - input2 ** 2) ** (1.0 / 2)
    );
  };
  
  return (
    // Form para apresentação das entradas e resultados
    // Título reativo à aba
    // Inputs que setam o valor do estado de acordo com a mudança de seu valor
    // Botão de submit
    // Wrapper de apresentação dos resultados
    <S.Form onSubmit={submit}>
      <h1>Calculating {calculating}</h1>
      <S.WrapperInput>
        <S.Input
          type="text"
          placeholder={`Type the ${label1}`}
          onChange={(event) => setInput1(parseFloat(event.target.value))}
        />
      </S.WrapperInput>
      <S.WrapperInput>
        <S.Input
          type="text"
          placeholder={`Type the ${label2}`}
          onChange={(event) => setInput2(parseFloat(event.target.value))}
        />
      </S.WrapperInput>
      <S.Button type="submit">
        <h3>Calculate</h3>
      </S.Button>
      <S.WrapperResult>
        <p>{!!result ? `The ${calculating} is equal to:` : ""}</p>
        <h2>{!(Math.round(result*100)/100) ? "" : Math.round(result*100)/100 }</h2>
      </S.WrapperResult>
    </S.Form>
  );
}

export default Form;
