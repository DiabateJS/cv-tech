import { ResponseResultat } from "./responseresultat";

export interface CvResponse {
    resultat: ResponseResultat;
    code: number;
    errors: Array<any>
}