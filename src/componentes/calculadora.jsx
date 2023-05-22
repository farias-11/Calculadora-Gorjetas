import cifrao from "../images/cifrao.png"
import pessoa from "../images/pessoa.png"

import {
ContaContainer,
InputContainer,
Label,
MainContainer,
ButtonsCountainer,
PorcentagemContainer,
PessoasContainer,
ResultadosContainer,
GorjetaContainer,
TotalContainer,
GorjetaTotalContainer}
from "./Calculadora.styles"

export function Calculadora(){
    return(
        <MainContainer>
       <form action="">
        <ContaContainer>
            <Label htmlFor="bill">Conta</Label>
            <InputContainer>
            <img src={cifrao} alt="cifrao" />
            <input id="bill" type="number" placeholder="0"/>
            </InputContainer>
            </ContaContainer>

            <PorcentagemContainer>
            <Label htmlFor="custom-tip">Selecione a Porcentagem %</Label>
        <ButtonsCountainer>
            <input type="button" value="5%"/>
            <input type="button" value="10%"/>
            <input type="button" value="15%"/>
            <input type="button" value="25%"/>
            <input type="button" value="50%"/>
            <input type="text" id="custom-tip" placeholder="Outro"/>
            </ButtonsCountainer>
        </PorcentagemContainer>

        <PessoasContainer>
        <Label htmlFor="bill">Número de Pessoas</Label>
        <InputContainer>
            <img src={pessoa} alt="pessoa" />
            <input type="number" id="people" placeholder="0"/>
            </InputContainer>
            </PessoasContainer>
        </form>

        <ResultadosContainer>
            <GorjetaTotalContainer>
                <GorjetaContainer>
                <p>
                    Gorjeta <br/>
                    <span>/ pessoa</span>
                </p>
                <p>R$ 0.00</p>
                </GorjetaContainer>
                <TotalContainer>
                <p>
                    total <br/>
                    <span>/ pessoas</span>
                </p>
                <p>R$ 0.00</p>
                </TotalContainer>
        </GorjetaTotalContainer>
        <button>Limpar</button>
        </ResultadosContainer>
        </MainContainer>
    )
}