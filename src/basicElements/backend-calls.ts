import { serverUrl } from "../constants";
import { Category, Exercise, Team } from "./backend-types"
import { useAuthHeader } from "./user-hooks/user-hooks";

export async function getCurrentExercise(auth: { Authorization: string }): Promise<Exercise | null> {
    const result = await fetch(`${serverUrl}/exercise/current`, {
        method: 'GET',
        headers: { ...auth },
    });
    if (!result.ok) return null;
    return await result.json();
}
export async function getTeam(auth: { Authorization: string }): Promise<Team | null> {
    const result = await fetch(`${serverUrl}/team/my`, {
        method: 'GET',
        headers: { ...auth },
    });
    if (!result.ok) return null;
    return await result.json();
}
export async function getCategory(auth: { Authorization: string }, uuid: string): Promise<Category | null> {
    const result = await fetch(`${serverUrl}/category/${uuid}`, {
        method: 'GET',
        headers: { ...auth },
    });
    if (!result.ok) return null;
    return await result.json();
}
