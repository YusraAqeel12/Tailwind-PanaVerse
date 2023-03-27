import { FC } from "react"

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="max-w-screen-lg mx-auto px-3 ">
      {children}
    </div>

  )
}

export default Wrapper
//typescrity ko bata yeh fc kai its a functional component