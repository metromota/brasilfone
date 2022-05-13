import {AiOutlineWarning} from 'react-icons/ai'

function ErrorAlert({message}){
    return (
        <div className="alert-error">
            <div className='alert-icon-box'>
                <AiOutlineWarning  className='alert-icon'/>
            </div>
            {message}
        </div>
    )
}

export default ErrorAlert