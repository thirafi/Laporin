
import { IPelapor } from './pelapor';

export interface ILaporan {
    id: number,
    jenis_laporan:string,
    deskripsi: string,
    tempat:string,
    foto:string,
    pelapor: IPelapor,
    status:number,
    createdAt:any,
    updatedAt:any
}