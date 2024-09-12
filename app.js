const w = window;

const app = async () => {
  let path = w.location.pathname.split(".")[0];
  console.log(path)
  if (path === '/' || path === '/') {
    const module = await import('./modulos/index.js')
    module.indexModule()
  }
  if (path === '/login') {
    console.log("hola")
    const module = await import('./modulos/login.js')
    module.loginModule()
  }
  if (path === '/talonario') {
    const module = await import('./modulos/talonario.js')
    module.talonaryModule()
  }
}

export default app