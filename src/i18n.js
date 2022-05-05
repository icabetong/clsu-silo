import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "app-name": "Silo",
      "authentication": {
        "header": "Authentication is Required",
        "subheader": "You'll need to enter your valid credentials to access this database"
      },
      "field": {
        "email": "Email",
        "password": "Password"
      },
      "placeholder": {
        "email": "yourname@example.com",
        "password": "••••••••"
      },
      "button": {
        "sign-in": "Sign-in"
      }
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false
  }
});
export default i18n;