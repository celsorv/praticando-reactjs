import { useState } from 'react';
import SuccessButton from '../SuccessButton';
import DangerButton from '../DangerButton';

const Card = () => {

    const [valor, setValor] = useState(0);

    const incrementar = () => setValor(valor + 1);
    const decrementar = () => setValor(valor - 1);

    return (
        <div className="card">
            <div className="card-header">
                Contagem
           </div>
            <div className="card-body">

                <h5 className="card-title">Valor atual</h5>
                <p className="card-text">{valor}</p>

                <SuccessButton onClick={incrementar} style={{ marginRight: '8px' }}>
                    Incrementar
                </SuccessButton>

                <DangerButton onClick={decrementar}>Decrementar</DangerButton>

            </div>
        </div >
    );

}

export default Card;
