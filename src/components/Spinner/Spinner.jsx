import Loader from 'react-loader-spinner';
import { SpinerContainer } from './Spinner.styles';

export default function Spinner() {
  return (
    < SpinerContainer>
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={0}
      />
    </ SpinerContainer>
  );
}
// import styled from '@emotion/styled/macro';
// import { keyframes } from '@emotion/react';
// import { CgSpinner } from 'react-icons/cg';

// const spin = keyframes`
// 0% {
//   transform: rotate(0deg);
// }
// 100% {
//   transform: rotate(1turn);
// }
// `;

// export const Spinner = styled(CgSpinner)`
//   animation: ${spin} 0.85s linear infinite;
// `;

// Spinner.defaultProps = {
//   size: 40,
// };