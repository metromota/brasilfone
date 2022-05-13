import Image from 'next/image'

function BrazilFlag (){
    return(
        <div className='flex items-center justify-center'>
            <Image src='/flags/brazil.svg' alt='flag' width='45' height='42'/>
        </div>
    )
}

export default BrazilFlag