export type ListItem = {
  id: number;
  avatarUrl: string;
  title: string;
  description: string;
};

export type CardData = {
  id: number;
  description: string;
  descritionDetail: string;
  list: ListItem[];
};
