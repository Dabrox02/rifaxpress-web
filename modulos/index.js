const indexModule = () => {
  addEventListener('submit', (event)=>{
      event.preventDefault();
      if(event.target.matches("#contact-form")){
        const form = event.target
        const formData = new FormData(form);
        const data = Object.fromEntries(formData)
        alert(`Gracias, ${data.name} por tu mensaje ${data.message} responderemos a tu correo ${data.email}`)
      }
  })  
}

export {
  indexModule
}