import { useState } from "react";
import * as S from "./styled";

function Form(props) {
  const { mode } = props;

  const [label1, label2] =
    mode === "hypo" ? ["Catheto 1", "Catheto 2"] : ["Hypotenuse", "Catheto 1"];

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");

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
    <S.Form onSubmit={submit}>
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
        <p>{!!result ? `The ${(mode === "hypo")? "Hypotenuse" : "Catheto 2"} is equal to:` : ""}</p>
        <h2>{result}</h2>
      </S.WrapperResult>
    </S.Form>
  );
}

export default Form;
