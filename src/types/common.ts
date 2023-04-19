import React from "react";

export interface ComponentWithChildProps {
  children: React.ReactNode;
}

export interface MainButtonProps {
  appearance?: "primary" | "default" | "border";
}

interface OptionsItem {
  name: string;
  value: any;
  selected?: boolean;
}
export interface OptionsButtonProps extends MainButtonProps {
  menuItems: OptionsItem[];
  value: any;
  handleChange: (val: any) => void;
}
