export interface SearchResponse {
  id: number;
  name: string;
  html_url: string;
  language: string;
  description: string;
  owner: {
    avatar_url: string;
    html_url: string;
  };
}
