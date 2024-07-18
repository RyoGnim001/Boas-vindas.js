const btn= document.getElementById("btn")
btn.onclick = function () {
  const name= document.getElementById("name")
  if (!name.value) return //pode-se usar um alert para exibir o preenchimento dos campos
  alert("Boas vindas " +name.value)

}
