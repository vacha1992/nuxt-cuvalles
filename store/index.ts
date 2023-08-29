//Aqui estoy tipando
interface AppState{
    title: string
}

//Aqui es una funcion que regresa un titulo, titulo que estara en la barra principal
export const state = (): AppState => ({
    title: 'SCAAM - CUValles',
})

//Y aqui creo que asigna un nuevo titulo
export const mutations = {
    setTitle(state: AppState , newTitle: string){
        state.title = newTitle
    }
}