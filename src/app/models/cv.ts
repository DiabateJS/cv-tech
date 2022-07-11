import { Langage } from "./langage";

export interface Cv {
    id: string;
    titre: string;
    poste: string;
    annee: string;
    dispo: string;
    intro: string;
    userid: string;
    name: string;
    langages: Array<Langage>;
}
