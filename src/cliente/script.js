pentitle="SCSS Arrow Animation";

function cambiar_parrafo(){
    document.getElementById("edit-acercade").style.display="block";
    let texto = document.getElementById("text-acercade").innerText;
    console.log(texto);
  };
  function cambiar_texto(valor){
    document.getElementById("text-acercade").innerText=valor;
  };

  function logMessage(message){
      console.log(message+"<br>");
  };

  //controla si se presiono enter 
  let textarea=document.getElementById("edit-acercade")
  textarea.addEventListener('keyup', (e) => {
      logMessage('Key "${e.key}" released [event: keyup]');
      if (e.key=="Enter"){
          document.getElementById("edit-acercade").style.display="none"
      }
  });