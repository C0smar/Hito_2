import React from 'react'

export const FormComponent = () => {

    const [nombre, setNombre] = useState('')
    const [mail, setMail] = useState('')
    const [error, setError] = useState(false)

    function onInputChange ({target}) {
        const {value, name} = target

        if (name === 'nombre'){
            setNombre(value)
        }else if (name === 'mail'){
            setMail(value)
        }
    }

    function onSubmitHandler (event) {

        event.preventDefault()

        if (!nombre || !mail ){
            setError(true)
            return
        }else {
            alert (`Usuario: ${nombre}, ${mail}`)
        }
        setNombre ('')
        setMail ('')
        setError (false)
    }

  return (
    <> 
        {error ? <h2> Por favor ingresa todos los datos</h2> : null}
        <form action='' onSubmit={onSubmitHandler}>
            <input 
                type="text" 
                placeholder='ingresa Nombre'
                onChange={onInputChange}
                value={nombre}
                name='nombre'
            />


            <input 
                type="email"
                placeholder='Ingresa tu email'
                onChange={onInputChange}
                value={mail}
                name='mail'
            />



            <button type='submit'>Enviar</button>
        </form>
    
    
    </>
  )
}
