import "./SideMarginWrapper.scss";

interface ISideMarginWrapper {
  children: string | JSX.Element | JSX.Element[];
}

const SideMarginWrapper = ({ children }: ISideMarginWrapper) => {
  return <div className="side-margin-wrapper">{children}</div>;
};

export default SideMarginWrapper;
