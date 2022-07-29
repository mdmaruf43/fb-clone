import UserDataType from "./UserDataType";

export default interface PostDataType {
    id:                 number;
    description:        string;
    created_at:         string;
    total_likes:        number;
    is_liked:           boolean;
    photos:             PhotoDataType[];
    comments:           CommentDataType[];
    user:               UserDataType;
}

interface PhotoDataType {
    id:     number;
    path:   string;
}

interface CommentDataType {
    comment_message:      string;
    user:                 UserDataType;
}