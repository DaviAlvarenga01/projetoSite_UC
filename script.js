
init()

function init(){
  document.getElementById("texto").addEventListener("keyup",salvar)
  document.getElementById("nome").addEventListener("keyup",salvar)
}
  

function salvar(){
 var nome = document.getElementById("nome").value
 var texto = document.getElementById("texto").value
 
 localStorage.setItem("user", nome) 
 localStorage.setItem("content", texto) 
}

function recuperar(){
  if("user" in localStorage){
    document.getElementgById("nome").value = localStorage.getItem("user")
  }
  if("content" in localStorage){
    document.getElementeById("texto").value = localStorage.getItem("content")
  }
}

function limpar(){
  localStorage.clear()
} 

