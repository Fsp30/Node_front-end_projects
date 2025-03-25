import './main.css'
import Vite from '../../assets/vite.svg'
function Main(){
        return(
                <div className='main'>
                        <h1>Esse é o meu projeto React</h1>
                        <h3>A estilização não está essas coisas, mas como irei voltar a produzir mais front, será aprimorado com o tempo</h3>
                        <img src={Vite} width="200" height="100" />
                        <p>Adicionei a logo para ocupar a tela</p>
                </div>
        )
}

export default Main