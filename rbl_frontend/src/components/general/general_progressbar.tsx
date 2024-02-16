const ProgressBar = ({
  bgColorOuter,
  bgColorInner,
  progress,
  borderRadPx = 0,
  justifyCnt = "flex-start",
  textDisplayed,
  textColor = "var(--LightestOne)",
}: {
  bgColorOuter: string;
  bgColorInner: string;
  progress: number; // Percentage of progress
  borderRadPx?: number; //In pixels
  justifyCnt?: string;
  textDisplayed?: string;
  textColor?: string;
}) => {
  const OuterDiv = {
    width: `100%`,
    backgroundColor: bgColorOuter,
    borderRadius: `${borderRadPx}px`,
    margin: `0.05em auto`,
    justifyContent: justifyCnt,
    display: "flex",
  };

  const InnerDiv = {
    height: `100%`,
    width: `${progress}%`,
    backgroundColor: bgColorInner,
    borderRadius: `${borderRadPx}px`,
    margin: "0",
    justifyContent: justifyCnt,
    display: "flex",
  };

  const textSpan = {
    padding: "0 0.3em",
    color: textColor || "black",
    fontSize: "0.4em",
    fontWeight: "bold",
    height: "100%",
  };

  return (
    <div style={OuterDiv}>
      <div style={InnerDiv}>
        <span style={textSpan}>{`${textDisplayed}`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
