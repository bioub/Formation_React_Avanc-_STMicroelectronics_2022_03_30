import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from "react";

type Context = {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
}

export const NameContext = createContext<Context>({
  name: '',
  setName: () => {},
});

type Props = {
  defaultName?: string
};

export function NameProvider({ defaultName = 'Titi', children }: PropsWithChildren<Props>) {
  const [name, setName] = useState(defaultName);

  return (
    <NameContext.Provider value={{name, setName}}>
      {children}
    </NameContext.Provider>
  );
}
