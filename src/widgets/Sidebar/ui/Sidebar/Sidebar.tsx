import React, { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  return <div className={classNames(cls.Sidebar, {}, [className])}></div>;
};
