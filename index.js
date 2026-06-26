const btnLogin = document.getElementById("btn-login");
const btnCadastro = document.getElementById("btn-cadastro");
const formLogin = document.getElementById("form-login");
const formCadastro = document.getElementById("form-cadastro");
const divSenha = document.getElementById("div-senha");
const btnRevealed = document.getElementById("btn-revealed");
const btnHidden = document.getElementById("btn-hidden");


const usuarios = [
    {
        id: 1,
        nome: "Domingos Muratori",
        email: "domingosmuratori@outlook.com",
        senha: "1234",
    },
    {
        id: 2,
        nome: "Maria",
        email: "maria@outlook.com",
        senha: "1232",
    },
    {
        id: 3,
        nome: "joao",
        email: "joao@outlook.com",
        senha: "1232",
    },
]

btnCadastro.addEventListener("click", () => {
    btnLogin.classList.remove("bg-[#006970]", "text-white");
    btnCadastro.classList.add("bg-[#006970]", "text-white");
    formCadastro.classList.remove("hidden");
    formLogin.classList.add("hidden");
    
})

btnLogin.addEventListener("click", () => {
    btnLogin.classList.add("bg-[#006970]", "text-white");
    btnCadastro.classList.remove("bg-[#006970]", "text-white");
    formCadastro.classList.add("hidden");
    formLogin.classList.remove("hidden");
})

btnRevealed.addEventListener("click", () => {
    let passwordChange = document.getElementById("senhaCadastro").type = 'text'
    btnRevealed.classList.add("hidden");
    btnHidden.classList.remove("hidden");
})

btnHidden.addEventListener("click", () => {
    let passwordChange = document.getElementById("senhaCadastro").type = 'password'
    btnHidden.classList.add("hidden");
    btnRevealed.classList.remove("hidden");
})

function handleLogin(event) {
    event.preventDefault()
    const emailLogin = document.getElementById("emailLogin").value
    const senhaLogin = document.getElementById("senhaLogin").value

    const usuario = usuarios.find((usuario) => (
        emailLogin === usuario.email && senhaLogin === usuario.senha
    ))

    if (usuario) {
        window.location.href = "./dashboard.html"
    } else {
        const alerta = document.createElement("p");
        alerta.textContent = "Email ou senha incorretos."
        alerta.classList.add("text-red-500")
        divSenha.appendChild(alerta)
    }
}

function handleCadastro(event) {
    event.preventDefault()
    const emailCadastro = document.getElementById("emailCadastro").value
    const senhaCadastro = document.getElementById("senhaCadastro").value
    const nome = document.getElementById("nome").value
}