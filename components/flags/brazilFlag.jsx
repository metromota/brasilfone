import Image from 'next/image'

function BrazilFlag (){
    return(
        <div className='flag-container'>
            <Image src='/flags/brazil.svg' alt='flag' width='25' height='15'/>
        </div>
    )
}

export default BrazilFlag