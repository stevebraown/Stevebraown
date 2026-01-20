import { useLanguage } from "../../i18n/LanguageProvider";
import { Button } from "./Button";

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  const label = language === "en" ? "EN / FR" : "FR / EN";

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      aria-label="Toggle language"
      className="border border-border/60 px-3"
    >
      {label}
    </Button>
  );
};
