import { serverUrl } from "../constants";
import { Category, Exercise, Team } from "./backend-types"
import { useAuthHeader } from "./user-hooks/user-hooks";

export async function getCurrentExercise(auth: { Authorization: string }): Promise<Exercise | null> {
   return{ "attachments": [],
    "category_ord": 0,
    "category_uuid": "1555b1e3-f706-4db8-99a4-9d683b43ce42",
    "description": "Az Amerikában használatos űrmértékeket az alábbi szabályok szerint lehet átváltani egymásra:\n\\vspace{-0.7cm} \\begin{center}\n1 gallon $ = $ 8 pint \\\\ 1 quart $ = $ 2 pint \\\\ 1 quart $ = $ 32 folyékony uncia \\\\ 1 cup $ = $ 8 folyékony uncia \\\\ 1 cup $ = $ 16 evőkanál \\\\ 1 evőkanál $ = $ 3 teáskanál \\\\ \\end{center} Hány teáskanálnyi folyadék egyenlő 1 gallonnal?",
    "max_points": 3,
    "max_retries": 3,
    "sequence_number": 0,
    "title": "'merica",
    "uuid": "d9ea7d0d-3f37-4668-99ca-e12bedb1ffef"}
    const result = await fetch(`${serverUrl}/exercise/current`, {
        method: 'GET',
        headers: { ...auth },
    });
    if (!result.ok) return null;
    return await result.json();
}
export async function getTeam(auth: { Authorization: string }): Promise<Team | null> {
    return {
        "email": "tomi@csilling.com",
        "name": "csilling tomi csapata",
        "uuid": "bd5a7e85-6d69-4718-afff-e50049982d12"
    }
    const result = await fetch(`${serverUrl}/team/my`, {
        method: 'GET',
        headers: { ...auth },
    });
    if (!result.ok) return null;
    return await result.json();
}
export async function getCategory(auth: { Authorization: string }, uuid: string): Promise<Category | null> {
    return {
            "ends_at": "2020-12-01T13:00:00+0000",
            "name": "Ovodas kategoria",
            "starts_at": "2020-11-01T12:00:00+0000",
            "uuid": "1555b1e3-f706-4db8-99a4-9d683b43ce42"
    }
    const result = await fetch(`${serverUrl}/category/${uuid}`, {
        method: 'GET',
        headers: { ...auth },
    });
    if (!result.ok) return null;
    return await result.json();
}
