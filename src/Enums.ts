
/**
 * Enum for Digital Business Card Form
 */
export enum CardFormEnum {
    Image = "UPDATE_IMAGE",
    Name = "UPDATE_NAME",
    JobPosition = "UPDATE_JOB_POSITION",
    PersonalLink = "UPDATE_PERSONAL_LINK",
    EmailLink = "UPDATE_EMAIL_LINK",
    LinkedInLink = "UPDATE_LINKEDIN_LINK",
    AboutText = "UPDATE_ABOUT_TEXT",
    InterestsText = "UPDATE_INTERESTS_TEXT",
    TwitterLink = "UPDATE_TWITTER_LINK",
    FacebookLink = "UPDATE_FACEBOOK_LINK",
    InstagramLink = "UPDATE_INSTAGRAM_LINK",
    GithubLink = "UPDATE_GITHUB_LINK",
}

/**
 * Enum for Jokes Page
 */
export enum JokeEnum {
    BestRated = "SORT_BY_BEST_RATED",
    MostUpvotes = "SORT_BY_MOST_UPVOTES",
    LeastUpvotes ="SORT_BY_LEAST_UPVOTES",
    MostDownvotes = "SORT_BY_MOST_DOWNVOTES",
    LeastDownvotes = "SORT_BY_LEAST_DOWNVOTES",
    JokesOnly = "ONLY_JOKES",
    PunsOnly = "ONLY_PUNS",
    ClearFilter = "CLEAR_FILTER",
}


export enum NotesEnum {
    SetState = "SET_STATE",
    CreateNote = "CREATE_NOTE",
    UpdateNoteTitle = "UPDATE_NOTE_TITLE",
    UpdateNoteBody = "UPDATE_NOTE_BODY",
    UpdateEdit = "UPDATE_EDIT",
    UpdateCurrentNoteId = "UPDATE_CURRENT_NOTE_ID",
    ChangeDarkMode = "CHANGE_DARK_MODE",
    DeleteNote = "DELETE_NOTE",
    EditNoteTitle = "EDIT_NOTE_TITLE",
}

export enum TenziesEnum {
    NewDice = "NEW_DICE",
    RollDice = "ROLL_DICE",
    HoldDie = "HOLD_DIE",
    ChangeTenzies = "CHANGE_TENZIES_VALUE",
    NewGame = "NEW_GAME",
}