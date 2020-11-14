import { serverUrl } from "../constants";
import { Category, Exercise, Team } from "./backend-types"
import { useAuthHeader } from "./user-hooks/user-hooks";
import moment from "moment"

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
    let raw_obj = await result.json();
    return {'starts_at': moment(raw_obj.starts_at), 'ends_at': moment(raw_obj.ends_at), 'uuid': raw_obj.category, 'name': raw_obj.name}
}
