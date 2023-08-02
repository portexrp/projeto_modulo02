import './Style.css'
import Form from 'react-bootstrap/Form';
import { Row, Col, Button } from 'react-bootstrap';
import { BtnGeneric } from '../../utils/BtnGeneric/Btn.Generic';
import { InputGeneric } from '../../utils/InputGenericFull';
import { useState } from 'react';
import { BuscaCep } from '../BuscaCep/Index';
import loginGif from '../../assets/Spinner-1s-200px.gif'
import { useNavigate } from 'react-router-dom';


export const CadPaciente = () => {

    const navigate = useNavigate();
    const [enderecoCep, setEnderecoCep] = useState({});

    const handleEnderecoCep = (endereco) => {
        setEnderecoCep(endereco);
    };

    const [nome, setNome] = useState('');
    const handleNome = (novoValor) => {
        setNome(novoValor);
    };

    const [dtNasc, setdtNasc] = useState('');
    const handledtNasc = (novoValor) => {
        setdtNasc(novoValor);
    };

    const [cpf, setCpf] = useState('');
    const handledtCpf = (novoValor) => {
        setCpf(novoValor);
    };

    const [rg, setRg] = useState('');
    const handleRg = (novoValor) => {
        setRg(novoValor);
    };

    const [emissor, setEmissor] = useState('');
    const handleEmissor = (novoValor) => {
        setEmissor(novoValor);
    };

    const [fone, setFone] = useState('');
    const handleFone = (novoValor) => {
        setFone(novoValor);
    };

    const [email, setEmail] = useState('');
    const handleEmail = (novoValor) => {
        setEmail(novoValor);
    };

    const [naturalidade, setNaturalidade] = useState('');
    const handleNaturalidade = (novoValor) => {
        setNaturalidade(novoValor);
    };

    const [contatoEmerg, setcontatoEmerg] = useState('');
    const handlecontatoEmerg = (novoValor) => {
        setcontatoEmerg(novoValor);
    };

    const [convenio, setConvenio] = useState('');
    const handleConvenio = (novoValor) => {
        setConvenio(novoValor);
    };

    const [numConvenio, setNumConvenio] = useState('');
    const handleNumConvenio = (novoValor) => {
        setNumConvenio(novoValor);
    };

    const [alergias, setAlergias] = useState('');
    const handleAlergias = (novoValor) => {
        setAlergias(novoValor);
    };

    const [cuidadosEspec, setcuidadosEspec] = useState('');
    const handleCuidadosEspec = (novoValor) => {
        setcuidadosEspec(novoValor);
    };

    const [validadeConv, setValidadeConv] = useState('');
    const handleValidadeConvc = (novoValor) => {
        setValidadeConv(novoValor);
    };

    const [cep, setCep] = useState('');
    const handleCep = (novoValor) => {
        setCep(novoValor);

    };


    const [logradouro, setLogradouro] = useState('');
    const handleLogradouro = (novoValor) => {
        setLogradouro(novoValor);
    };

    const [numero, setNumero] = useState('');
    const handleNumero = (novoValor) => {
        setNumero(novoValor);
    };

    const [complemento, setComplemento] = useState('');
    const handleComplemento = (novoValor) => {
        setComplemento(novoValor);
    };

    const [bairro, setBairro] = useState('');
    const handleBairro = (novoValor) => {
        setBairro(novoValor);
    };

    const [cidade, setCidade] = useState('');
    const handleCidade = (novoValor) => {
        setCidade(novoValor);
    };

    const [estado, setEstado] = useState('');
    const handleEstado = (novoValor) => {
        setEstado(novoValor);
    };

    const [pontoRef, setPontoRef] = useState('');
    const handlePontoRef = (novoValor) => {
        setPontoRef(novoValor);
    };

    const data = {
        nome: nome,
        dtNasc: dtNasc,
        cpf: cpf,
        rg: rg,
        emissor: emissor,
        fone: fone,
        email: email,
        naturalidade: naturalidade,
        contatoEmerg: contatoEmerg,
        convenio: convenio,
        numConvenio: numConvenio,
        alergias: alergias,
        cuidadosEspec: cuidadosEspec,
        validadeConv: validadeConv,
        cep: cep,
        logradouro: enderecoCep.logradouro,
        numero: numero,
        complemento: complemento,
        bairro: enderecoCep.bairro,
        cidade: enderecoCep.cidade,
        estado: enderecoCep.estado,
        pontoRef: pontoRef,
    }

    const [showAnimation, setShowAnimation] = useState(false);


    const handleCadPAciente = (e) => {
        e.preventDefault()
        
        localStorage.setItem('cadPaciente', JSON.stringify(data))
        setShowAnimation(true);
        setTimeout(() => {
            navigate('/');
          }, 2000);
    }


    return (

        <Form className='formStyle'>
            {showAnimation ? (
                <div style={{ textAlign: 'center', backgroundColor: 'white' }}>
                    <img src={loginGif} style={{ backgroundColor: 'white' }} alt="Efetuando cadastro..." />
                    <p style={{ backgroundColor: 'white' }}>Efetuando cadastro</p>
                </div>
            ):(
                <>
            <InputGeneric style='nome' type="text" name="nome" value={nome} placeholder="Digite seu Nome ..." onChange={handleNome} label="Nome" required={true} />
            <InputGeneric style='all' type="date" name="dtNasc" value={dtNasc} placeholder="Data de Nasc." onChange={handledtNasc} label="Dt. Nasc." />
            <InputGeneric style='all' type="number" name="cpf" value={cpf} placeholder="Digite seu CPF." onChange={handledtCpf} label="CPF" />
            <InputGeneric style='all' type="text" name="rg" value={rg} placeholder="Digite seu RG." onChange={handleRg} label="RG" />
            <InputGeneric style='all' type="text" name="emissor" value={emissor} placeholder="Emissor" onChange={handleEmissor} label="Emissor" />
            <InputGeneric style='all' type="text" name="fone" value={fone} placeholder="Digite seu Fone." onChange={handleFone} label="Fone" />
            <InputGeneric style='all' type="email" name="email" value={email} placeholder="Digite seu Email." onChange={handleEmail} label="Email" />
            <InputGeneric style='all' type="text" name="naturalidade" value={naturalidade} placeholder="Naturalidade." onChange={handleNaturalidade} label="Naturalidade" />
            <InputGeneric style='all' type="number" name="contatoEmerg" value={contatoEmerg} placeholder="Contato de emergencia." onChange={handlecontatoEmerg} label="Contato de emergencia" />
            <InputGeneric style='all' type="text" name="convenio" value={convenio} placeholder="Convênio" onChange={handleConvenio} label="Convênio" />
            <InputGeneric style='all' type="text" name="numConvenio" value={numConvenio} placeholder="Número do Convênio" onChange={handleNumConvenio} label="Número do Convênio" />
            <InputGeneric style='lista' type="text" name="alergias" value={alergias} placeholder="Lista de Alergias" onChange={handleAlergias} label="Lista de Alergias" />
            <InputGeneric style='lista' type="text" name="cuidadosEspec" value={cuidadosEspec} placeholder="Cuidados Específicos" onChange={handleCuidadosEspec} label="Cuidados Específicos" />
            <InputGeneric style='all' type="data" name="validadeConv" value={validadeConv} placeholder="Validade do Convênio" onChange={handleValidadeConvc} label="Validade do Convênio" />
            <InputGeneric style='all' type="text" name="cep" value={cep} placeholder="CEP" onChange={handleCep} label="CEP" />
            <BuscaCep cep={cep} handleEnderecoCep={handleEnderecoCep} />
            
            <InputGeneric style='lista' type="text" name="logradouro" value={enderecoCep.logradouro} placeholder="Logradouro" onChange={handleLogradouro} label="Logradouro" />
            <InputGeneric style='all' type="text" name="numero" value={numero} placeholder="Número" onChange={handleNumero} label="Número" />
            <InputGeneric style='all' type="text" name="complemento" value={complemento} placeholder="Complemento" onChange={handleComplemento} label="Complemento" />
            <InputGeneric style='all' type="text" name="bairro" value={enderecoCep.bairro} placeholder="Bairro" onChange={handleBairro} label="Bairro" />
            <InputGeneric style='all' type="text" name="cidade" value={enderecoCep.cidade} placeholder="Cidade" onChange={handleCidade} label="Cidade" />
            <InputGeneric style='all' type="text" name="estado" value={enderecoCep.estado} placeholder="Estado" onChange={handleEstado} label="Estado" />
            <InputGeneric style='all' type="text" name="pontoRef" value={pontoRef} placeholder="Ponto de referência" onChange={handlePontoRef} label="Ponto de referência" />
            <Row>
                <Col>
                    <div className='formBtn' style={{ backgroundColor: "white", borderRadius: '16px', paddingTop: '20px', marginTop: '-11px' }}>
                        <Button type='submit' className='baseBtn cadastrar' onClick={handleCadPAciente}>Cadastrar</Button>

                        <BtnGeneric type="submit" nomeBtn="Editar" funcao="editar" />
                        <BtnGeneric type="submit" nomeBtn="Excluir" funcao="excluir" />
                    </div >
                </Col>

            </Row>
            </>
        )}
        </Form>
    )
}