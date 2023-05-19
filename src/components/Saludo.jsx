import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';




const Saludo = ({ saludo }) => {

    const [msj, setMsj] = useState('(from changed state)');
    const [showMsj, setShowMsj] = useState(false);

    const handleButtonClick = () => {
        setShowMsj(true);
    };


    return (
        <section className='text-center mt-3'>

            <h1 className="text-light">
                {saludo} {showMsj && <span>{msj}</span>}
            </h1>
            <Button variant="primary" onClick={handleButtonClick} className="mx-2 mt-3">
                Click me
            </Button>

        </section>
    );
};

export default Saludo;