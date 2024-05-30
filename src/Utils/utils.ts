export const shortId = (id: string): string => {
    return `${id.substring(0, 3)}...${id.slice(-3)}`;
  }
  
export const noUndersocore= (response:string):string => {
    return response.replace(/_/g, ' ');
}

export const TitleCase = (str: string): string => {
    return str.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}