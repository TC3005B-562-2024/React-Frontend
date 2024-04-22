import { IItemSubitem } from '../ItemSubitem/types';
export interface IInformationBar {
    /**
     * The title of the information bar
     */
    title: string;
    /**
     * The elements of the information bar (the props of the ItemSubitem component)
     */
    elements: Array<IItemSubitem>
}