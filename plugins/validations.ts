//Este es un plugin, que no es mas que el codigo o funciones que se van a utilizar muchas veces
//Deben ser declarados en el archivo nuxt.config.ts que esta en raiz
export default(context, inject) =>{
    console.log('it´s works!')
    const validations = {
        //Aqui se esta validando que ingresen algo en el campo de nombre de ingrediente
        notEmpty(value: String){
            //Si value es vacio, en este caso si retorna true, se ejecuta el error de "campo obligatorio"
            return value !== '' || "Campo obligatorio"
        },

        //Esta funcion es para validar que ingresen un correo electronico, se usa una expresion regular
        isValidEmail(value: String){
            //Daba un error en el tipo de retorno y se agrego instanceof Object
            return value.match(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/) instanceof Object || "El correo es invalido!!"
        }
    }

    inject('validations', validations)
}