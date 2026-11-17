import { IFrameNavigator } from "../../navigator/IFrameNavigator";
export declare class Popup {
    navigator: IFrameNavigator;
    constructor(navigator: IFrameNavigator);
    handleFootnote(link: HTMLElement, event: MouseEvent | TouchEvent): Promise<void>;
    hidePopover(): Promise<void>;
    showPopover(link: HTMLElement, event: MouseEvent | TouchEvent): Promise<void>;
    showPopup(element: any, event: MouseEvent | TouchEvent): void;
    /**
     * Brings the linked fragment into view inside the overlay. Without this the
     * overlay opens at the top of the resource, which for a shared endnotes file
     * is rarely the note that was clicked.
     */
    private scrollToFragment;
    private getScrollingElement;
}
