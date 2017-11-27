export interface IBlog {
    _id: string;
    userId: string;
    authorId: string; // userId -- hidden
    authorName: string; // username of Owner -- displayed on the blog
    authorImage: string;
    blogId: string; // format: xxxxxx_nnn  x is a alphabet except underscore
    blogTitle: string; // article title max 80 char
    blogContent: string; // Full Article
    blogimageUrl: string; // optional -- for future
    blogGuidelinesHTML: string; // guidelines for the user
    comments: IComment[];
    likes: ILikes[];
    socialMediaShares: ISocialMediaShare [];
    favorites: string[]; // userIds
    tags: string[];
    category: string[];
    status: string;
    scheduledActivationDate: Date;
    scheduledDeActivationDate: Date;
    getTotalLikes(): number;
    critics: ICritics[];
}

export class Blog implements IBlog {
  _id: string;
  userId: string;
  authorId: string; // userId -- hidden
  authorName: string; // username of Owner -- displayed on the blog
  authorImage: string;
  blogId: string; // format: xxxxxx_nnn  x is a alphabet except underscore
  blogTitle: string; // article title max 80 char
  blogContent: string; // Full Article
  blogimageUrl: string; // optional -- for future
  blogGuidelinesHTML: string; // guidelines for the user
  comments: IComment[];
  likes: ILikes[];
  socialMediaShares: ISocialMediaShare [];
  favorites: string[]; // userIds
  tags: string[];
  category: string[];
  status: string;
  scheduledActivationDate: Date;
  scheduledDeActivationDate: Date;
  critics: ICritics[];


    constructor() {
        this.likes = [] ;
        this.socialMediaShares = [];
        this.favorites = [];
        this.scheduledActivationDate = new Date();
        const d = new Date() ;
        this.scheduledDeActivationDate = new Date(d.getFullYear() + 1, d.getMonth(), d.getDate());
    }

  public getTotalLikes() {
    let total = 0;
    for(let like of this.likes) {
      total = total + like.likeDislike;
    }
    return total;
  }

}
export interface ISocialMediaShare {
    sharedOn: string; // twitter, facebook, google+ , linkedin etc.
    userId: string;
}

export class SocialMediaShare implements ISocialMediaShare {
    sharedOn: string; // twitter, facebook, google+ , linkedin etc.
    userId: string;
    constructor() {
    }
}

export interface ILikes {
    likeDislike: number; // -1, or 1
    userId: string;
}

export class Likes implements ILikes {
    likeDislike: number; // -1, or 1
    userId: string;
    constructor() {

    }
}

export interface IComment {
    message: string;
    timePosted: Date;
    owner: string; // userId
    userProfileName: string; // username displayed on the blog
    userAvatarUrl: string;
    // totalLikes: number; // future
    // totalDislikes: number;
    replies: IComment[];  //  reply or comment
}

export class Comment implements IComment {
    message: string;
    timePosted: Date;
    owner: string; // userId
    userAvatarUrl: string;
    userProfileName: string; // username displayed on the blog
    // totalLikes: number; // future
    // totalDislikes: number; // future
    replies: IComment[];  //  reply or comment
    constructor() {
        //
    }

}

export interface ICritics {
    criticContent: string;// [html , video,  images]
    timePosted: Date;
    owner: string; // userId
    blogTag: String[];
    replies: IComment[];  //  reply or comment
}

export class Critics implements ICritics {
    criticContent: string;
    timePosted: Date;
    owner: string; // userId
    blogTag: String[];
    replies: IComment[];  //  reply or comment
    constructor() {
        //
    }

}
