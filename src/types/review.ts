export interface Review {
  id: string;
  date: string;
  title: string;
  content: string;
  interactionDetail: string;
  likesCount: number;
  imageUrl: string;
  location: string;
}

export type SortOrder = 'newest' | 'oldest'; 