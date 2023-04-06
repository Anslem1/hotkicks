export const HomeImage =
     process.env.PUBLIC_URL + "/Logos/HOK-background-header.svg";
export const LogoImage = process.env.PUBLIC_URL + "/Logos/HOK-Nav-logo.svg";
export const MenShoe = process.env.PUBLIC_URL + "/Logos/men-shoe.svg";
export const WomenShoe = process.env.PUBLIC_URL + "/Logos/women-shoe.svg";
export const FooterImage = process.env.PUBLIC_URL + "/Logos/Footer-logo.svg";
export const SigninHOK = process.env.PUBLIC_URL + "/Logos/signupHOK.svg";
export const payWithCard = process.env.PUBLIC_URL + "/Logos/paywithcard.svg";
export const success = process.env.PUBLIC_URL + "/Logos/HOKSUCCESS.svg";

export function formatToCurrency(amount: any) {
     const num = parseFloat(amount);
     const currency = num.toLocaleString("en-NG", {
          style: "currency",
          currency: "NGN",
     });
     return currency;
}
