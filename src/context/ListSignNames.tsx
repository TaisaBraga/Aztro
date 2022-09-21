import React, { createContext, ReactNode } from "react";

type SignsNameContextProps = {
  children: ReactNode
}

type listSignNameType = {
  listSignName: object
}

const inicialValue = {
  listSignName: []
}

export const SignsNameContext = createContext<listSignNameType>(inicialValue);

const SignsNameProvider = ({ children }: SignsNameContextProps ) => {
  const listSignName  = [
    { SignNamePt: "aries", SignNameEn: "aries" },
    { SignNamePt: "touro", SignNameEn: "taurus" },
    { SignNamePt: "gemeos", SignNameEn: "gemini" },
    { SignNamePt: "cancer", SignNameEn: "cancer" },
    { SignNamePt: "leao", SignNameEn: "leo" },
    { SignNamePt: "virgem", SignNameEn: "virgo" },
    { SignNamePt: "libra", SignNameEn: "libra" },
    { SignNamePt: "escorpiao", SignNameEn: "scorpio" },
    { SignNamePt: "sagitario", SignNameEn: "sagittarius" },
    { SignNamePt: "capricornio", SignNameEn: "capricorn" },
    { SignNamePt: "aquario", SignNameEn: "aquarius" },
    { SignNamePt: "peixes", SignNameEn: "pisces" },
  ];

  return (
    <SignsNameContext.Provider value={{listSignName}}>
      {children}
    </SignsNameContext.Provider>
  );
};

export default SignsNameProvider;
