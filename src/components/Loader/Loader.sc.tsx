import styled, { keyframes } from 'styled-components';

const orbBounceBefore = keyframes`
 60% {
      transform: translateX(0);
      animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
    }
    80% {
      animation-timing-function: cubic-bezier(0, 1.11, 0.7, 1.43);
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
`;

const orbBounceAfter = keyframes`
   60% {
     animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
     transform: translateX(0);
   }
   80% {
     animation-timing-function: cubic-bezier(0, 1.11, 0.7, 1.43);
     transform: translateX(100%);
   }
   100% {
     transform: translateX(0);
   }
 `;

export const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(90deg);
  width: 2em;

  &,
  .spinner div {
    transform-origin: 50% 50%;
  }
  .spinner div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  &:before,
  &:after,
  .spinner div:before,
  .spinner div:after {
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    content: '';
    background: #009ddc;
    border-radius: 100%;
    width: 0.5em;
    height: 0.5em;
    position: absolute;
  }
  &:before,
  div:before {
    animation-name: ${orbBounceBefore};
    top: -0.25em;
    left: -0.25em;
  }
  &:after,
  div:after {
    animation-name: ${orbBounceAfter};
    top: -0.25em;
    right: -0.25em;
  }

  &:after {
    animation-delay: 500ms;
  }
`;

export const SpinnerA = styled.div`
  transform: rotate(60deg) translateY(0);

  &:before {
    animation-delay: 166.6666666667ms;
  }
  &:after {
    animation-delay: 666.6666666667ms;
  }
`;

export const SpinnerB = styled.div`
  transform: rotate(120deg) translateY(0);

  &:before {
    animation-delay: 333.3333333333ms;
  }

  &:after {
    animation-delay: 833.3333333333ms;
  }
`;
