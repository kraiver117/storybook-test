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
export const MyLabel = ({
  label = "No Label",
  size = "normal",
  color = "primary",
  allCaps = false,
  backgroundColor = "transparent",
  myColor
}: LabelProps) => {
  return (
    <span style={{ color: myColor, backgroundColor }} className={`label ${ size } text-${color}`}>
      { allCaps ? label.toUpperCase() : label }
    </span>
  )
}
