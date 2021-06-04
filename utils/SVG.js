const svg = {
  book: 'M15,1C8.4,1,5.4,4.9,1.7,5.5V51h26.6V5.5C24.6,4.9,21.6,1,15,1z',
  bookMark:
    'M83.5,0.85H0.99v498.12h0.08c8.39,0,11.93,1.44,19.96,4.21c13.96,4.82,42.13,19.77,62.47,19.96c20.34-0.19,48.51-15.14,62.47-19.96c8.03-2.77,11.58-4.21,19.96-4.21h0.08V0.85H83.5z',
  clock:
    'M1092.7,155.7c-38.8-29.7-75,0-75,0V232c40.1-20.7,75,0,75,0c40.1-20.7,75,0,75,0v-76.3C1128.9,125.9,1092.7,155.7,1092.7,155.7z',
  mobileBookMark:
    'M168.5,2H1.4v326.7h0.2c17,0,22.2-2.9,38.4-1.1c28.3,3.2,87.3,24.6,128.5,24.8c41.2-0.1,100.2-21.6,128.5-24.8c16.3-1.8,21.4,1.1,38.4,1.1h0.2V2L168.5,2z',
};

const SVG = ({
  width,
  name,
  height,
  viewBox,
  g,
  transform,
  fill,
  strokeWidth,
}) => {
  return (
    <>
      {g ? (
        <>
          <svg x='0px' y='0px' viewBox={viewBox} height={height} width={width}>
            <g id='Group_7' transform={transform}>
              <path
                fill={fill}
                stroke='black'
                d={svg[name]}
                strokeWidth={strokeWidth}
              />
            </g>
          </svg>
        </>
      ) : (
        <>
          <svg x='0' y='0' viewBox={viewBox} height={height} width={width}>
            <path
              fill={fill}
              stroke='black'
              d={svg[name]}
              strokeWidth={strokeWidth}
            ></path>
          </svg>{' '}
        </>
      )}
    </>
  );
};

export default SVG;
