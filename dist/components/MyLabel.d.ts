/// <reference types="react" />
import './myLabel.css';
export interface LabelProps {
    /**
     * Label content
     */
    label: string;
    /**
      * Label Size
      */
    size?: "normal" | "h1" | "h2" | "h3";
    /**
     * Capitalize label
     */
    allCaps?: boolean;
    /**
     * Label Color
     */
    color?: "primary" | "secondary" | "tertiary";
    /**
     * Custom font Color
     */
    myColor?: string;
    /**
     * Custom font Color
     */
    backgroundColor?: string;
}
/**
 * Label UI component
 */
export declare const MyLabel: ({ label, size, color, allCaps, backgroundColor, myColor }: LabelProps) => JSX.Element;
