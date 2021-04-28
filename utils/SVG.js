const svg = {
  book:
    "M15,1C8.42,1,4.43,3.93,0.72,4.46V51h28.57V4.46C25.57,3.93,21.58,1,15,1z",
  bookMark:
    "M83.5,0.85H0.99v498.12h0.08c8.39,0,11.93,1.44,19.96,4.21c13.96,4.82,42.13,19.77,62.47,19.96c20.34-0.19,48.51-15.14,62.47-19.96c8.03-2.77,11.58-4.21,19.96-4.21h0.08V0.85H83.5z",
  clock:
    "M1092.7,155.69c-38.79-29.74-75,0-75,0v76.29c40.09-20.69,75,0,75,0c40.09-20.69,75,0,75,0v-76.29C1128.91,125.94,1092.7,155.69,1092.7,155.69z",
};

const SVG = ({ width, name, height, viewBox }) => {
  return (
    <svg x="0" y="0" viewBox={viewBox} height={height} width={width}>
      <path fill="none" stroke="black" d={svg[name]} strokeWidth="0.8px"></path>
    </svg>
  );
};

export default SVG;
