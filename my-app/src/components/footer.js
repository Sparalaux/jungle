import { useState } from 'react'
import '../styles/footer.css'



function Footer() {
	const [inputValue, setInputValue] = useState('inserez votre email ici')

    function blur(value) {
        if (value.includes('@')) {
            alert(inputValue)
        } else{
            alert("Attention, il n\'y a pas d\'@, ceci n\'est pas une adresse valide.")
        }
    }


	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
                
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :
                <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={() => blur(inputValue)}>Alertez moi 🚨</button>
            </div>
		</footer>
	)
}

export default Footer