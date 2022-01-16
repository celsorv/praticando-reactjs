
/*
    Parâmetro 'props' usando Atribuição via Desestruturação
            { children, onClick, className, style }
*/

const DangerButton = ({ children, onClick, className = '', style }) => (

    <button type="button" onClick={onClick} style={style}
                    className={`btn btn-danger ${className}`}>
        {children}
    </button>

);

export default DangerButton;