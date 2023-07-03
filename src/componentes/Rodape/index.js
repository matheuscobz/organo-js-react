import './Rodape.css'

const Rodape = () => {
    return  (
        <footer className='rodape'>
            <section>
                <div className='rodape-container'>
                    <ul className='rodape-lista'>
                        <li>
                            <a href="#">
                                <img src="../imagens/fb.png" alt="Facebook logo"/>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <img src="../imagens/tw.png" alt="Twitter logo"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/matheus_eg/" target="_blank">
                                <img src="imagens/ig.png" alt='Instagram logo'/>
                            </a>
                        </li>
                    </ul>
                    <div>
                        <img className='imagem-logo' src='../imagens/logo.png'></img>
                    </div>
                    <span className='lista-texto'>
                        <p>
                            Desenvolvido por Matheus Escobozo
                        </p>
                    </span>
                </div>
            </section>
        </footer>
    )
}

export default Rodape