import { Competence } from "./competence";

export interface ReferenceCompetences {
    languages: Array<Competence>;
    frameworks: Array<Competence>;
    sgbd: Array<Competence>;
    os: Array<Competence>;
    outils: Array<Competence>;
    methodes: Array<Competence>;
    devops: Array<Competence>;
}