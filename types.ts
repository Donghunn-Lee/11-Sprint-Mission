export interface article {
  id: number;
  title: string;
  content: string;
  image?: string;
  writer: { nickname: string; id: number };
  likeCount: number;
  updatedAt: string;
}
