import Image from 'next/image'

function BrazilFlag (){
    return(
        <div className='flex items-center justify-center w-[25px] h-auto'>
            <Image src='/flags/brazil.svg' alt='flag' width='25' height='15'/>
        </div>
    )
}

export default BrazilFlag