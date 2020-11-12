export interface ExerciseAttachment {
    uuid: string;
    caption: string;
    mime_type: string;
    uri: string;
}

export interface Exercise {
    uuid: string;
    title: string;
    description: string;
    max_retries: number;
    max_points: number;
    category_ord: number;
    attachments: ExerciseAttachment[];
    category_uuid: string;
    sequence_number: number,
}

export interface Team{
    uuid: string;
    email: string;
    name: string;
}

export interface Submission{
  exercise_uuid: string;
  guess: number;
  guess_correct: boolean;
  points_earned: number;
  sequence: number;
  submitted_at: string;
  team_uuid: string;
  uuid: string;
}

export interface Category{
    ends_at: string;
    name: string;
    starts_at: string;
    uuid: string;
}