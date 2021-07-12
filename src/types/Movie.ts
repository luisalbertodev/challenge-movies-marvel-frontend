/* eslint-disable camelcase */
export interface IMovie {
  _id: string;
  title: string;
  release_date?: string;
  duration: number;
  overview?: string;
  cover_url?: string;
  trailer_url?: string;
  directed_by: string;
  phase?: number;
  saga?: string;
  chronology?: number;
  post_credit_scenes: number;
}

export interface IJsonMovie {
  dataSource: IMovie[];
  metadata: {
    documents: number;
  };
}
