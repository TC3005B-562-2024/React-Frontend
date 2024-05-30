export const shortId = (id: string | undefined): string => {
    if (!id) return '';
    return `${id.substring(0, 3)}...${id.slice(-3)}`;
  }
  
export const noUndersocore= (response:string):string => {
    return response.replace(/_/g, ' ');
}

export const TitleCase = (str: string): string => {
    return str.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Function that rounds a decimal to one decimal place without using Math.round
export const roundToOneDecimal = (num: number): number => {
    return Math.floor(num * 10) / 10;
}