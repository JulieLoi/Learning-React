import { CardFormEnum } from "./Enums";

export const cardFormReducer = (state: any, action: { type: any; payload: any; }) => {
    console.log(action.payload);
    switch (action.type) {
        case CardFormEnum.All: 
            return {
                image: action.payload.image,
                name: action.payload.name,
                jobPosition: action.payload.jobPosition,
                personalLink: action.payload.personalLink,
                emailLink: action.payload.emailLink,
                linkedInLink: action.payload.linkedInLink,
                aboutText: action.payload.aboutText,
                twitterLink: action.payload.twitterLink,
                facebookLink: action.payload.facebookLink,
                instagramLink: action.payload.instagramLink,
                githubLink: action.payload.githubLink
            }
        case CardFormEnum.Image:           return {...state, image: action.payload}
        case CardFormEnum.Name:            return {...state, name: action.payload}
        case CardFormEnum.JobPosition:     return {...state, jobPosition: action.payload}
        case CardFormEnum.PersonalLink:    return {...state, personalLink: action.payload}
        case CardFormEnum.EmailLink:       return {...state, emailLink: action.payload}
        case CardFormEnum.LinkedInLink:    return {...state, linkedInLink: action.payload}
        case CardFormEnum.AboutText:       return {...state, aboutText: action.payload}
        case CardFormEnum.InterestsText:   return {...state, interestsText: action.payload}
        case CardFormEnum.TwitterLink:     return {...state, twitterLink: action.payload}
        case CardFormEnum.FacebookLink:    return {...state, facebookLink: action.payload}
        case CardFormEnum.InstagramLink:   return {...state, instagramLink: action.payload}
        case CardFormEnum.GithubLink:      return {...state, githubLink: action.payload}
        default:    return state;
    }
}

/**

name: "Name",
jobPosition: "Job Position",
personalLink: "Personal Website Link",
emailLink: "Email Link",
linkedInLink: "LinkedIn Link",
aboutText: "About Text",
interestsText: "Interests Text",
twitterLink: "Twitter Link",
facebookLink: "Facebook Link",
instagramLink: "Instagram Link",
githubLink: "Github Link"

 */