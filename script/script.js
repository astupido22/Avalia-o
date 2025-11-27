const botaoAtivar = document.getElementById('modo-futurista-btn');
const corpoDaPagina = document.body;
let modoFuturistaAtivo = false;

botaoAtivar.addEventListener('click', () =>{
    corpoDaPagina.classList.toggle('modo-futurista');
    modoFuturistaAtivo = corpoDaPagina.classList.contains('modo-futurista');
    if (modoFuturistaAtivo) {
        botaoAtivar.textContent = 'Desativar Modo futurista';
    }else{
        botaoAtivar.textContent = 'Ativar Modo Futurista';
    }
})