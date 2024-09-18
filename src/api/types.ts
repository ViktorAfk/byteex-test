export interface ImageData {
  id: number;
  attributes: {
    name: string;
    width: number;
    height: number;
    url: string;
  };
}

export interface HeroAdvantage {
  id: number;
  attributes: {
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    icon: {
      data: ImageData;
    };
  };
}

export interface ApiResponse<T> {
  data: T;
}

export interface HeroReview {
  id: number;
  attributes: {
    userName: string;
    additionalInfo: string;
    description: string;
    rate: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    userIcon: {
      data: ImageData;
    };
  };
}

export interface Banner {
  id: number;
  attributes: {
    benefit: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface LoungeWear {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    picture: {
      data: ImageData;
    };
  };
}

export interface LoungeWearAdvantages {
  id: number;
  attributes: {
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    advantageIcon: {
      data: ImageData;
    };
  };
}

export interface OrderRule {
  id: number;
  attributes: {
    orderTitle: string;
    information: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    orderIcon: {
      data: ImageData;
    };
  };
}

export interface UserContent {
  id: number;
  attributes: {
    usersPictures: {
      data: ImageData[];
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface Review {
  id: number;
  attributes: {
    customerName: string;
    reviewText: string;
    reviewRate: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface FaqData {
  id: number;
  attributes: {
    question: string;
    answer: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
