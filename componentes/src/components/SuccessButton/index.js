
/*
    Parâmetro 'props' usando Atribuição via Desestruturação
            { children, onClick, className, style }
*/

const SuccessButton = ({ children, onClick, className = '', style }) => (

    <button type="button" onClick={onClick} style={style}
                    className={`btn btn-success ${className}`}>
        {children}
    </button>

);

export default SuccessButton;