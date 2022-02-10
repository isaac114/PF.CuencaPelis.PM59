import { Usuario } from "./usuario";

export class Resena {
    uid: string;
    idUsuario: string;
    idPelicula: string;
    title: string;
    poster: string;
    comentario: string;///Hace referencia al contenido de la referencia
    valoracion: number;
}