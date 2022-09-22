import React, { createContext, ReactNode, useContext } from "react";

type SignsNameContextProps = {
  children: ReactNode
}

export interface IsignName {
  signNamePt: string;
  signNameEn: string;
}

interface IlistSignName {
  listSignName: IsignName[];
}


export const SignsNameContext = createContext<IlistSignName>({
  listSignName: []
});
export const useSignsName = () => useContext(SignsNameContext);

const SignsNameProvider = ({ children }: SignsNameContextProps ) => {
  const listSignName: IsignName[] = [
    { signNamePt: "aries", signNameEn: "aries" },
    { signNamePt: "touro", signNameEn: "taurus" },
    { signNamePt: "gemeos", signNameEn: "gemini" },
    { signNamePt: "cancer", signNameEn: "cancer" },
    { signNamePt: "leao", signNameEn: "leo" },
    { signNamePt: "virgem", signNameEn: "virgo" },
    { signNamePt: "libra", signNameEn: "libra" },
    { signNamePt: "escorpiao", signNameEn: "scorpio" },
    { signNamePt: "sagitario", signNameEn: "sagittarius" },
    { signNamePt: "capricornio", signNameEn: "capricorn" },
    { signNamePt: "aquario", signNameEn: "aquarius" },
    { signNamePt: "peixes", signNameEn: "pisces" },
  ];

  return (
    <SignsNameContext.Provider value={{listSignName}}>
      {children}
    </SignsNameContext.Provider>
  );
};

export default SignsNameProvider;
