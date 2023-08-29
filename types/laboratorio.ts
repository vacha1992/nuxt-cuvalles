import Usuario from 'types/usuario'

export default interface Laboratorio{
    id: number;
    capacidad: number;
    edificio: string;
    nombre: string;
    usuario_codigo: string;
    jefe: Usuario;
}