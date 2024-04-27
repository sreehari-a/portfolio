export const getExperience = (date: string) => {

return Math.round(((new Date().getTime() - new Date(date).getTime())/31536000000));
}