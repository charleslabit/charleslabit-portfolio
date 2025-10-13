import { CATEGORY_ICONS, SKILL_CATEGORIES } from "./skills.constant";

export const useSkillsViewModel = () => {
  return {
    categoryIcons: CATEGORY_ICONS,
    skillCategories: SKILL_CATEGORIES,
  };
};
